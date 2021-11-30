import { Logger } from '@nestjs/common';

export abstract class BaseService {
  protected logger: Logger = null;

  constructor(private serviceName: string) {
    this.logger = new Logger(this.serviceName);
  }
}
