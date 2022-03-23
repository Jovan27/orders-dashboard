import axios from 'axios';
import { OrderPayload, OrdersQueryResult } from '../types';
import { authService } from './auth';

const baseUrl = 'https://mistho-assignment-api.herokuapp.com/api';

interface SearchParams {
  seller?: string;
  status?: string;
  page?: number;
  page_size?: number;
  sort_by?: string;
  sort_dir?: string;
}

const getOrders = async (searchParams?: SearchParams) => {
  const url = new URL(`${baseUrl}/orders`);
  Object.entries(searchParams || {}).forEach(([param, value]) => {
    if (value) url.searchParams.append(param, String(value));
  });
  return axios.get<OrdersQueryResult>(url.href, { headers: authService.authHeader() }).then((res) => res.data);
};

const deleteOrder = (id: number) =>
  axios.delete<void>(`${baseUrl}/orders/${id}`, { headers: authService.authHeader() });

const addNewOrder = (order: OrderPayload) =>
  axios.post<void>(`${baseUrl}/orders`, order, { headers: authService.authHeader() });

export const ordersService = {
  getOrders,
  deleteOrder,
  addNewOrder,
};
