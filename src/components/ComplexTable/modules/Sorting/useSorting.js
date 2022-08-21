import { useState } from "react";
import { compare, getDirection, SORT_DIRECTIONS } from "../../../../helpers";
export const SORTING_CONFIG={
  sortable: 'sortable'
}

const useSorting = ({rows}) => {
  const [sort, setSort] = useState({});

  const toggle = (sortedField) =>
    setSort(({ direction, field }) => ({
      direction:
        field === sortedField ? getDirection(direction) : SORT_DIRECTIONS.DOWN,
      field: sortedField,
    }));

  return {
    sortingActions: {
      toggle,
    },
    sort,
    rows:
      sort.direction === SORT_DIRECTIONS.UP
        ? [...rows].sort(compare(sort?.field)).reverse()
        : [...rows].sort(compare(sort?.field)),
  };
};

export default useSorting;
