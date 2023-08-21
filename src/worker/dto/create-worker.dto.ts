import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkerDto {
  @ApiProperty({ example: 'WorkerBek', description: "worker's name" })
  name: string;
  @ApiProperty({ example: '45', description: "worker's age" })
  age: number;
  @ApiProperty({
    example: '+998911101010',
    description: "worker's phone number",
  })
  phone_number: string;
  @ApiProperty({ example: '5', description: "worker's experience" })
  experience: number;
  @ApiProperty({ example: '1', description: "worker's speciality" })
  speciality_id: string;
  @ApiProperty({ example: 'workerbek', description: "worker's username" })
  username: string;
  @ApiProperty({ example: '[date]', description: "worker's schedule" })
  schedule: Date[];
}
