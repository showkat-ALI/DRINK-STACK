import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { useSelector } from "react-redux";

const NavBar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>DRINK-STACK THE ULTIMATE DRINKING SHOP</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <FaShoppingCart />
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
