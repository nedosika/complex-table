import React from "react";
import Tooltip from "@mui/material/Tooltip";
import styles from "./Button.module.scss";

const IconButton = ({ hint, title, disabled, icon, onClick, style }) => {
  return (
    <Tooltip title={hint}>
      <span>
        <button
          className={styles.root}
          style={style}
          onClick={onClick}
          disabled={disabled}
        >
          <span>{icon}</span>
          <span className={styles.title}>{title}</span>
        </button>
      </span>
    </Tooltip>
  );
};

export default IconButton;
