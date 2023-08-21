import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { RecordOfIlnessService } from './record_of_ilness.service';
import { CreateRecordOfIllnessDto } from './dto/create-record_of_ilness.dto';
import { UpdateRecordOfIlnessDto } from './dto/update-record_of_ilness.dto';

@ApiTags('Record of Illness')
@Controller('record-of-ilness')
export class RecordOfIlnessController {
  constructor(private readonly recordOfIlnessService: RecordOfIlnessService) {}

  @ApiOperation({ summary: 'Create a new record of illness' })
  @Post()
  create(@Body() createRecordOfIlnessDto: CreateRecordOfIllnessDto) {
    return this.recordOfIlnessService.create(createRecordOfIlnessDto);
  }

  @ApiOperation({ summary: 'Get all records of illness' })
  @Get()
  findAll() {
    return this.recordOfIlnessService.findAll();
  }

  @ApiOperation({ summary: 'Get a record of illness by ID' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordOfIlnessService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update a record of illness by ID' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRecordOfIlnessDto: UpdateRecordOfIlnessDto,
  ) {
    return this.recordOfIlnessService.update(+id, updateRecordOfIlnessDto);
  }

  @ApiOperation({ summary: 'Delete a record of illness by ID' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordOfIlnessService.remove(+id);
  }
}
