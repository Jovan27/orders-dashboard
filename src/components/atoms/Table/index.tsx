import React from 'react';
import Icon from '../Icon';
import './style.scss';

interface Props {
  columns: {
    id: string;
    title: string;
    sortable?: boolean;
    sorted?: 'asc' | 'desc';
    cell?: (value: any) => JSX.Element;
  }[];
  rows: Record<string, any>[];
  sortBy?: string;
  sortDir?: string;
  onSortClick?: (id: string) => void;
}

const Table: React.FC<Props> = ({ columns, rows, sortBy, sortDir, onSortClick }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.title} onClick={() => col.sortable && onSortClick && onSortClick(col.id)}>
              <div>
                {col.title}
                {col.id === sortBy && <Icon name="arrow" orientation={sortDir === 'asc' ? 'up' : 'down'} />}
              </div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => {
              return <td key={col.title}>{col.cell ? col.cell(row) : row[col.id]}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
