import { Module } from '@nestjs/common';
import { BlockWorkerService } from './block_worker.service';
import { BlockWorkerController } from './block_worker.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlockWorker, BlockWorkerSchema } from './schemas/block_worker.schema';
import { Block, BlockSchema } from '../blocks/schemas/block.schema';
import { Worker, WorkerSchema } from '../worker/schemas/worker.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BlockWorker.name, schema: BlockWorkerSchema },
      { name: Block.name, schema: BlockSchema },
    ]),
    MongooseModule.forFeature([{ name: Worker.name, schema: WorkerSchema }]),
  ],
  controllers: [BlockWorkerController],
  providers: [BlockWorkerService],
})
export class BlockWorkerModule {}
