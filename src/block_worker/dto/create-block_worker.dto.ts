import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsMongoId } from 'class-validator';
import { Types } from 'mongoose';

export class CreateBlockWorkerDto {
  @ApiProperty({
    description: 'ID of the worker',
    example: '6157e3ccf85e4b001f4ce29d',
  })
  @IsNotEmpty({ message: 'Worker ID is required' })
  @IsMongoId({ message: 'Invalid worker ID format' })
  worker_id: Types.ObjectId;

  @ApiProperty({
    description: 'ID of the block',
    example: '6157e3ccf85e4b001f4ce29e',
  })
  @IsNotEmpty({ message: 'Block ID is required' })
  @IsMongoId({ message: 'Invalid block ID format' })
  block_id: Types.ObjectId;
}
