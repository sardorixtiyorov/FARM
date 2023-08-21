import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FiberProductionService } from './fiber_production.service';
import { CreateFiberProductionDto } from './dto/create-fiber_production.dto';
import { UpdateFiberProductionDto } from './dto/update-fiber_production.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Fiber Production')
@Controller('fiber-production')
export class FiberProductionController {
  constructor(
    private readonly fiberProductionService: FiberProductionService,
  ) {}

  @ApiOperation({ summary: 'Create a new fiber production entry' })
  @Post()
  create(@Body() createFiberProductionDto: CreateFiberProductionDto) {
    return this.fiberProductionService.create(createFiberProductionDto);
  }

  @ApiOperation({ summary: 'Get all fiber production entries' })
  @Get()
  findAll() {
    return this.fiberProductionService.findAll();
  }

  @ApiOperation({ summary: 'Get a fiber production entry by ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fiberProductionService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a fiber production entry by ID' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFiberProductionDto: UpdateFiberProductionDto,
  ) {
    return this.fiberProductionService.update(+id, updateFiberProductionDto);
  }

  @ApiOperation({ summary: 'Delete a fiber production entry by ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fiberProductionService.remove(+id);
  }
}
