import { MicroserviceOptions } from '@nestjs/common/interfaces/microservices/microservice-configuration.interface';
import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';

export interface IMicroServiceConfig {
    key: string;
    config: NestMicroserviceOptions & MicroserviceOptions;
}
