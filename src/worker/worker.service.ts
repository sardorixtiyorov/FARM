import { Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Worker, WorkerDocument } from './schemas/worker.schema';
import { Model, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class WorkerService {
  constructor(
    @InjectModel(Worker.name) private workerModel: Model<Worker>,
    private readonly jwtService: JwtService,
  ) {}
  async create(createWorkerDto: CreateWorkerDto) {
    const createdWorker = await this.workerModel.create({
      ...createWorkerDto,
    });
    const tokens = await this.genarateToken(createdWorker);
    const hashed_token = await bcrypt.hash(tokens.refresh_token, 7);

    createdWorker.hashed_token = hashed_token;
    return createdWorker.save();
  }

  findAll(): Promise<Worker[]> {
    return this.workerModel.find().populate('speciality_id');
  }

  findOne(id: string) {
    if (!Types.ObjectId.isValid(id)) return { message: 'Invalid Id' };
    const worker = this.workerModel.findById(id);

    if (!worker) {
      return { message: 'Worker not found' };
    }
    return worker;
  }

  update(id: string, updateWorkerDto: UpdateWorkerDto) {
    if (!Types.ObjectId.isValid(id)) return { message: 'Invalid Id' };
    const worker = this.workerModel.findByIdAndUpdate(
      new Types.ObjectId(id),
      {
        ...updateWorkerDto,
      },
      { new: true },
    );
    if (!worker) {
      return { message: 'Worker not found' };
    }
    return worker;
  }

  remove(id: string) {
    if (!Types.ObjectId.isValid(id)) return { message: 'Invalid Id' };
    const worker = this.workerModel.findByIdAndDelete(new Types.ObjectId(id));
    if (!worker) {
      return { message: 'Worker not found' };
    }
    return worker;
  }
  async genarateToken(worker: WorkerDocument) {
    const jwtPayload = {
      id: worker._id,
      username: worker.username,
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
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }
}
