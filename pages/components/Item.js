import React from "react";
// import styles from "../../styles/Item.module.css";
import styles from "../../styles/Item.module.css";

const Item = ({ title, price }) => {
  return (
    <div className={styles.item_wrapper}>
      <span>Cash</span>
      <span>+500</span>
    </div>
  );
};

export default Item;
