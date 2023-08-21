import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { FarmAnimal } from '../../animals/schemas/farm_animal.schema';
import { BlockWorker } from '../../block_worker/schemas/block_worker.schema';

export type RecordOfIllnessDocument = HydratedDocument<RecordOfIllness>;

@Schema()
export class RecordOfIllness {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FarmAnimal',
    required: true,
  })
  animal_id: FarmAnimal;

  @Prop({ required: true })
  ilness_type: string;

  @Prop({ required: true })
  date_disease: Date;

  @Prop()
  medicines: string[];

  @Prop()
  date_treatment: Date;

  @Prop()
  ilness_photo: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BlockWorker',
    required: true,
  })
  worker_id: BlockWorker;
}

export const RecordOfIllnessSchema =
  SchemaFactory.createForClass(RecordOfIllness);
