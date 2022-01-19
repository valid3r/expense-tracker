import React, { useRef, useEffect, forwardRef } from "react";
import styles from "../../styles/Transaction.module.css";

const Transaction = ({ setItem }) => {
  const itemRef = useRef();
  const amountRef = useRef();

  const handleChange = () => {
    // Call setItem
    setItem({ title: itemRef.current.value, amount: amountRef.current.value });

    // Clear
    itemRef.current.value = "";
    amountRef.current.value = "";
  };

  return (
    <div className={styles.transaction_wrapper}>
      <h3>Add new transaction</h3>
      <hr className={styles.hr} />
      <h4 className={styles.transaction_title}>Item</h4>
      <input
        type="Item"
        ref={itemRef}
        placeholder="Car, Book, Camera"
        className={styles.transaction_input}
      />
      <h4 className={styles.transaction_title}>Amount</h4>
      <input
        type="number"
        ref={amountRef}
        placeholder="Enter amount..."
        className={styles.transaction_input}
      />

      <button onClick={handleChange} className={styles.transaction_button}>
        Add Transaction
      </button>
    </div>
  );
};

export default Transaction;
