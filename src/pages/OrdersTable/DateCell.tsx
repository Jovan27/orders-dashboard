import { format } from 'date-fns';
import { FC } from 'react';

interface Props {
  date: string;
}

const DateCell: FC<Props> = ({ date }) => <>{format(new Date(date), 'do MMM y')}</>;

export default DateCell;
