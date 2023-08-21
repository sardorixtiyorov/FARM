import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InfoService } from './info.service';
import { CreateInfoDto } from './dto/create-info.dto';
import { UpdateInfoDto } from './dto/update-info.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Info') // Tag for the whole controller
@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Post()
  @ApiOperation({ summary: 'Create information for an animal' })
  create(@Body() createInfoDto: CreateInfoDto) {
    return this.infoService.create(createInfoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of animal information' })
  findAll() {
    return this.infoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get animal information by ID' })
  findOne(@Param('id') id: string) {
    return this.infoService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update animal information by ID' })
  update(@Param('id') id: string, @Body() updateInfoDto: UpdateInfoDto) {
    return this.infoService.update(id, updateInfoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete animal information by ID' })
  remove(@Param('id') id: string) {
    return this.infoService.remove(id);
  }
}
