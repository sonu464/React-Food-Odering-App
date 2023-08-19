import React, { useContext, useRef, useState } from "react";

import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const cartCtx = useContext(CartContext);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber > 5 ||
      enteredAmountNumber < 0
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter Valid amount(1 - 5)</p>}
    </form>
  );
}

export default MealItemForm;
