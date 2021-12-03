import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { Expose } from 'class-transformer';
import { BaseDTO } from '../../dto';
import { IOrder, ICreateOrderPayload } from './order.interface';
import { ORDER_STATUS } from './order.common';

export class OrderDTO extends BaseDTO implements IOrder {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Expose()
  productId: string;

  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Expose()
  quantity: number;

  @ApiProperty()
  @MaxLength(10)
  @Expose()
  @IsEnum(ORDER_STATUS)
  status: ORDER_STATUS;
}

export class CreateOrderDTO implements ICreateOrderPayload {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Expose()
  productId!: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @Expose()
  quantity: number;
}
