import "./DisplayingExpenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import React, { useState } from "react";

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
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={userChoiceYear}
        />
        {filteredExpenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Displayingitems;
