import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Block } from '../../blocks/schemas/block.schema';
import { Worker } from '../../worker/schemas/worker.schema';

export type BlockWorkerDocument = HydratedDocument<BlockWorker>;

@Schema()
export class BlockWorker {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Worker' })
  worker_id: Worker;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Block' })
  block_id: Block;
}

export const BlockWorkerSchema = SchemaFactory.createForClass(BlockWorker);
