import React, { createContext, useContext } from "react";
import TableProvider, {
  TABLE_CONFIG,
  useTableContext,
} from "./useTableContext";
import Table from "./Table";
import Header from "./Header";
import Main from "./Main";
import Column from "./Main/Column";
import ColumnTitle from "./Main/Column/ColumnTitle";
import ColumnResizeIcon from "./Main/Column/ColumnResizeIcon";
import RowsList from "./RowsList";
import Footer from "./Footer";
import Toolbar from "./Header/Toolbar";
import ColumnsList from "./ColumnsList";
import Row from "./Main/Row";
import Cell from "./Main/Cell";

const RootContext = createContext({});

export const useRootContext = () => useContext(RootContext);

const defaultComponents = {
  Table,
  Header,
  Main,
  Column,
  ColumnTitle,
  ColumnResizeIcon,
  RowsList,
  Footer,
  Toolbar,
  ColumnsList,
  Row,
  Cell,
};

const defaultProps = {
  [TABLE_CONFIG.getRowHeight]: () => "auto",
  [TABLE_CONFIG.getRowId]: (row) => row.id,
};

const RootProvider = ({ children, ...props }) => {
  const { components } = props;
  return (
    <RootContext.Provider value={props}>
      <TableProvider
        {...defaultProps}
        {...props}
        components={{ ...defaultComponents, ...components }}
      >
        {children}
      </TableProvider>
    </RootContext.Provider>
  );
};

export default RootProvider;
