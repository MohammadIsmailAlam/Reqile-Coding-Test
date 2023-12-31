import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./index.css";

import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Registered from "./auth/Registated";
import ProductListView from "./pages/ProductViewList";
import ProductDetailView from "./pages/ProductDetailView";
import CartView from "./cartView/Cart";

export const userContext = React.createContext(null);

function App() {
  const [userEmail, setUserEmail] = useState("");

  return (
    <>
      <userContext.Provider value={{ userEmail, setUserEmail }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/registered" element={<Registered />} />
            <Route exact path="/productViewList" element={<ProductListView />} />
            <Route exact path="/productDetailView/:id" element={<ProductDetailView />} />
            <Route exact path="/cart" element={<CartView />} />
          </Routes>
        </Router>
      </userContext.Provider>
    </>
  );
}

export default App;