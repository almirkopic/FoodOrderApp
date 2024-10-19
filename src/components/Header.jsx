import React, { useContext } from "react";
import imgLogo from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import CartContext from "./store/CartContext.jsx";

function Header() {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={imgLogo} alt="restaurant logo" />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}

export default Header;
