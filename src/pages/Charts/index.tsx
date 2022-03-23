import React from 'react';
import { useQuery } from 'react-query';
import Paper from '../../components/atoms/Paper';
import RevenueByMonth from '../../components/organisms/RevenueByMonth';
import RevenueBySeller from '../../components/organisms/RevenueBySeller';
import { ordersService } from '../../services/orders';
import { getTotalRevenueByMonth, getTotalRevenueBySeller } from './helpers';
import './style.scss';

const Charts: React.FC = () => {
  const { data } = useQuery('orders', () => ordersService.getOrders());

  return (
    <div className="charts">
      <Paper>
        <h2>Total revenue by seller</h2>
        <RevenueBySeller data={getTotalRevenueBySeller(data?.items || [])} />
      </Paper>
      <Paper>
        <h2>Total revenue by month</h2>
        <RevenueByMonth data={getTotalRevenueByMonth(data?.items || [])} />
      </Paper>
    </div>
  );
};

export default Charts;
