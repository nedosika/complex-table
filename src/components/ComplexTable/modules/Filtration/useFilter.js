import { useState } from "react";
import { getUniq } from "../../../../helpers";
import useMenu from "../../../Menu/useMenu";

const useFilter = ({ rows, columns }) => {
  const [activeField, setActiveField] = useState();
  const [filter, setFilter] = useState({});
  const [filters, setFilters] = useState(
    Object.assign(
      {},
      ...columns.map((column) => ({
        [column.field]: Object.assign(
          {},
          ...getUniq(rows.map((row) => row[column.field])).map((row) => ({
            [row]: true,
          }))
        ),
      }))
    )
  );
  const { isOpen, anchorEl, toggleMenu } = useMenu();

  const handleToggleMenu = (event, field) => {
    toggleMenu(event);
    updateActiveField(field);
  };

  const updateActiveField = (field) => {
    setActiveField(field);
    setFilter({
      ...filters[field],
    });
  };

  const toggleFilter = (item) => {
    setFilter((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const applyFilter = () =>
    setFilters((prevState) => ({
      ...prevState,
      [activeField]: {
        ...prevState[activeField],
        ...filter,
      },
    }));

  const clearFilter = () =>
    setFilters((prevState) => ({
      ...prevState,
      [activeField]: Object.assign(
        {},
        ...getUniq(rows.map((row) => row[activeField])).map((row) => ({
          [row]: true,
        }))
      ),
    }));

  const setAll = (value = true) =>
    setFilter(
      Object.assign(
        {},
        ...getUniq(rows.map((row) => row[activeField])).map((row) => ({
          [row]: value,
        }))
      )
    );

  const filtered = rows.filter(
    (row) =>
      !columns.map(({ field }) => filters[field][row[field]]).includes(false)
  );

  const menuItems = Object.entries(filter).sort((a, b) =>
    a[1] === b[1] ? 0 : a[1] ? -1 : 1
  );

  return {
    rows: filtered,
    filters,
    menuItems,
    isOpen,
    anchorEl,
    filtrationActions: {
      setAll,
      updateActiveField,
      applyFilter,
      clearFilter,
      toggleFilter,
      toggleMenu: handleToggleMenu,
    },
  };
};

export default useFilter;
