import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { FarmAnimal } from '../../animals/schemas/farm_animal.schema';
import { BlockWorker } from '../../block_worker/schemas/block_worker.schema';

@Schema()
export class Feeding {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' })
  animal_id: FarmAnimal;

  @Prop({ type: [{ type: String, enum: ['morning', 'afternoon', 'evening'] }] })
  feeding_schedules: string[];

  @Prop()
  types_of_feed: string;

  @Prop()
  dietary: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'BlockWorker' })
  worker_id: BlockWorker;
}

export const FeedingSchema = SchemaFactory.createForClass(Feeding);
