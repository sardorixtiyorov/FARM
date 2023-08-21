import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateBlockDto } from './create-block.dto';

export class UpdateBlockDto extends PartialType(CreateBlockDto) {
  @ApiProperty({ example: '10', description: 'the number of block' })
  number: number;
  @ApiProperty({
    example: 'desc1',
    description: 'the description od block',
  })
  description: string;
}
