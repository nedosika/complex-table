import React from "react";
import styles from "./Button.module.scss";
import Tooltip from "@mui/material/Tooltip";
import {useTableProps} from "../ComplexTable/ComplexTable";

const COLORS = {
  disable: "lightgrey",
  primary: "rgb(25, 118, 210)",
};

const Button = ({ onClick, icon, title, hint = '', disabled = false, sx }) => {
  const { selectedRows = [], rows } = useTableProps();
  const isDisabled = typeof disabled === "boolean" ? disabled : disabled({selectedRows, rows});
  const color = isDisabled ? COLORS.disable : COLORS.primary;

  return (
    <Tooltip title={typeof hint === "string" ? hint : hint({selectedRows, rows})}>
      <button
        className={styles.root}
        style={{ color, ...sx }}
        onClick={onClick}
        disabled={isDisabled}
      >
        <span>{icon({ color })}</span>
        <span className={styles.title}>{title}</span>
      </button>
    </Tooltip>
  );
};

export default Button;
