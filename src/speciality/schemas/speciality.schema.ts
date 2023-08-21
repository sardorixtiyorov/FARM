import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SpecialityDocument = HydratedDocument<Speciality>;

@Schema({ versionKey: false })
export class Speciality {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const SpecialitySchema = SchemaFactory.createForClass(Speciality);
