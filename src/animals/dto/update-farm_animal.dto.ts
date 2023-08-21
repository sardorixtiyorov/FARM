import { PartialType } from '@nestjs/mapped-types';
import { CreateFarmAnimalDto } from './create-farm_animal.dto';

export class UpdateFarmAnimalDto extends PartialType(CreateFarmAnimalDto) {}
