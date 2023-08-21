import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { FarmAnimalsService } from './farm_animals.service';
import { CreateFarmAnimalDto } from './dto/create-farm_animal.dto';
import { UpdateFarmAnimalDto } from './dto/update-farm_animal.dto';
import { Response } from 'express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Farm Animals') // Tag for the whole controller
@Controller('farm-animals')
export class FarmAnimalsController {
  constructor(private readonly farmAnimalsService: FarmAnimalsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a farm animal' })
  create(@Body() createFarmAnimalDto: CreateFarmAnimalDto) {
    return this.farmAnimalsService.create(createFarmAnimalDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of farm animals' })
  findAll() {
    return this.farmAnimalsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a farm animal by ID' })

  // @Render('index')
  // root() {
  //  return { message: 'Hello world!' };
  async GetById(@Param('id') id: string, @Res() res: Response) {
    const message = await this.farmAnimalsService.findOne(id);
    console.log(message.info[0].breed);
    return res.render('index', {
      message: message.info[0].breed,
    });
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.farmAnimalsService.findOne(id);
  // }

  @Post('/qrcode')
  @ApiOperation({ summary: 'Generate a QR code for a farm animal' })
  async QrCode(@Body('id') id: string) {
    return this.farmAnimalsService.generateQRcode(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a farm animal by ID' })
  update(
    @Param('id') id: string,
    @Body() updateFarmAnimalDto: UpdateFarmAnimalDto,
  ) {
    return this.farmAnimalsService.update(+id, updateFarmAnimalDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a farm animal by ID' })
  remove(@Param('id') id: string) {
    return this.farmAnimalsService.remove(+id);
  }
}
