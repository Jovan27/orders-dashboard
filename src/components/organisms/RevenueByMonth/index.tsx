import { FC } from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import './style.scss';

interface Props {
  data: Array<{
    month: string;
    revenue: number;
  }>;
}

const RevenueByMonth: FC<Props> = ({ data }) => (
  <BarChart className="revenue-by-month" width={400} height={300} data={data}>
    <CartesianGrid strokeDasharray="0" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="revenue" />
  </BarChart>
);

export default RevenueByMonth;
