import History from "./components/History";
import styles from "../styles/Home.module.css";
import Balance from "./components/Balance";
import Transaction from "./components/Transaction";
import { TestContextProvider } from "../context/TestContext";

export default function Home() {
  return (
    <TestContextProvider>
      <div className={styles.home_wrapper}>
        <Balance />
        <History />
        <Transaction />
      </div>
    </TestContextProvider>
  );
}
