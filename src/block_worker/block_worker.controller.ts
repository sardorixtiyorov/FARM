import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlockWorkerService } from './block_worker.service';
import { CreateBlockWorkerDto } from './dto/create-block_worker.dto';
import { UpdateBlockWorkerDto } from './dto/update-block_worker.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Block Worker') // Tag for the whole controller
@Controller('block-worker')
export class BlockWorkerController {
  constructor(private readonly blockWorkerService: BlockWorkerService) {}

  @Post()
  @ApiOperation({ summary: 'Create a block worker' })
  create(@Body() createBlockWorkerDto: CreateBlockWorkerDto) {
    return this.blockWorkerService.create(createBlockWorkerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of block workers' })
  findAll() {
    return this.blockWorkerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a block worker by ID' })
  findOne(@Param('id') id: string) {
    return this.blockWorkerService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a block worker by ID' })
  update(
    @Param('id') id: string,
    @Body() updateBlockWorkerDto: UpdateBlockWorkerDto,
  ) {
    return this.blockWorkerService.update(+id, updateBlockWorkerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a block worker by ID' })
  remove(@Param('id') id: string) {
    return this.blockWorkerService.remove(+id);
  }
}
