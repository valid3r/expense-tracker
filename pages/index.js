import Head from "next/head";
import Image from "next/image";
import History from "./components/History";
import styles from "../styles/Home.module.css";
import Balance from "./components/Balance";
import Transaction from "./components/Transaction";

export default function Home() {
  return (
    <>
      <div className={styles.home_wrapper}>
        <Balance />
        <History />
        <Transaction />
      </div>
    </>
  );
}
