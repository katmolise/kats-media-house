
import { useState, useMemo } from "react";

interface UseFilterProps<T> {
  items: T[];
  filterFn?: (item: T, filters: Record<string, any>) => boolean;
}

interface UseFilterReturn<T> {
  filters: Record<string, any>;
  setFilter: (name: string, value: any) => void;
  resetFilters: () => void;
  filteredItems: T[];
}

export function useFilter<T>({
  items,
  filterFn = (item: T, filters: Record<string, any>) => true,
}: UseFilterProps<T>): UseFilterReturn<T> {
  const [filters, setFilters] = useState<Record<string, any>>({});
  
  const setFilter = (name: string, value: any) => {
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const resetFilters = () => {
    setFilters({});
  };
  
  const filteredItems = useMemo(() => {
    return items.filter(item => filterFn(item, filters));
  }, [items, filters, filterFn]);
  
  return {
    filters,
    setFilter,
    resetFilters,
    filteredItems,
  };
}
