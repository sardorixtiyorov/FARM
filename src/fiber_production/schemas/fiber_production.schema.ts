import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { FarmAnimal } from '../../animals/schemas/farm_animal.schema';

export type FiberProductionDocument = HydratedDocument<FiberProduction>;

@Schema()
export class FiberProduction {
  @Prop({ required: true })
  fiber_yield: number;

  @Prop()
  shearing_schedule: string[];

  @Prop({ required: true })
  fiber_quality: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FarmAnimal' }] })
  animal_id: FarmAnimal[];
}

export const FiberProductionSchema =
  SchemaFactory.createForClass(FiberProduction);
