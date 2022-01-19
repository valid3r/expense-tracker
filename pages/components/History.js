import React from "react";
import styles from "../../styles/History.module.css";
import Item from "./Item";

const History = () => {
  return (
    <div className={styles.history_main}>
      <h3>History</h3>
      <hr className={styles.hr} />

      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default History;
