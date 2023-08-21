import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Speciality } from '../../speciality/schemas/speciality.schema';
import { BlockWorker } from '../../block_worker/schemas/block_worker.schema';

export type WorkerDocument = HydratedDocument<Worker>;

@Schema({ versionKey: false })
export class Worker {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop({ unique: true })
  phone_number: string;

  @Prop()
  experience: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Speciality' })
  speciality_id: Speciality;

  @Prop()
  username: string;

  @Prop({ type: [Date] })
  schedule: Date[];

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'BlockWorker' }])
  blocks: BlockWorker[];

  @Prop()
  hashed_token: string;
}

export const WorkerSchema = SchemaFactory.createForClass(Worker);
