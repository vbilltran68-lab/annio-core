import { EntitySchema } from "typeorm";

export interface IDatabaseConfig {
    type: DATABASE_TYPE;
    env: IDatabaseEnvironmentConfig;
    entities: string[] | EntitySchema[];
    migrations: string[];
    options: IDatabaseOptionConfig;
}

export interface IDatabaseEnvironmentConfig {
    host: string;
    port: number;
    databaseName: string;
    username: string;
    password: string;
}

export interface IDatabaseOptionConfig {
    connectionLimit: number;
}

export enum DATABASE_TYPE {
    MYSQL = "mysql",
    MSSQL = "mssql",
    POSTGRESQL = "postgresql",
}
