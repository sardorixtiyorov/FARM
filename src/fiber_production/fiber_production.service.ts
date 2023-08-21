import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFiberProductionDto } from './dto/create-fiber_production.dto';
import { UpdateFiberProductionDto } from './dto/update-fiber_production.dto';
import { FiberProduction } from './schemas/fiber_production.schema';

@Injectable()
export class FiberProductionService {
  constructor(
    @InjectModel(FiberProduction.name)
    private readonly feedingWorkerModel: Model<FiberProduction>,
  ) {}
  create(createFiberProductionDto: CreateFiberProductionDto) {
    return this.feedingWorkerModel.create(createFiberProductionDto);
  }

  findAll() {
    return this.feedingWorkerModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} fiberProduction`;
  }

  update(id: number, updateFiberProductionDto: UpdateFiberProductionDto) {
    return `This action updates a #${id} fiberProduction`;
  }

  remove(id: number) {
    return `This action removes a #${id} fiberProduction`;
  }
}
