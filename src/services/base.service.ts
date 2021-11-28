import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';
import { BaseEntity } from '../entities/base.entity';

export abstract class BaseService<T extends BaseEntity> {
  protected logger: Logger = null;

  constructor(
    private repo: Repository<T>,
    private serviceName: string,
  ) {
    this.logger = new Logger(this.serviceName);
  }

  async getAll(): Promise<T[]> {
    return this.repo.find({
      where: {
        enabled: true,
      },
    });
  }

  async findById(id: string): Promise<T> {
    return await this.repo.findOne(id);
  }
}
