import React, { useState, createContext, useEffect } from "react";

// Create Context - Define variables and their types, to be exported
const TestContext = createContext({
  transactions: {},
  sayHello: () => {},
  addTransaction: () => {},
  total: Number,
  income: Number,
  expense: Number,
  amounts: [],
});

// Create Context Provider - Accepts Children
const TestContextProvider = ({ children }) => {
  // Global - Variables - Functions, Whatever

  // Not really needed
  const initialTransactions = [{}];

  const [transactions, setTransactions] = useState([]);

  const [amounts, setAmounts] = useState(
    transactions.map((transaction) => transaction.amount)
  );

  const [total, setTotal] = useState(
    amounts.reduce((acc, item) => (acc += Number(item)), 0).toFixed(2)
  );

  const [income, setIncome] = useState(
    amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += Number(item)), 0)
      .toFixed(2)
  );

  const [expense, setExpense] = useState(
    amounts
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += Number(item)), 0)
      .toFixed(2)
  );

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // Everytime a new Transaction is added re-calculate the total sum
  useEffect(() => {
    // Re-Calculate
    setAmounts(transactions.map((transaction) => transaction.amount));
  }, [transactions]);

  useEffect(() => {
    setTotal(
      amounts.reduce((acc, item) => (acc += Number(item)), 0).toFixed(2)
    );

    setIncome(
      amounts
        .filter((item) => item > 0)
        .reduce((acc, item) => (acc += Number(item)), 0)
        .toFixed(2)
    );

    setExpense(
      amounts
        .filter((item) => item < 0)
        .reduce((acc, item) => (acc += Number(item)), 0)
        .toFixed(2)
    );
  }, [amounts]);

  const sayHello = (value) => {
    console.log("Hello! Test: ", value);
  };

  // Return Children as Provider
  return (
    <TestContext.Provider
      value={{
        transactions,
        sayHello,
        addTransaction,
        total,
        income,
        expense,
        amounts,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export { TestContext };
export { TestContextProvider };
