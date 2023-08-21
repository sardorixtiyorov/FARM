import { ApiProperty } from '@nestjs/swagger';

export class CreateAnimalTypeDto {
  @ApiProperty({ example: 'cow', description: 'the name of animal' })
  type_name: string;
  @ApiProperty({
    example: 'desc1',
    description: 'the description of animal',
  })
  description: string;
}
