import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsArray, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateFeedingDto {
  @ApiProperty({
    description: 'ID of the animal',
    example: '6157e3ccf85e4b001f4ce29d',
  })
  @IsNotEmpty({ message: 'Animal ID is required' })
  animal_id: Types.ObjectId;

  @ApiProperty({
    description: 'Feeding schedules',
    example: ['morning', 'afternoon'],
  })
  @IsNotEmpty({ message: 'Feeding schedules are required' })
  @IsArray({ message: 'Feeding schedules must be an array' })
  feeding_schedules: string[];

  @ApiProperty({ description: 'Types of feed', example: 'Grains' })
  @IsNotEmpty({ message: 'Types of feed is required' })
  @IsString({ message: 'Types of feed must be a string' })
  types_of_feed: string;

  @ApiProperty({
    description: 'Dietary information',
    example: 'High-protein diet',
  })
  @IsNotEmpty({ message: 'Dietary information is required' })
  @IsString({ message: 'Dietary information must be a string' })
  dietary: string;

  @ApiProperty({
    description: 'ID of the worker',
    example: '6157e3ccf85e4b001f4ce29e',
  })
  @IsNotEmpty({ message: 'Worker ID is required' })
  worker_id: Types.ObjectId;
}
