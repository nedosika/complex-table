import React from "react";
import { useTableContext } from "../../../../Table/useTableContext";
import { useSelectionContext } from "../useSelectionContext";
import IconButton from "../../../../IconButton";
import { SELECTION_ATTRIBUTES } from "../useSelection";

export const COLORS = {
  disable: "lightgrey",
  primary: "rgb(25, 118, 210)",
};

const SelectionButton = ({
  icon: Icon,
  title,
  hint = "",
  disabled = false,
  sx,
  onClick,
}) => {
  const { rows } = useTableContext();
  const { selected } = useSelectionContext();

  const isDisabled =
    typeof disabled === "boolean" ? disabled : disabled({ selected, rows });
  const color = isDisabled ? COLORS.disable : COLORS.primary;
  const tooltipTitle =
    typeof hint === "string" ? hint : hint({ selected, rows });

  return (
    <IconButton
      onClick={onClick}
      disabled={isDisabled}
      hint={tooltipTitle}
      title={title}
      style={{ color, ...sx }}
      icon={Icon && <Icon color={color} />}
    />
  );
};

export default SelectionButton;
