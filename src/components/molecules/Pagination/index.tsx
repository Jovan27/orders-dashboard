import React from 'react';
import Button from '../../atoms/Button';
import Chevron from '../../atoms/Icon/Chevron';
import './style.scss';

const range = (start: number, end: number) => {
  const range: number[] = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
};

const shouldRenderPageButton = (page: number, currentPage: number, siblingCount: number) => {
  if (page === currentPage) return true;
  if (page < currentPage && page >= currentPage - siblingCount) return true;
  if (page > currentPage && page <= currentPage + siblingCount) return true;
  return false;
};

interface Props {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
  siblingCount?: number;
}

const Pagination: React.FC<Props> = ({ currentPage, totalPages, setPage, siblingCount = 2 }) => {
  return (
    <div className="pagination">
      <Button onClick={() => setPage(1)} disabled={currentPage === 1} variant="text" size="sm">
        <Chevron orientation="left" />
        <Chevron orientation="left" style={{ marginLeft: -16 }} />
      </Button>
      <Button onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1} variant="text" size="sm">
        <Chevron orientation="left" />
      </Button>
      {range(1, totalPages).map((page) => {
        if (!shouldRenderPageButton(page, currentPage, siblingCount)) return;
        return (
          <Button
            key={page}
            variant={page === currentPage ? 'outlined' : 'text'}
            size="sm"
            onClick={() => setPage(page)}
          >
            {page}
          </Button>
        );
      })}
      <Button onClick={() => setPage(currentPage + 1)} disabled={currentPage === totalPages} variant="text" size="sm">
        <Chevron orientation="right" />
      </Button>
      <Button onClick={() => setPage(totalPages)} disabled={currentPage === totalPages} variant="text" size="sm">
        <Chevron orientation="right" style={{ marginRight: -16 }} />
        <Chevron orientation="right" />
      </Button>
    </div>
  );
};

export default Pagination;
