import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class CreateFarmAnimalDto {
  @ApiProperty({ description: 'ID of the animal type', example: '123' })
  @IsNotEmpty({ message: 'Animal type ID is required' })
  @IsString({ message: 'Animal type ID must be a string' })
  animal_type_id: string;

  @ApiProperty({
    description: 'Array of photo URLs for the farm animal',
    example: [
      'https://example.com/photo1.jpg',
      'https://example.com/photo2.jpg',
    ],
  })
  @IsNotEmpty({ each: true, message: 'At least one photo URL is required' })
  @IsArray({ message: 'Photos must be an array' })
  @IsString({ each: true, message: 'Each photo URL must be a string' })
  photos: string[];
}
