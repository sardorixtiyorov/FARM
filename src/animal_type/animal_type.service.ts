import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AnimalType } from './schemas/animal_type.schema';
import { CreateAnimalTypeDto } from './dto/create-animal_type.dto';
import { UpdateAnimalTypeDto } from './dto/update-animal_type.dto';

@Injectable()
export class AnimalTypeService {
  constructor(
    @InjectModel(AnimalType.name) private animal_typeModel: Model<AnimalType>,
  ) {}
  create(createAnimalTypeDto: CreateAnimalTypeDto) {
    return this.animal_typeModel.create(createAnimalTypeDto);
  }

  findAll() {
    return this.animal_typeModel.find().exec();
  }

  findOne(id: string) {
    return this.animal_typeModel.findById(id);
  }

  update(id: string, updateAnimalTypeDto: UpdateAnimalTypeDto) {
    return this.animal_typeModel.findByIdAndUpdate(id, updateAnimalTypeDto);
  }

  remove(id: string) {
    return this.animal_typeModel.findByIdAndDelete(id);
  }
}
