import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyCart } from "./MyCart";
import { ShoppingItems } from "./ShoppingItems";
import { useState } from "react";

export default function App() {
  const [cartItem, setCartItem] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ShoppingItems cartItem={cartItem} setCartItem={setCartItem} />
          }
        />
        <Route
          path="/MyCart/*"
          element={<MyCart cartItem={cartItem} setCartItem={setCartItem} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
