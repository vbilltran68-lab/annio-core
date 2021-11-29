import { ClientOptions } from '@nestjs/microservices/interfaces';

export interface IMicroServiceConfig {
    key: string;
    config: ClientOptions;
}
