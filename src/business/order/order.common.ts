export enum ORDER_STATUS {
  CREATED = 'OS_CREATED',
  CONFIRMED = 'OS_CONFIRMED',
  DELIVERED = 'OS_DELIVERED',
  CANCELLED = 'OS_CANCELLED',
}

export enum ORDER_REQUEST_ACTION {
  GET_ALL = 'orders-get-all-action',
  GET_BY_ID = 'orders-get-by-id-action',
  CREATE = 'orders-create-action',
  CANCEL_BY_ID = 'orders-cancel-by-id-action',
  CHECK_STATUS_BY_ID = 'order-check-status-action',
}
