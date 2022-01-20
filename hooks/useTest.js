import React, { useContext } from "react";
import { TestContext } from "../context/TestContext";

const useTest = () => {
  const context = useContext(TestContext);
  return context;
};

export default useTest;
