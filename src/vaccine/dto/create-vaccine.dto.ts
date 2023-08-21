import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVaccineDto {
  @ApiProperty({ description: 'Type of the vaccine', example: 'COVID-19' })
  @IsNotEmpty({ message: 'Vaccine type is required' })
  @IsString({ message: 'Vaccine type must be a string' })
  vaccine_type: string;

  @ApiProperty({ description: 'Name of the vaccine', example: 'Pfizer' })
  @IsNotEmpty({ message: 'Vaccine name is required' })
  @IsString({ message: 'Vaccine name must be a string' })
  vaccine_name: string;
}
