import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { FarmAnimal } from '../../animals/schemas/farm_animal.schema';

export type InfoDocument = HydratedDocument<Info>;

@Schema()
export class Info {
  @Prop({ required: true })
  weight: number;

  @Prop({ required: true })
  color: string;

  @Prop()
  height: number;

  @Prop()
  breed: string;

  @Prop({ required: true })
  gender: string;

  @Prop()
  birth_or_acquisition: Date;

  @Prop({ default: false })
  block: number;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'FarmAnimal' }])
  animal_id: FarmAnimal[];

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'FarmAnimal' }])
  parent_id: FarmAnimal[];
}

export const InfoSchema = SchemaFactory.createForClass(Info);
