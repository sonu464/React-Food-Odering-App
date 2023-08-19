import React, { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-context";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setBtnIdHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  // Reduce function convert the whole object into a single value
  const numberOfCartItems = items.reduce(
    (currNumber, item) => {
      return currNumber + item.amount;
    }, // First Argument
    0 // Starting Value
  );

  const btnClasses = ` ${classes.button} ${
    btnIsHighLighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }

    setBtnIdHighLighted(true);

    const timer = setTimeout(() => {
      setBtnIdHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button onClick={props.onclick} className={btnClasses}>
      <span className={classes.icon}>
        <LocalGroceryStoreIcon />
      </span>
      <span className={classes.text}> Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
