import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackDrop from "./components/BackDrop/BackDrop";
import NavBar from "./components/Navbar/NavBar";
import CartScreen from "./components/Screens/CartScreen";
import HomeScreen from "./components/Screens/HomeScreen";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import { useState } from "react";
import ProductScreen from "./components/Screens/ProductScreen";
function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <div className="App">
      <Router>
        <NavBar click={() => setSideToggle(true)}></NavBar>
        <SideDrawer show={sideToggle}></SideDrawer>
        <BackDrop
          show={sideToggle}
          click={() => setSideToggle(false)}
        ></BackDrop>
        <Routes>
          <Route path="/" element={<HomeScreen></HomeScreen>} />
          <Route path="/drinks/:id" element={<ProductScreen></ProductScreen>} />
          <Route path="/cart" element={<CartScreen></CartScreen>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
