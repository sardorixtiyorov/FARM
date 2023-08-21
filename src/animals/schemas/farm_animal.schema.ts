import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { AnimalType } from '../../animal_type/schemas/animal_type.schema';
import { Info } from '../../info/schemas/info.schema';

export type AnimalDocument = HydratedDocument<FarmAnimal>;

@Schema()
export class FarmAnimal {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AnimalType',
  })
  animal_type_id: AnimalType;

  @Prop({ required: true })
  photos: string[];

  @Prop()
  unique_id: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Info' }])
  info: Info[];
}

export const farmAnimalSchema = SchemaFactory.createForClass(FarmAnimal);
