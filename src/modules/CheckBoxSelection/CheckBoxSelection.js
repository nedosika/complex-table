import React, { useState } from "react";

import CheckBox from "../../components/CheckBox";

const CheckBoxSelection = (props) => {
  console.log("checkbox");
  const {
    rows,
    columns,
    getRowId,
    checkboxSelection,
    components: { Header, Column, Footer, Row, Cell, RowCounter, Pagination },
  } = props;
  const [selected, setSelected] = useState([]);

  const toggleSelected = (row) =>
    setSelected((prevState) =>
      prevState.includes(getRowId(row))
        ? prevState.filter((checkedId) => checkedId !== getRowId(row))
        : [...prevState, getRowId(row)]
    );

  const getIsSelected = (id) => selected.includes(getRowId(id));

  const toggleSelectedAll = () =>
    selected.length ? setSelected([]) : setSelected(rows.map(getRowId));

  const selectOne = (row) => {
    setSelected([getRowId(row)]);
  };

  const CheckBoxHeader = (props) => (
    <Header>
      {props.children}
      <Column style={{ width: 20, cursor: "pointer" }} onClick={toggleSelectedAll}>
        <CheckBox isChecked={selected.length} />
      </Column>
    </Header>
  );

  const CheckBoxRow = (props) => (
    <Row
      {...props}
      sx={{
        backgroundColor: getIsSelected(props.row) && "rgba(25, 118, 210, 0.08)",
      }}
      onClick={() => selectOne(props.row)}
    >
      <Cell
        onClick={(event) => {
          event.stopPropagation();
          toggleSelected(props.row);
        }}
        sx={{ cursor: "pointer" }}
      >
        <CheckBox isChecked={getIsSelected(props.row)} />
      </Cell>
    </Row>
  );

  const CheckBoxFooter = (props) => (
    <Footer colSpan={columns.length + 1} {...props}>
      <RowCounter>
        {selected.length} row{selected.length > 1 && "s"} selected
      </RowCounter>
      {props.children}
    </Footer>
  );

  return checkboxSelection
    ? {
        rows,
        components: {
          ...props.components,
          Header: CheckBoxHeader,
          Row: CheckBoxRow,
          Footer: CheckBoxFooter,
        },
      }
    : {};
};

export default CheckBoxSelection;
