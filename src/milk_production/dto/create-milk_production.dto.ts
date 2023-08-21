import { Types } from 'mongoose';

export class CreateMilkProductionDto {
  milk_yield: number;

  milk_schedule: string[];

  milk_quality: string;

  animal_id: Types.ObjectId;
}
