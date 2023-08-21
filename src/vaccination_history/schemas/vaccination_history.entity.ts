import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { FarmAnimal } from '../../animals/schemas/farm_animal.schema';
import { Vaccine } from '../../vaccine/schema/vaccine.entity';
import { Worker } from '../../worker/schemas/worker.schema';

export type VaccinationHistoryDocument = HydratedDocument<VaccinationHistory>;

@Schema()
export class VaccinationHistory {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FarmAnimal',
    required: true,
  })
  animal_id: FarmAnimal;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vaccine',
    required: true,
  })
  vaccine_type_id: Vaccine;

  @Prop({ required: true })
  vaccinated_date: Date;

  @Prop()
  next_vaccination_date: Date;

  @Prop()
  vaccination_photo: string; // Assuming it's a URL or file path

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Worker' })
  worker_id: Worker;
}

export const VaccinationHistorySchema =
  SchemaFactory.createForClass(VaccinationHistory);
