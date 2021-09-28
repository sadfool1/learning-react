import "./DisplayingExpenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Displayingitems = props => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const userChoiceYear = selectedYear => {
    setFilteredYear(selectedYear);
  };

  // filter returns a brand new array, it doesnt harm the previous array
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={userChoiceYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Displayingitems;
