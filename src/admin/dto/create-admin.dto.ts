import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsOptional,
  Length,
  Matches,
} from 'class-validator';

export class CreateAdminDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the admin',
  })
  @IsString()
  full_name: string;

  @ApiProperty({
    example: 'admin@example.com',
    description: 'Email address of the admin',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '1234567890',
    description: 'Phone number of the admin',
    required: false,
  })
  @IsOptional()
  @IsString()
  phone_number: string;

  @ApiProperty({
    example: 'https://t.me/admin',
    description: 'Telegram link of the admin',
    required: false,
  })
  @IsOptional()
  @IsString()
  tg_link: string;

  @ApiProperty({
    example: 'Password123',
    description: 'Password for the admin',
    minLength: 8,
    maxLength: 20,
  })
  @IsString()
  @Length(8, 20) // Minimum and maximum password length
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]+$/, {
    message:
      'Password must contain at least one uppercase letter, one lowercase letter, and one number',
  })
  password: string;

  @ApiProperty({
    example: 'Password123',
    description: 'Confirmation of the password',
  })
  @IsString()
  confirm_password: string;

  @ApiProperty({
    example: 'A brief description of the admin',
    description: 'Description of the admin',
    required: false,
  })
  @IsOptional()
  @IsString()
  description: string;
}
