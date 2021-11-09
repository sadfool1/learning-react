import React, { Fragment } from "react";
import classes from "./Header.module.css";

const mealsImage =
  "https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> React Meals </h1>
        <button> Cart </button>
      </header>
      <div className={classes["main-image"]}>
        {" "}
        /* cannot use dot notation bc of the dash */{" "}
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
