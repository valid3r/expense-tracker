import History from "./components/History";
import styles from "../styles/Home.module.css";
import Balance from "./components/Balance";
import Transaction from "./components/Transaction";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [item, setItem] = useState({});
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  return (
    <div className={styles.home_wrapper}>
      <Balance balance={balance} income={income} expense={expense} />
      <History
        item={item}
        setBalance={setBalance}
        setIncome={setIncome}
        setExpense={setExpense}
      />
      <Transaction setItem={setItem} />
    </div>
  );
}
