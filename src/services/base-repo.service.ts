import { Repository } from 'typeorm';
import { BaseEntity } from '../entities/base.entity';
import { BaseService } from '.';

export abstract class BaseRepoService<T extends BaseEntity> extends BaseService {
  constructor(
    private repo: Repository<T>,
    serviceName: string,
  ) {
    super(serviceName);
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
