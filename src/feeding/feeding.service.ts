import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFeedingDto } from './dto/create-feeding.dto';
import { UpdateFeedingDto } from './dto/update-feeding.dto';
import { Feeding } from './entities/feeding.entity';

@Injectable()
export class FeedingService {
  constructor(
    @InjectModel(Feeding.name)
    private readonly feedingWorkerModel: Model<Feeding>,
  ) {}
  create(createFeedingDto: CreateFeedingDto) {
    return this.feedingWorkerModel.create(createFeedingDto);
  }

  findAll() {
    return this.feedingWorkerModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} feeding`;
  }

  update(id: number, updateFeedingDto: UpdateFeedingDto) {
    return `This action updates a #${id} feeding`;
  }

  remove(id: number) {
    return `This action removes a #${id} feeding`;
  }
}
