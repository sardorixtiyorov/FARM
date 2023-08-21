import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin, AdminDocument } from './schemas/admin.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<Admin>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const { password, confirm_password } = createAdminDto;
    if (password !== confirm_password) {
      throw new BadRequestException('passwords is not match');
    }

    const hashed_password = await bcrypt.hash(password, 7);

    const createdAdmin = await this.adminModel.create({
      ...createAdminDto,
      hashed_password,
    });
    // createdAdmin.save();

    const tokens = await this.generateTokens(createdAdmin);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updatedAdmin = await this.adminModel.findByIdAndUpdate(
      createdAdmin._id,
      {
        hashed_token: hashed_refresh_token,
      },
      {
        new: true,
      },
    );
    return updatedAdmin;
  }

  async generateTokens(admin: AdminDocument) {
    const jwtPayload = {
      id: admin._id,
      is_active: admin.is_active,
      is_creator: admin.is_creator,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    const response = {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
    return response;
  }

  async findAll(): Promise<Admin[]> {
    const admins = await this.adminModel.find();
    return admins;
  }

  async findOne(id: string) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('invalid id');
    }
    return this.adminModel.findById(id);
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    const existingAdmin = await this.adminModel
      .findByIdAndUpdate(id, updateAdminDto, { new: true })
      .exec();
    if (!existingAdmin) {
      throw new NotFoundException(`Admin #${id} not found`);
    }
    return existingAdmin;
  }

  async remove(id: string) {
    return await this.adminModel.findByIdAndDelete(id);
  }

  async findByEmail(createAdminDto: CreateAdminDto) {
    const { email } = createAdminDto;
    const emailjon = await this.adminModel.findOne({ email });
    // await this.adminModel.findByIdAndDelete(emailjon._id);

    return emailjon;
  }
}
