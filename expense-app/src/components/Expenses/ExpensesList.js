import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        <p>No expenses found.</p>
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
