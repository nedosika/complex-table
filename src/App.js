import React from "react";
import ComplexTable from "./components/ComplexTable"
import styles from "./App.module.scss";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <div className={styles.root}>
      <ComplexTable components={{Toolbar}}/>
    </div>
  );
}

export default App;
