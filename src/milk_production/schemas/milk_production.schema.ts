import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { FarmAnimal } from '../../animals/schemas/farm_animal.schema';

export type MilkProductionDocument = HydratedDocument<MilkProduction>;

@Schema()
export class MilkProduction {
  @Prop({ required: true })
  milk_yield: number;

  @Prop({ required: true })
  milk_schedule: string[];

  @Prop()
  milk_quality: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'FarmAnimal' })
  animal_id: FarmAnimal;
}

export const MilkProductionSchema =
  SchemaFactory.createForClass(MilkProduction);
