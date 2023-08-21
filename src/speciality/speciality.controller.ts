import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpecialityService } from './speciality.service';
import { CreateSpecialityDto } from './dto/create-speciality.dto';
import { UpdateSpecialityDto } from './dto/update-speciality.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('Speciality')
@Controller('speciality')
export class SpecialityController {
  constructor(private readonly specialityService: SpecialityService) {}
  @ApiOperation({ summary: 'create speciality' })
  @Post()
  create(@Body() createSpecialityDto: CreateSpecialityDto) {
    return this.specialityService.create(createSpecialityDto);
  }
  @ApiOperation({ summary: 'find all specialitys' })
  @Get()
  findAll() {
    return this.specialityService.findAll();
  }
  @ApiOperation({ summary: 'find speciality' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.specialityService.findOne(id);
  }
  @ApiOperation({ summary: 'update speciality' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSpecialityDto: UpdateSpecialityDto,
  ) {
    return this.specialityService.update(id, updateSpecialityDto);
  }
  @ApiOperation({ summary: 'delete speciality' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.specialityService.remove(id);
  }
}
