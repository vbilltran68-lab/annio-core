import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { IBase } from '../interfaces';
import { BaseEntity } from '../entities';

export class BaseDTO implements IBase {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Expose()
  id: string;

  constructor(entity: BaseEntity) {
    this.id = entity.id;
  }
}
