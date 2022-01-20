import React from "react";
import useTest from "../../hooks/useTest";
import styles from "../../styles/History.module.css";
import Item from "./Item";

const History = () => {
  const { transactions } = useTest();
  const renderTransactions = () => {
    if (transactions.length > 0) {
      return (
        <>
          {transactions.map((item, index) => {
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
      {renderTransactions()}
    </div>
  );
};

export default History;
