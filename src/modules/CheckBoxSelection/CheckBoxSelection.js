import React, { useState } from "react";

import CheckBox from "../../components/CheckBox";

const CheckBoxSelection = (props) => {
  console.log("checkbox");
  const {
    rowsToShow: rows,
    getRowId,
    checkboxSelection,
    components: { Header, Column, Footer, Row, Cell, RowCounter },
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
    <Header {...props}>
      <Column>
        <CheckBox isChecked={selected.length} toggle={toggleSelectedAll} />
      </Column>
      {props.children}
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
      <Cell>
        <CheckBox
          isChecked={getIsSelected(props.row)}
          toggle={(event) => {
            event.stopPropagation();
            toggleSelected(props.row);
          }}
        />
      </Cell>
    </Row>
  );

  const CheckBoxFooter = (props) => (
    <Footer {...props}>
      <RowCounter>
        {selected.length} row{selected.length > 1 && "s"} selected
      </RowCounter>
      {props.children}
    </Footer>
  );

  return checkboxSelection
    ? {
        rowsToShow: rows,
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
