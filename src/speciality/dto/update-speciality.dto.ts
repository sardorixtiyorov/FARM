import { PartialType } from '@nestjs/mapped-types';
import { CreateSpecialityDto } from './create-speciality.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateSpecialityDto extends PartialType(CreateSpecialityDto) {
  @ApiProperty({ example: 'title1', description: 'the title od speciality' })
  title: string;
  @ApiProperty({
    example: 'desc1',
    description: 'the description od speciality',
  })
  description: string;
}
