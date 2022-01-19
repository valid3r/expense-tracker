import React from "react";
import styles from "../../styles/Transaction.module.css";

const Transaction = () => {
  return (
    <div className={styles.transaction_wrapper}>
      <h3>Add new transaction</h3>
      <hr className={styles.hr} />
      <h4 className={styles.transaction_title}>Item</h4>
      <input
        type="Item"
        placeholder="Car, Book, Camera"
        className={styles.transaction_input}
      />
      <h4 className={styles.transaction_title}>Amount</h4>
      <input
        type="number"
        placeholder="Enter amount..."
        className={styles.transaction_input}
      />

      <button className={styles.transaction_button}>Add Transaction</button>
    </div>
  );
};

export default Transaction;
