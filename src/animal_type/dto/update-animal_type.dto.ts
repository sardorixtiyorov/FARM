import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAnimalTypeDto } from './create-animal_type.dto';

export class UpdateAnimalTypeDto extends PartialType(CreateAnimalTypeDto) {
  @ApiProperty({ example: 'cow', description: 'the name of animal' })
  type_name: string;
  @ApiProperty({
    example: 'desc1',
    description: 'the description of animal',
  })
  description: string;
}
