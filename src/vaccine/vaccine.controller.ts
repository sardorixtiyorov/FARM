import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VaccineService } from './vaccine.service';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('Vaccine')
@Controller('vaccine')
export class VaccineController {
  constructor(private readonly vaccineService: VaccineService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new vaccine' })
  create(@Body() createVaccineDto: CreateVaccineDto) {
    return this.vaccineService.create(createVaccineDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of vaccines' })
  findAll() {
    return this.vaccineService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a vaccine by ID' })
  findOne(@Param('id') id: string) {
    return this.vaccineService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a vaccine by ID' })
  update(@Param('id') id: string, @Body() updateVaccineDto: UpdateVaccineDto) {
    return this.vaccineService.update(+id, updateVaccineDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a vaccine by ID' })
  remove(@Param('id') id: string) {
    return this.vaccineService.remove(+id);
  }
}
