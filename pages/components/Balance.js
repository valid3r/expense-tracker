import React, { useContext, useEffect } from "react";
import { TestContext } from "../../context/TestContext";
import styles from "../../styles/Balance.module.css";

const Balance = () => {
  const { income, expense, total } = useContext(TestContext);

  return (
    <div className={styles.balance_wrapper}>
      <h3 className={styles.title}>Your Balance</h3>
      <span className={styles.price}>{total} €</span>

      <div className={styles.card}>
        <div className={styles.card_item}>
          <span>Income</span>
          <span className={styles.card_item_income}>{income} €</span>
        </div>

        <div className={styles.card_spacer}></div>
        <div className={styles.card_item}>
          <span>Expense</span>
          <span className={styles.card_item_expense}>
            {Math.abs(expense)} €
          </span>
        </div>
      </div>
    </div>
  );
};

export default Balance;
