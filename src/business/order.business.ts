import { IBase } from '../interfaces/base.interface';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
import { Expose } from 'class-transformer';
import { BaseDTO } from '../dto';

export enum ORDER_STATUS {
  OPEN = 'OR-1',
  CONFIRMED = 'OR-2',
  COMPLETED = 'OR-3',
  CANCELLED = 'OR-4',
}

export interface IOrder extends IBase {
  status: ORDER_STATUS;
}

export class OrderDTO extends BaseDTO implements IOrder {
  @ApiProperty()
  @MaxLength(10)
  @Expose()
  @IsEnum(ORDER_STATUS)
  status: ORDER_STATUS;
}

export class CreateOrderDTO {
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
