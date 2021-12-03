import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Expose } from 'class-transformer';

export class ProcessOrderPaymentDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Expose()
  orderId!: string;
}
