import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Expose } from 'class-transformer';

export enum PAYMENT_STATUS {
  DECLINED = 'PS_DECLINED',
  CONFIRMED = 'PS_CONFIRMED',
}

export enum PAYMENT_REQUEST_ACTION {
  VERIFY = "ACTION_PAYMENT_VERIFY",
}

export class ProcessOrderPaymentDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Expose()
  orderId!: string;
}
