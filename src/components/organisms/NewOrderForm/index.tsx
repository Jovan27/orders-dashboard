import { useState } from 'react';
import { OrderPayload, OrderStatus } from '../../../types';
import Button from '../../atoms/Button';
import Dropdown from '../../atoms/Dropdown';
import { format } from 'date-fns';
import './style.scss';
import Input from '../../atoms/Input';

interface Props {
  onSubmit: (newOrder: OrderPayload) => Promise<void>;
}

const NewOrderForm: React.FC<Props> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<OrderStatus>(OrderStatus.CONFIRMED);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const seller = formData.get('seller') as string;
    const revenue = formData.get('revenue') as string;
    const date = formData.get('date') as string;
    await onSubmit({ seller, revenue: Number(revenue), date, status });

    setLoading(false);
  };

  return (
    <form className="new-order-form" onSubmit={handleFormSubmit}>
      <label htmlFor="status">Status</label>
      <Dropdown
        value={status}
        onChange={(newStatus: OrderStatus) => setStatus(newStatus)}
        options={Object.values(OrderStatus).map((s) => ({ value: s, text: s }))}
      />
      <label htmlFor="seller">Seller</label>
      <Input required id="seller" name="seller" type="text" />
      <label htmlFor="revenue">Revenue</label>
      <Input required id="revenue" name="revenue" type="number" />
      <label htmlFor="date">Date</label>
      <Input required id="date" name="date" type="date" defaultValue={format(new Date(), 'y-MM-dd')} />

      <Button loading={loading} type="submit">
        Create
      </Button>
    </form>
  );
};

export default NewOrderForm;
