import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnimalTypeService } from './animal_type.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateAnimalTypeDto } from './dto/create-animal_type.dto';
import { UpdateAnimalTypeDto } from './dto/update-animal_type.dto';
@ApiTags('AnimalType')
@Controller('animal_type')
export class AnimalTypeController {
  constructor(private readonly animal_typeService: AnimalTypeService) {}
  @ApiOperation({ summary: 'create animal_type' })
  @Post()
  create(@Body() createAnimalTypeDto: CreateAnimalTypeDto) {
    return this.animal_typeService.create(createAnimalTypeDto);
  }
  @ApiOperation({ summary: 'find all animal_types' })
  @Get()
  findAll() {
    return this.animal_typeService.findAll();
  }
  @ApiOperation({ summary: 'find animal_type' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animal_typeService.findOne(id);
  }
  @ApiOperation({ summary: 'update animal_type' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAnimalTypeDto: UpdateAnimalTypeDto,
  ) {
    return this.animal_typeService.update(id, updateAnimalTypeDto);
  }
  @ApiOperation({ summary: 'delete animal_type' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animal_typeService.remove(id);
  }
}
