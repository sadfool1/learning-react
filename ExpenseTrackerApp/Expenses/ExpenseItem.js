import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = props => {
  const [title, setTitle] = useState(props.title);
  // useState is special variable and manage React in some memory

  const clickerHandler = () => setTitle("Updated");
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2> {title} </h2>
          <div className="expense-item__price"> ${props.amount} </div>
        </div>
        <button onClick={clickerHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
