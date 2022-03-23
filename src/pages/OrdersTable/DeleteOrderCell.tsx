import { FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import Icon from '../../components/atoms/Icon';
import IconButton from '../../components/atoms/IconButton';
import { ordersService } from '../../services/orders';

interface Props {
  id: number;
}

const DeleteOrderCell: FC<Props> = ({ id }) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(() => ordersService.deleteOrder(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('orders');
    },
  });

  return (
    <IconButton style={{ margin: 'auto' }} onClick={() => mutate()} loading={isLoading}>
      <Icon name="trash" />
    </IconButton>
  );
};

export default DeleteOrderCell;
