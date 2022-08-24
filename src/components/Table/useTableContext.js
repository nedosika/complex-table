import React, { createContext, useContext } from "react";

export const TABLE_CONFIG = {
  rows: "rows",
  columns: "columns",
  components: "components",
  getRowId: "getRowId",
  getRowHeight: "getRowHeight",
  onRowsScrollEnd: "onRowsScrollEnd",
  pagination: 'pagination',
  checkboxSelection: 'checkboxSelection'
};

export const TABLE_COMPONENTS = {
  Row: 'Row'
}

export const COLUMN_TYPES = {
  actions: "actions",
  number: "number",
  date: "date",
  string: "string",
  selection: "selection",
};

export const COLUMN_FIELDS = {
  field: "field",
  type: "type",
  headerName: "headerName",
  width: "width",
  description: "description",
  sortable: "sortable",
  searchable: "searchable",
  getActions: "getActions",
};

const TableContext = createContext({});

export const useTableContext = () => useContext(TableContext);

const TableProvider = ({ children, ...props }) => {
  return (
    <TableContext.Provider value={props}>{children}</TableContext.Provider>
  );
};

export default TableProvider;
