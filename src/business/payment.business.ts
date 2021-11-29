import { IBase } from '../interfaces/base.interface';

export enum PAYMENT_STATUS {
  UNPAID = 'PA-1',
  FAILED = 'PA-2',
  EXPIRED = 'PA-3',
  PAID = 'PA-4',
  REFUNDING = 'PA-5',
  REFUNDED = 'PA-6',
}

export interface IPayment extends IBase {
  status: PAYMENT_STATUS;
}
