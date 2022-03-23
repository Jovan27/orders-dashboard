import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { ordersService } from '../../services/orders';
import { OrderPayload } from '../../types';

const useOrdersTableData = () => {
  const [seller, setSeller] = useState('');
  const [status, setStatus] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortDir, setSortDir] = useState<'asc' | 'desc' | undefined>(undefined);
  const [page, setPage] = useState(1);
  const [isNewOrderModalOpen, setIsNewOrderModalOpen] = useState(false);

  const { data, isLoading } = useQuery(
    ['orders', seller, status, sortBy, sortDir, page],
    () => ordersService.getOrders({ seller, status, sort_by: sortBy, sort_dir: sortDir, page_size: 15, page }),
    {
      keepPreviousData: true,
    }
  );

  const queryClient = useQueryClient();

  const addOrder = useMutation((newOrder: OrderPayload) => ordersService.addNewOrder(newOrder), {
    onSuccess: () => {
      queryClient.invalidateQueries('orders');
      setIsNewOrderModalOpen(false);
    },
  });

  const onSortClick = (id: string) => {
    if (sortBy !== id) {
      setSortBy(id);
      setSortDir('asc');
    } else if (sortDir === 'asc') {
      setSortDir('desc');
    } else {
      setSortBy('');
      setSortDir(undefined);
    }
  };

  return {
    status,
    setStatus,
    seller,
    setSeller,
    sortBy,
    sortDir,
    onSortClick,
    page,
    setPage,
    isNewOrderModalOpen,
    setIsNewOrderModalOpen,
    addOrder: addOrder.mutate,
    data,
    isLoading,
  };
};

export default useOrdersTableData;
