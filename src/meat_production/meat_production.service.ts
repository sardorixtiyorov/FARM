import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMeatProductionDto } from './dto/create-meat_production.dto';
import { UpdateMeatProductionDto } from './dto/update-meat_production.dto';
import { MeatProduction } from './schema/meat_production.schema';

@Injectable()
export class MeatProductionService {
  constructor(
    @InjectModel(MeatProduction.name)
    private readonly feedingWorkerModel: Model<MeatProduction>,
  ) {}
  create(createMeatProductionDto: CreateMeatProductionDto) {
    return this.feedingWorkerModel.create(createMeatProductionDto);
  }

  findAll() {
    return this.feedingWorkerModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} meatProduction`;
  }

  update(id: number, updateMeatProductionDto: UpdateMeatProductionDto) {
    return `This action updates a #${id} meatProduction`;
  }

  remove(id: number) {
    return `This action removes a #${id} meatProduction`;
  }
}
