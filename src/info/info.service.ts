import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { FarmAnimal } from '../animals/schemas/farm_animal.schema';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { Info } from './schemas/info.schema';

@Injectable()
export class InfoService {
  constructor(
    @InjectModel(Info.name) private infoModel: Model<Info>,
    @InjectModel(FarmAnimal.name) private animalModel: Model<FarmAnimal>,
  ) {}

  async create(createInfoDto: CreateInfoDto) {
    const createInfo = await this.infoModel.create(createInfoDto);
    const animal_id = createInfo.animal_id;
    console.log(animal_id);
    const animal = await this.animalModel.findById(animal_id);
    console.log(animal);
    animal.info.push(createInfo);
    animal.save();
    return createInfo;
  }

  findAll() {
    return this.infoModel.find({}).populate('animal_id').populate('parent_id');
  }

  findOne(id: string) {
    if (!Types.ObjectId.isValid(id)) return { message: 'Invalid Id' };
    const info = this.infoModel.findById(id);

    if (!info) {
      return { message: 'Info not found' };
    }
    return info;
  }

  update(id: string, updateInfoDto: UpdateInfoDto) {
    if (!Types.ObjectId.isValid(id)) return { message: 'Invalid Id' };
    const info = this.infoModel.findByIdAndUpdate(
      new Types.ObjectId(id),
      {
        ...updateInfoDto,
      },
      { new: true },
    );
    if (!info) {
      return { message: 'Info not found' };
    }
    return info;
  }

  remove(id: string) {
    if (!Types.ObjectId.isValid(id)) return { message: 'Invalid Id' };
    const info = this.infoModel.findByIdAndDelete(new Types.ObjectId(id));
    if (!info) {
      return { message: 'Info not found' };
    }
    return info;
  }
}
