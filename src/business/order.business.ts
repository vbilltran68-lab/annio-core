import { IBase } from '../interfaces/base.interface';
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
import { BaseDTO } from '../dto';

export enum ORDER_STATUS {
  CREATED = 'OS_CREATED',
  CONFIRMED = 'OS_CONFIRMED',
  DELIVERED = 'OS_DELIVERED',
  CANCELLED = 'OS_CANCELLED',
}

export enum ORDER_REQUEST_ACTION {
  GET_ALL = "ACTION_ORDER_GET_ALL",
  GET_BY_ID = "ACTION_ORDER_GET_BY_ID",
  CREATE = "ACTION_ORDER_CREATE",
  CANCEL_BY_ID = "ACTION_ORDER_CANCEL_BY_ID",
  CHECK_STATUS_BY_ID = "ACTION_ORDER_GET_STATUS",
}

export interface IOrder extends IBase {
  productId: string;
  quantity: number;
  status: ORDER_STATUS;
}

export interface ICreateOrderPayload {
  productId: string;
  quantity: number;
}

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

