import React, { useState } from "react";
import "./Expenses.css";

import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

import Card from "../UI/Card";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const saveYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onSaveYear={saveYearHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
