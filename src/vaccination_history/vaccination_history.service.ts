import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVaccinationHistoryDto } from './dto/create-vaccination_history.dto';
import { UpdateVaccinationHistoryDto } from './dto/update-vaccination_history.dto';
import { VaccinationHistory } from './schemas/vaccination_history.entity';

@Injectable()
export class VaccinationHistoryService {
  constructor(
    @InjectModel(VaccinationHistory.name)
    private readonly vaccineWorkerModel: Model<VaccinationHistory>,
  ) {}
  create(createVaccinationHistoryDto: CreateVaccinationHistoryDto) {
    return this.vaccineWorkerModel.create(createVaccinationHistoryDto);
  }

  findAll() {
    return this.vaccineWorkerModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} vaccinationHistory`;
  }

  update(id: number, updateVaccinationHistoryDto: UpdateVaccinationHistoryDto) {
    return `This action updates a #${id} vaccinationHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} vaccinationHistory`;
  }
}
