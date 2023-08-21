import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';
import { Vaccine } from './schema/vaccine.entity';

@Injectable()
export class VaccineService {
  constructor(
    @InjectModel(Vaccine.name)
    private readonly vaccineWorkerModel: Model<Vaccine>,
  ) {}
  create(createVaccineDto: CreateVaccineDto) {
    return this.vaccineWorkerModel.create(createVaccineDto);
  }

  findAll() {
    return this.vaccineWorkerModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} vaccine`;
  }

  update(id: number, updateVaccineDto: UpdateVaccineDto) {
    return `This action updates a #${id} vaccine`;
  }

  remove(id: number) {
    return `This action removes a #${id} vaccine`;
  }
}
