import { Logger, QueryRunner } from 'typeorm';
import { InternalServerErrorException, LoggerService } from '@nestjs/common';

export enum LOG_LEVEL {
  INFO = 'info',
  LOG = 'log',
  ERROR = 'error',
  WARNING = 'warn',
}

export class DBLogger implements Logger {
  private context = '[DB]';

  constructor(public logger: LoggerService) {
    if (!logger) throw new InternalServerErrorException("Cannot init database logger");
  }

  public logQuery(
    query: string,
    parameters?: any[] | undefined,
    _queryRunner?: QueryRunner | undefined,
  ): void {
    this.log(LOG_LEVEL.LOG, query);
    this.log(LOG_LEVEL.LOG, parameters);
  }

  public logQueryError(
    error: string,
    query: string,
    parameters?: any[] | undefined,
    _queryRunner?: QueryRunner | undefined,
  ): void {
    this.log(LOG_LEVEL.ERROR, error);
    this.log(LOG_LEVEL.ERROR, query);
    this.log(LOG_LEVEL.ERROR, parameters);
  }

  public logQuerySlow(
    time: number,
    query: string,
    parameters?: any[] | undefined,
    _queryRunner?: QueryRunner | undefined,
  ): void {
    this.log(LOG_LEVEL.WARNING, time + '=SLOW=' + query);
    parameters && this.log(LOG_LEVEL.WARNING, parameters);
  }

  public logSchemaBuild(
    message: string,
    _queryRunner?: QueryRunner | undefined,
  ): void {
    this.log(LOG_LEVEL.LOG, message);
  }

  public logMigration(
    message: string,
    _queryRunner?: QueryRunner | undefined,
  ): void {
    this.log(LOG_LEVEL.LOG, message);
  }

  public log(
    level: 'log' | 'info' | 'warn' | 'error',
    message: any,
    _queryRunner?: QueryRunner | undefined,
  ): void {
    switch (level) {
      case LOG_LEVEL.LOG:
      case LOG_LEVEL.INFO:
        return this.logger.log(this.context + message);
      case LOG_LEVEL.WARNING:
        return this.logger.warn(this.context + message);
      case LOG_LEVEL.ERROR:
        return this.logger.error(this.context + message);
    }
  }
}
