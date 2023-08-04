import React from "react";

import Button from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImage from "../../assets/bg.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>FoodOdering</h1>
        <Button onclick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Best and Quality food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
