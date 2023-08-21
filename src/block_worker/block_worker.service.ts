import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Block } from '../blocks/schemas/block.schema';
import { Worker } from '../worker/schemas/worker.schema';
import { CreateBlockWorkerDto } from './dto/create-block_worker.dto';
import { UpdateBlockWorkerDto } from './dto/update-block_worker.dto';
import { BlockWorker } from './schemas/block_worker.schema';

@Injectable()
export class BlockWorkerService {
  constructor(
    @InjectModel(BlockWorker.name)
    private readonly blockWorkerModel: Model<BlockWorker>,
    @InjectModel(Worker.name) private readonly workerModel: Model<Worker>,
    @InjectModel(Block.name) private readonly blockModel: Model<Block>,
  ) {}
  async create(createBlockWorkerDto: CreateBlockWorkerDto) {
    const blockworker = await this.blockWorkerModel.create(
      createBlockWorkerDto,
    );
    const worker = await this.workerModel.findById(blockworker.worker_id);
    const block = await this.blockModel.findById(blockworker.block_id);

    worker.blocks.push(blockworker.id);
    block.workers.push(blockworker.id);

    await worker.save();
    await block.save();
    return blockworker.save();
  }

  findAll() {
    return this.blockWorkerModel.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} blockWorker`;
  }

  update(id: number, updateBlockWorkerDto: UpdateBlockWorkerDto) {
    return `This action updates a #${id} blockWorker`;
  }

  remove(id: number) {
    return `This action removes a #${id} blockWorker`;
  }
}
