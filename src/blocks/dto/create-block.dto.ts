import { ApiProperty } from '@nestjs/swagger';

export class CreateBlockDto {
  @ApiProperty({ example: 'number1', description: 'the number of block' })
  number: number;
  @ApiProperty({
    example: 'desc1',
    description: 'the description of block',
  })
  description: string;
}
