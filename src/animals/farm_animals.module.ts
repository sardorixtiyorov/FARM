import { Module } from '@nestjs/common';
import { FarmAnimalsService } from './farm_animals.service';
import { FarmAnimalsController } from './farm_animals.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FarmAnimal, farmAnimalSchema } from './schemas/farm_animal.schema';
import {
  AnimalType,
  AnimalTypeSchema,
} from '../animal_type/schemas/animal_type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FarmAnimal.name, schema: farmAnimalSchema },
    ]),
    MongooseModule.forFeature([
      { name: AnimalType.name, schema: AnimalTypeSchema },
    ]),
  ],
  controllers: [FarmAnimalsController],
  providers: [FarmAnimalsService],
})
export class FarmAnimalsModule {}
