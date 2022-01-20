import React, { useState, useContext } from "react";
import styles from "../../styles/Transaction.module.css";
import useTest from "../../hooks/useTest";

const Transaction = () => {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const { sayHello, addTransaction } = useTest();

  const handleSubmit = () => {
    console.log("Item: ", item);
    console.log("Amount: ", amount);

    const newTransaction = { title: item, amount: amount };
    addTransaction(newTransaction);
    // sayHello(3);

    // Clear
    setAmount("");
    setItem("");
  };

  return (
    <div className={styles.transaction_wrapper}>
      <h3>Add new transaction</h3>
      <hr className={styles.hr} />
      <h4 className={styles.transaction_title}>Item</h4>
      <input
        type="Item"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
        placeholder="Car, Book, Camera"
        className={styles.transaction_input}
      />
      <h4 className={styles.transaction_title}>Amount</h4>
      <input
        type="number"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        placeholder="Enter amount..."
        className={styles.transaction_input}
      />

      <button onClick={handleSubmit} className={styles.transaction_button}>
        Add Transaction
      </button>
    </div>
  );
};

export default Transaction;
