import React from "react";
import styles from "../../styles/Item.module.css";

const Item = ({ title, amount }) => {
  if (amount > 0) {
    return (
      <div className={styles.item_wrapper_positive}>
        <span>{title}</span>
        <span>{amount}</span>
      </div>
    );
  } else {
    return (
      <div className={styles.item_wrapper_negative}>
        <span>{title}</span>
        <span>{amount}</span>
      </div>
    );
  }
};

export default Item;
