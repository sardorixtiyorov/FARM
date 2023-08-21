import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Block } from './schemas/block.schema';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';

@Injectable()
export class BlockService {
  constructor(@InjectModel(Block.name) private blockModel: Model<Block>) {}
  create(createBlockDto: CreateBlockDto) {
    return this.blockModel.create(createBlockDto);
  }

  findAll() {
    return this.blockModel.find().exec();
  }

  findOne(id: string) {
    return this.blockModel.findById(id);
  }

  update(id: string, updateBlockDto: UpdateBlockDto) {
    return this.blockModel.findByIdAndUpdate(id, updateBlockDto);
  }

  remove(id: string) {
    return this.blockModel.findByIdAndDelete(id);
  }
}
