import React from "react";
import { useTableContext } from "../../../../Table/useTableContext";
import { useSelectionContext } from "../useSelectionContext";
import IconButton from "../../../../IconButton";
import { SELECTION_ATTRIBUTES } from "../useSelection";

const COLORS = {
  disable: "lightgrey",
  primary: "rgb(25, 118, 210)",
};

const SelectionButton = ({
  icon: Icon,
  title,
  hint = "",
  disabled = false,
  sx,
}) => {
  const { rows, onDeleteRows } = useTableContext();
  const {
    selected,
    selectionActions: { toggleSelectedAll },
  } = useSelectionContext();

  const isDisabled =
    typeof disabled === "boolean" ? disabled : disabled({ selected, rows });
  const color = isDisabled ? COLORS.disable : COLORS.primary;
  const tooltipTitle =
    typeof hint === "string" ? hint : hint({ selected, rows });
  const handleDelete = () => {
    toggleSelectedAll();
    onDeleteRows(selected);
  };

  return (
    <IconButton
      onClick={handleDelete}
      disabled={isDisabled}
      hint={tooltipTitle}
      title={title}
      style={{ color, ...sx }}
      icon={Icon && <Icon color={color} />}
    />
  );
};

export default SelectionButton;
