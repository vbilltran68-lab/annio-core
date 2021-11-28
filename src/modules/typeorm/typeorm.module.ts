import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LoggerService, Module, DynamicModule } from '@nestjs/common';
import { DBLogger } from "./typeorm.logger";
import { IDatabaseConfig } from '../../interfaces';

@Module({})
export class TypeOrmConfigModule {
	static forRoot(config: IDatabaseConfig, logger: LoggerService): DynamicModule {
		return TypeOrmModule.forRootAsync({
			useFactory: async (): Promise<TypeOrmModuleOptions> => {
				return {
					logging: true,
					logger: new DBLogger(logger),
					type: config.type,
					host: config.env.host,
					port: config.env.port,
					username: config.env.username,
					password: config.env.password,
					database: config.env.databaseName,
					entities: config.entities,
					migrations: config.migrations,
					extra: {
						connectionLimit: config.options.connectionLimit,
					},
				} as TypeOrmModuleOptions;
			},
		});
	}
}
