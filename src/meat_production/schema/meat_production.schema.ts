import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { FarmAnimal } from '../../animals/schemas/farm_animal.schema';

export type MeatProductionDocument = HydratedDocument<MeatProduction>;

@Schema()
export class MeatProduction {
  @Prop({ required: true })
  meat_yield: number;

  @Prop({ required: true })
  slaughter_date: Date;

  @Prop({ required: true })
  meat_quality: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'FarmAnimal' }])
  animal_id: FarmAnimal;
}

export const MeatProductionSchema =
  SchemaFactory.createForClass(MeatProduction);
