import React from "react";
import styles from "../../styles/Balance.module.css";

const Balance = () => {
  return (
    <div className={styles.balance_wrapper}>
      <h3 className={styles.title}>Your Balance</h3>
      <span className={styles.price}>$260.00</span>

      <div className={styles.card}>
        <div className={styles.card_item}>
          <span>Income</span>
          <span className={styles.card_item_income}>$500.00</span>
        </div>

        <div className={styles.card_spacer}></div>
        <div className={styles.card_item}>
          <span>Expense</span>
          <span className={styles.card_item_expense}>$500.00</span>
        </div>
      </div>
    </div>
  );
};

export default Balance;
