import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsDateString, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateMeatProductionDto {
  @ApiProperty({ description: 'Meat yield in kilograms', example: 100 })
  @IsNotEmpty({ message: 'Meat yield is required' })
  @IsNumber({}, { message: 'Meat yield must be a number' })
  meat_yield: number;

  @ApiProperty({ description: 'Date of slaughter', example: '2023-08-31' })
  @IsNotEmpty({ message: 'Slaughter date is required' })
  @IsDateString({}, { message: 'Slaughter date must be a valid date' })
  slaughter_date: Date;

  @ApiProperty({ description: 'Quality of the meat', example: 'Premium' })
  @IsNotEmpty({ message: 'Meat quality is required' })
  @IsString({ message: 'Meat quality must be a string' })
  meat_quality: string;

  @ApiProperty({ description: 'ID of associated farm animal' })
  @IsNotEmpty({ message: 'Animal ID is required' })
  animal_id: Types.ObjectId;
}
