import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsArray,
  IsString,
  IsMongoId,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateFiberProductionDto {
  @ApiProperty({ example: 10, description: 'The amount of fiber yield' })
  @IsNotEmpty()
  @IsNumber()
  fiber_yield: number;

  @ApiProperty({
    example: ['2023-08-01', '2023-08-15'],
    description: 'Shearing schedule dates',
  })
  @IsNotEmpty()
  @IsArray()
  shearing_schedule: string[];

  @ApiProperty({ example: 'High quality', description: 'Quality of the fiber' })
  @IsNotEmpty()
  @IsString()
  fiber_quality: string;

  @ApiProperty({
    example: '610c2ae8c5af5036ccab9c58',
    description: 'ID of the associated animal',
  })
  @IsNotEmpty()
  @IsMongoId()
  animal_id: Types.ObjectId;
}
