import { FC } from 'react';
import Button from '../../components/atoms/Button';
import Paper from '../../components/atoms/Paper';
import { Order, OrderStatus } from '../../types';
import Dropdown from '../../components/atoms/Dropdown';
import Table from '../../components/atoms/Table';
import Pagination from '../../components/molecules/Pagination';
import Modal from '../../components/molecules/Modal';
import NewOrderForm from '../../components/organisms/NewOrderForm';
import Input from '../../components/atoms/Input';
import useTableData from './useOrdersTableData';
import DeleteOrderCell from './DeleteOrderCell';
import DateCell from './DateCell';
import './style.scss';

const OrdersTable: FC = () => {
  const {
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
    addOrder,
    data,
    isLoading,
  } = useTableData();

  const columns = [
    {
      id: 'id',
      title: 'ID',
      sortable: true,
    },
    {
      id: 'seller',
      title: 'Seller',
      sortable: true,
    },
    {
      id: 'status',
      title: 'Status',
      sortable: true,
    },
    {
      id: 'revenue',
      title: 'Revenue',
      sortable: true,
    },
    {
      id: 'date',
      title: 'Date',
      sortable: true,
      cell: ({ date }: Order) => <DateCell date={date} />,
    },
    {
      id: 'actions',
      title: 'Actions',
      sortable: false,
      cell: ({ id }: Order) => <DeleteOrderCell id={id} />,
    },
  ];

  return (
    <div className="orders-table">
      {isNewOrderModalOpen && (
        <Modal onClickOutside={() => setIsNewOrderModalOpen((o) => !o)}>
          <NewOrderForm onSubmit={async (newOrder) => addOrder(newOrder)} />
        </Modal>
      )}
      <Paper>
        <div className="top-row">
          <div>
            <label htmlFor="seller">Seller</label>
            <Input id="seller" value={seller} onChange={(e) => setSeller(e.target.value)} />
          </div>

          <div>
            <label>Status</label>
            <Dropdown
              value={status}
              options={[{ value: '', text: 'All' }, ...Object.values(OrderStatus).map((s) => ({ value: s, text: s }))]}
              onChange={setStatus}
            />
          </div>
          <Button style={{ marginLeft: 'auto' }} onClick={() => setIsNewOrderModalOpen((o) => !o)}>
            Add new
          </Button>
        </div>
        {data?.items.length === 0 ? (
          <p>None of the orders matches your search</p>
        ) : (
          <>
            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              <Table
                columns={columns}
                rows={data?.items || []}
                sortBy={sortBy}
                sortDir={sortDir}
                onSortClick={onSortClick}
              />
            )}
            {data && data.total_pages && (
              <Pagination currentPage={page} totalPages={data.total_pages} setPage={setPage} />
            )}
          </>
        )}
      </Paper>
    </div>
  );
};

export default OrdersTable;
