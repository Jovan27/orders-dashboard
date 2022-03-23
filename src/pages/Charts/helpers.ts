import groupBy from 'lodash/groupBy';
import sumBy from 'lodash/sumBy';
import { Order } from '../../types';

const groupOrdersBySeller = (orders: Order[]) => groupBy(orders, 'seller');
const groupOrdersByMonth = (orders: Order[]) => groupBy(orders, (o) => new Date(o.date).getMonth() + 1);
const sumOfRevenues = (orders: Order[]) => sumBy(orders, 'revenue');

export const getTotalRevenueBySeller = (orders: Order[]) =>
  Object.entries(groupOrdersBySeller(orders)).reduce<{ seller: string; revenue: number }[]>(
    (acc, [seller, orders]) => [
      ...acc,
      {
        seller,
        revenue: sumOfRevenues(orders),
      },
    ],
    []
  );

export const getTotalRevenueByMonth = (orders: Order[]) =>
  Object.entries(groupOrdersByMonth(orders)).reduce<{ month: string; revenue: number }[]>(
    (acc, [month, orders]) => [
      ...acc,
      {
        month,
        revenue: sumOfRevenues(orders),
      },
    ],
    []
  );
