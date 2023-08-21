import { Module } from '@nestjs/common';
import { InfoService } from './info.service';
import { InfoController } from './info.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Info, InfoSchema } from './schemas/info.schema';
import {
  FarmAnimal,
  farmAnimalSchema,
} from '../animals/schemas/farm_animal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Info.name, schema: InfoSchema },
      { name: FarmAnimal.name, schema: farmAnimalSchema },
    ]),
  ],
  controllers: [InfoController],
  providers: [InfoService],
})
export class InfoModule {}
