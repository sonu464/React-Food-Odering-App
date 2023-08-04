import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const cartItems = (
  <ul className={classes["cart-items"]}>
    {[
      {
        id: "u1",
        name: "shushi",
        price: "12.33",
        amount: "2",
      },
    ].map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

function Cart(props) {
  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>22.22</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;
