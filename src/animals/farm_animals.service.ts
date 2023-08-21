import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateFarmAnimalDto } from './dto/create-farm_animal.dto';
import { UpdateFarmAnimalDto } from './dto/update-farm_animal.dto';
import { FarmAnimal } from './schemas/farm_animal.schema';
import { v4 as uuidv4 } from 'uuid';
import * as qrcodeTerminal from 'qrcode-terminal';

@Injectable()
export class FarmAnimalsService {
  constructor(
    @InjectModel(FarmAnimal.name) private farmAnimalModel: Model<FarmAnimal>,
  ) {}
  async create(createFarmAnimalDto: CreateFarmAnimalDto) {
    const createAnimal = await this.farmAnimalModel.create(createFarmAnimalDto);
    const uniqueID = uuidv4();
    console.log(uniqueID);
    createAnimal.unique_id = uniqueID;
    createAnimal.save();
    return createAnimal;
  }

  findAll() {
    return this.farmAnimalModel
      .find({})
      .populate('animal_type_id')
      .populate('info');
  }

  async findOne(id: string) {
    const findAnimal = await this.farmAnimalModel
      .findById({ _id: id })
      .populate('animal_type_id')
      .populate({ path: 'info', model: 'Info', select: '-animal_id' })
      .exec();

    return findAnimal;
  }

  async generateQRcode(id: string) {
    console.log(id);
    const dataToEncode = `http://172.20.10.13:3000/api/farm-animals/${id}`;
    qrcodeTerminal.generate(dataToEncode, {
      small: true,
    });
    console.log('QR code displayed in the terminal.');
  }

  update(id: number, updateFarmAnimalDto: UpdateFarmAnimalDto) {
    if (!Types.ObjectId.isValid(id)) return { message: 'Invalid Id' };
    const animal = this.farmAnimalModel.findByIdAndUpdate(
      new Types.ObjectId(id),
      {
        ...updateFarmAnimalDto,
      },
      { new: true },
    );
    if (!animal) {
      return { message: 'Animal not found' };
    }
    return animal;
  }

  remove(id: number) {
    if (!Types.ObjectId.isValid(id)) return { message: 'Invalid Id' };
    const animal = this.farmAnimalModel.findByIdAndDelete(
      new Types.ObjectId(id),
    );
    if (!animal) {
      return { message: 'Animal not found' };
    }
    return animal;
  }
}
