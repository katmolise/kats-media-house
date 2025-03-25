
import { useState, useMemo } from "react";

interface UseSearchProps<T> {
  items: T[];
  searchableFields: (keyof T)[];
}

interface UseSearchReturn<T> {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: T[];
}

export function useSearch<T>({
  items,
  searchableFields,
}: UseSearchProps<T>): UseSearchReturn<T> {
  const [searchQuery, setSearchQuery] = useState("");
  
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return items;
    
    const query = searchQuery.toLowerCase().trim();
    
    return items.filter(item => {
      return searchableFields.some(field => {
        const value = item[field];
        if (typeof value === "string") {
          return value.toLowerCase().includes(query);
        }
        if (typeof value === "number") {
          return value.toString().includes(query);
        }
        return false;
      });
    });
  }, [items, searchQuery, searchableFields]);
  
  return {
    searchQuery,
    setSearchQuery,
    searchResults,
  };
}
