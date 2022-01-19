import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/History.module.css";
import Item from "./Item";

const History = ({ item, setBalance, setExpense, setIncome }) => {
  const [items, setItems] = useState([]);
  const [localBalance, setLocalBalance] = useState(0);
  const [localIncome, setLocalIncome] = useState(0);
  const [localExpense, setLocalExpense] = useState(0);

  useEffect(() => {
    if (item.amount || item.title) {
      setItems([...items, item]);

      // Go through each item and add amount
      setLocalBalance(Number(localBalance) + Number(item.amount));

      if (item.amount > 0) {
        setLocalIncome(Number(localIncome) + Number(item.amount));
      } else if (item.amount < 0) {
        setLocalExpense(Number(localExpense) + Number(item.amount));
      }
    }
  }, [item]);

  useEffect(() => {
    setBalance(localBalance);
    setIncome(localIncome);
    setExpense(localExpense);
  });

  const renderItems = () => {
    if (items.length > 0) {
      return (
        <>
          {items.map((item, index) => {
            return <Item key={index} title={item.title} amount={item.amount} />;
          })}
        </>
      );
    } else {
      return (
        <>
          <div>Not Items Found</div>
        </>
      );
    }
  };

  return (
    <div className={styles.history_main}>
      <h3>History</h3>
      <hr className={styles.hr} />
      {renderItems()}
    </div>
  );
};

export default History;
