import { PartialType } from '@nestjs/swagger';
import { CreateRecordOfIllnessDto } from './create-record_of_ilness.dto';

export class UpdateRecordOfIlnessDto extends PartialType(CreateRecordOfIllnessDto) {}
