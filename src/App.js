import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {

  const [showCart, setShowCart]=useState(false);

  const enableCart=()=>{
    setShowCart(true);
  }
  const disableCart=()=>{
    setShowCart(false);
  }

  return (
    <>
      {showCart&&<Cart onClose={disableCart}/>}
      <Header onShow={enableCart}/>
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;
