export enum OrderStatus {
  CONFIRMED = 'Confirmed',
  CANCELED = 'Canceled',
}

export interface OrderPayload {
  status: OrderStatus;
  seller: string;
  revenue: number;
  date: string;
}

export interface Order extends OrderPayload {
  id: number;
}

export interface OrdersQueryResult {
  items: Order[];
  page?: number;
  page_size?: number;
  total_items: number;
  total_pages?: number;
}
