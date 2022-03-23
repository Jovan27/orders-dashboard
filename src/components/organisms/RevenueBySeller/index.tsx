import { FC } from 'react';
import { Cell, Pie, PieChart } from 'recharts';
import './style.scss';

const COLORS = ['#EEA02B', '#1766F9', '#5218FF', '#DA46A6', '#7F98BC', '#32D4AA', '#EF586E'];

const RADIAN = Math.PI / 180;

interface LabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  seller: string;
  revenue: number;
}

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, seller, revenue }: LabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="label">
      {`${seller}: ${Math.round(revenue)}`}
    </text>
  );
};

interface Props {
  data: Array<{
    seller: string;
    revenue: number;
  }>;
}

const RevenueBySeller: FC<Props> = ({ data }) => (
  <PieChart className="revenue-by-seller" width={400} height={300}>
    <Pie
      data={data}
      cx={200}
      cy={150}
      label={renderCustomizedLabel}
      isAnimationActive={false}
      labelLine={false}
      outerRadius={100}
      innerRadius={50}
      dataKey="revenue"
    >
      {data.map((_, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
);

export default RevenueBySeller;
