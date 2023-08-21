import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorkerService } from './worker.service';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('Worker')
@Controller('worker')
export class WorkerController {
  constructor(private readonly workerService: WorkerService) {}
  @ApiOperation({ summary: 'create worker' })
  @Post()
  create(@Body() createWorkerDto: CreateWorkerDto) {
    return this.workerService.create(createWorkerDto);
  }
  @ApiOperation({ summary: 'find all workers' })
  @Get()
  findAll() {
    return this.workerService.findAll();
  }
  @ApiOperation({ summary: 'find worker' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workerService.findOne(id);
  }
  @ApiOperation({ summary: 'update worker' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkerDto: UpdateWorkerDto) {
    return this.workerService.update(id, updateWorkerDto);
  }
  @ApiOperation({ summary: 'delete worker' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workerService.remove(id);
  }
}
