import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BlockService } from './block.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
@ApiTags('Block')
@Controller('block')
export class BlockController {
  constructor(private readonly blockService: BlockService) {}
  @ApiOperation({ summary: 'create block' })
  @Post()
  create(@Body() createBlockDto: CreateBlockDto) {
    return this.blockService.create(createBlockDto);
  }
  @ApiOperation({ summary: 'find all blocks' })
  @Get()
  findAll() {
    return this.blockService.findAll();
  }
  @ApiOperation({ summary: 'find block' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blockService.findOne(id);
  }
  @ApiOperation({ summary: 'update block' })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlockDto: UpdateBlockDto) {
    return this.blockService.update(id, updateBlockDto);
  }
  @ApiOperation({ summary: 'delete block' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blockService.remove(id);
  }
}
