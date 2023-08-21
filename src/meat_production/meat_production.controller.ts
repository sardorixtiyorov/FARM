import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MeatProductionService } from './meat_production.service';
import { CreateMeatProductionDto } from './dto/create-meat_production.dto';
import { UpdateMeatProductionDto } from './dto/update-meat_production.dto';

@ApiTags('Meat Production')
@Controller('meat-production')
export class MeatProductionController {
  constructor(private readonly meatProductionService: MeatProductionService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new meat production record' })
  create(@Body() createMeatProductionDto: CreateMeatProductionDto) {
    return this.meatProductionService.create(createMeatProductionDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of all meat production records' })
  findAll() {
    return this.meatProductionService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific meat production record by ID' })
  findOne(@Param('id') id: string) {
    return this.meatProductionService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a specific meat production record by ID' })
  update(
    @Param('id') id: string,
    @Body() updateMeatProductionDto: UpdateMeatProductionDto,
  ) {
    return this.meatProductionService.update(+id, updateMeatProductionDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove a specific meat production record by ID' })
  remove(@Param('id') id: string) {
    return this.meatProductionService.remove(+id);
  }
}
