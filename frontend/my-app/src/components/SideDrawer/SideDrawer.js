import { Link } from "react-router-dom";
import "./SideDrawer.css";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const SideDrawer = ({ show, click }) => {
  const sidedrawerClass = ["sidedrawer"];
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  if (show) {
    sidedrawerClass.push("show");
  }
  return (
    <div className={sidedrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/cart">
            <FaShoppingCart />
            <span>
              Cart{" "}
              <span className="sidedrawer__cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
