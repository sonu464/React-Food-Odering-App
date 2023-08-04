import React from "react";

import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button onClick={props.onclick} className={classes.button}>
      <span className={classes.icon}>
        <LocalGroceryStoreIcon />
      </span>
      <span className={classes.text}> Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
