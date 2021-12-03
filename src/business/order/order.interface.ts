import { IBase } from "../../interfaces";
import { ORDER_STATUS } from "./order.common";

export interface IOrder extends IBase {
  productId: string;
  quantity: number;
  status: ORDER_STATUS;
}

export interface ICreateOrderPayload {
  productId: string;
  quantity: number;
}
