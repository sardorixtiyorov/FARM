import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, HydratedDocument } from 'mongoose';
import { Feeding } from '../../feeding/entities/feeding.entity';

export type InfoDocument = HydratedDocument<RecordsOfFeeding>;

@Schema()
export class RecordsOfFeeding {
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  consumption: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Feeding',
    required: true,
  })
  feeding_id: Feeding;
}

export const RecordsOfFeedingSchema =
  SchemaFactory.createForClass(RecordsOfFeeding);
