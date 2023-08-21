import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsDateString,
  IsDate,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateInfoDto {
  @ApiProperty({ description: 'Weight of the animal', example: 150 })
  @IsNotEmpty({ message: 'Weight is required' })
  @IsNumber({}, { message: 'Weight must be a number' })
  weight: number;

  @ApiProperty({ description: 'Color of the animal', example: 'Brown' })
  @IsNotEmpty({ message: 'Color is required' })
  @IsString({ message: 'Color must be a string' })
  color: string;

  @ApiProperty({ description: 'Height of the animal', example: 120 })
  @IsNotEmpty({ message: 'Height is required' })
  @IsNumber({}, { message: 'Height must be a number' })
  height: number;

  @ApiProperty({ description: 'Breed of the animal', example: 'Holstein' })
  @IsNotEmpty({ message: 'Breed is required' })
  @IsString({ message: 'Breed must be a string' })
  breed: string;

  @ApiProperty({ description: 'Gender of the animal', example: 'Female' })
  @IsNotEmpty({ message: 'Gender is required' })
  @IsString({ message: 'Gender must be a string' })
  gender: string;

  @ApiProperty({
    description: 'Date of birth or acquisition',
    example: '2022-01-15',
  })
  @IsNotEmpty({ message: 'Date of birth or acquisition is required' })
  @IsDateString()
  @IsDate({ message: "It's invalid date format" })
  birth_or_acquisition: Date;

  @ApiProperty({ description: 'Block number', example: 1 })
  @IsNotEmpty({ message: 'Block number is required' })
  @IsNumber({}, { message: 'Block number must be a number' })
  block: number;

  @ApiProperty({
    description: 'ID of the animal',
    example: '6157e3ccf85e4b001f4ce29d',
  })
  @IsNotEmpty({ message: 'Animal ID is required' })
  animal_id: Types.ObjectId;

  @ApiProperty({
    description: 'ID of the parent animal',
    example: '6157e3ccf85e4b001f4ce29e',
  })
  parent_id: Types.ObjectId;
}
