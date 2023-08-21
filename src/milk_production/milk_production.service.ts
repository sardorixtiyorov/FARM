import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMilkProductionDto } from './dto/create-milk_production.dto';
import { UpdateMilkProductionDto } from './dto/update-milk_production.dto';
import { MilkProduction } from './schemas/milk_production.schema';

@Injectable()
export class MilkProductionService {
  constructor(
    @InjectModel(MilkProduction.name)
    private readonly feedingWorkerModel: Model<MilkProduction>,
  ) {}
  create(createMilkProductionDto: CreateMilkProductionDto) {
    return this.feedingWorkerModel.create(createMilkProductionDto);
  }

  findAll() {
    return this.feedingWorkerModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} milkProduction`;
  }

  update(id: number, updateMilkProductionDto: UpdateMilkProductionDto) {
    return `This action updates a #${id} milkProduction`;
  }

  remove(id: number) {
    return `This action removes a #${id} milkProduction`;
  }
}
