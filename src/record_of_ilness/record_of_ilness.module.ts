import { Module } from '@nestjs/common';
import { RecordOfIlnessService } from './record_of_ilness.service';
import { RecordOfIlnessController } from './record_of_ilness.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RecordOfIllness,
  RecordOfIllnessSchema,
} from './schemas/record_of_ilness.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: RecordOfIllness.name, schema: RecordOfIllnessSchema },
    ]),
  ],
  controllers: [RecordOfIlnessController],
  providers: [RecordOfIlnessService],
})
export class RecordOfIlnessModule {}
