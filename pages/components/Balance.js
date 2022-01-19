import React from "react";
import styles from "../../styles/Balance.module.css";

const Balance = ({ balance, income, expense }) => {
  return (
    <div className={styles.balance_wrapper}>
      <h3 className={styles.title}>Your Balance</h3>
      <span className={styles.price}>${balance}</span>

      <div className={styles.card}>
        <div className={styles.card_item}>
          <span>Income</span>
          <span className={styles.card_item_income}>${income}</span>
        </div>

        <div className={styles.card_spacer}></div>
        <div className={styles.card_item}>
          <span>Expense</span>
          <span className={styles.card_item_expense}>${Math.abs(expense)}</span>
        </div>
      </div>
    </div>
  );
};

export default Balance;
