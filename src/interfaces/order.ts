import { IBase } from './base';

export enum ORDER_STATUS {
	OPEN = "OR-1",
	CONFIRMED = "OR-2",
	COMPLETED = "OR-3",
	CANCELLED = "OR-4",
}

export interface IOrder extends IBase {
	status: ORDER_STATUS;
}
