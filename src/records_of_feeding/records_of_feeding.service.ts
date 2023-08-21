import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRecordsOfFeedingDto } from './dto/create-records_of_feeding.dto';
import { UpdateRecordsOfFeedingDto } from './dto/update-records_of_feeding.dto';
import { RecordsOfFeeding } from './schemas/records_of_feeding.schema';

@Injectable()
export class RecordsOfFeedingService {
  constructor(
    @InjectModel(RecordsOfFeeding.name)
    private readonly recordWorkerModel: Model<RecordsOfFeeding>,
  ) {}
  create(createRecordsOfFeedingDto: CreateRecordsOfFeedingDto) {
    return this.recordWorkerModel.create(createRecordsOfFeedingDto);
  }

  findAll() {
    return this.recordWorkerModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} recordsOfFeeding`;
  }

  update(id: number, updateRecordsOfFeedingDto: UpdateRecordsOfFeedingDto) {
    return `This action updates a #${id} recordsOfFeeding`;
  }

  remove(id: number) {
    return `This action removes a #${id} recordsOfFeeding`;
  }
}
