import { useEffect, useState } from "react";

import OverViewComponent from "../components/OverViewComponent/OverViewComponent";
import TransActionComponent from "../components/TransActionComponent/TransActionComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (formValues) => {
    // console.log(formValues);
    const data = { ...formValues, id: Date.now() };
    setTransactions([...transactions, data]);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });

    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  return (
    <section className="App">
      <OverViewComponent
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TransActionComponent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
