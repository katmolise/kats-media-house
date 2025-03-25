import { useState, useMemo } from "react";

interface UsePaginationProps {
  totalItems: number;
  initialPage?: number;
  pageSize?: number;
}

interface UsePaginationReturn {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  startIndex: number;
  endIndex: number;
  canNextPage: boolean;
  canPrevPage: boolean;
  paginateArray: <T>(items: T[]) => T[];
}

export function usePagination({
  totalItems,
  initialPage = 1,
  pageSize = 10,
}: UsePaginationProps): UsePaginationReturn {
  const [currentPage, setCurrentPage] = useState(initialPage);
  
  const totalPages = useMemo(() => Math.max(1, Math.ceil(totalItems / pageSize)), [totalItems, pageSize]);
  
  // Keep currentPage in bounds
  useMemo(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    } else if (currentPage < 1) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
  
  const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const paginateArray = <T,>(items: T[]): T[] => {
    return items.slice(startIndex, endIndex + 1);
  };

  return {
    currentPage,
    totalPages,
    pageSize,
    setPage,
    nextPage,
    prevPage,
    startIndex,
    endIndex,
    canNextPage: currentPage < totalPages,
    canPrevPage: currentPage > 1,
    paginateArray,
  };
}
