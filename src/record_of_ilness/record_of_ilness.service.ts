import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRecordOfIllnessDto } from './dto/create-record_of_ilness.dto';
import { UpdateRecordOfIlnessDto } from './dto/update-record_of_ilness.dto';
import { RecordOfIllness } from './schemas/record_of_ilness.schema';

@Injectable()
export class RecordOfIlnessService {
  constructor(
    @InjectModel(RecordOfIllness.name)
    private readonly recordWorkerModel: Model<RecordOfIllness>,
  ) {}
  create(createRecordOfIlnessDto: CreateRecordOfIllnessDto) {
    return this.recordWorkerModel.create(createRecordOfIlnessDto);
  }

  findAll() {
    return this.recordWorkerModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} recordOfIlness`;
  }

  update(id: number, updateRecordOfIlnessDto: UpdateRecordOfIlnessDto) {
    return `This action updates a #${id} recordOfIlness`;
  }

  remove(id: number) {
    return `This action removes a #${id} recordOfIlness`;
  }
}
