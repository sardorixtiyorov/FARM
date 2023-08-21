import { Injectable } from '@nestjs/common';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Speciality } from './schemas/speciality.schema';
import { Model } from 'mongoose';

@Injectable()
export class SpecialityService {
  constructor(
    @InjectModel(Speciality.name) private specialityModel: Model<Speciality>,
  ) {}
  create(createSpecialityDto: CreateSpecialityDto) {
    return this.specialityModel.create(createSpecialityDto);
  }

  findAll() {
    return this.specialityModel.find().exec();
  }

  findOne(id: string) {
    return this.specialityModel.findById(id);
  }

  update(id: string, updateSpecialityDto: UpdateSpecialityDto) {
    return this.specialityModel.findByIdAndUpdate(id, updateSpecialityDto);
  }

  remove(id: string) {
    return this.specialityModel.findByIdAndDelete(id);
  }
}
