import { Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsDate,
  IsOptional,
  IsArray,
  IsUrl,
} from 'class-validator';

export class CreateRecordOfIllnessDto {
  @ApiProperty({
    type: Types.ObjectId,
    description: 'ID of the animal',
    required: true,
  })
  @IsNotEmpty()
  animal_id: Types.ObjectId;

  @ApiProperty({ description: 'Type of illness', required: true })
  @IsNotEmpty()
  @IsString()
  ilness_type: string;

  @ApiProperty({ description: 'Date of disease occurrence', required: true })
  @IsNotEmpty()
  @IsDate()
  date_disease: Date;

  @ApiProperty({ type: [String], description: 'List of medicines' })
  @IsOptional()
  @IsArray()
  medicines: string[];

  @ApiProperty({ description: 'Date of treatment' })
  @IsOptional()
  @IsDate()
  date_treatment: Date;

  @ApiProperty({ description: 'Photo of the illness' })
  @IsOptional()
  @IsUrl()
  ilness_photo: string;

  @ApiProperty({
    type: Types.ObjectId,
    description: 'ID of the worker',
    required: true,
  })
  @IsNotEmpty()
  worker_id: Types.ObjectId;
}
