import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { BlockWorker } from '../../block_worker/schemas/block_worker.schema';

export type BlockDocument = HydratedDocument<Block>;

@Schema({ versionKey: false })
export class Block {
  @Prop()
  number: number;

  @Prop()
  description: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'BlockWorker' }])
  workers: BlockWorker[];
}

export const BlockSchema = SchemaFactory.createForClass(Block);
