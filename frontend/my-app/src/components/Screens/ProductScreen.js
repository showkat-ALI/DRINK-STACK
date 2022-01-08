import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProductDetails } from "../../Redux/actions/productActions";
import { addToCart } from "../../Redux/actions/cartActions";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ProductScreen = ({ match }) => {
  const params = useParams();
  const [qty, setQty] = useState(1);
  const history = useNavigate();
  const dispatch = useDispatch();
  // {/*//state.getProduyctDetails*/}
  const productDetails = useSelector((state) => state?.getProductDetails);
  const { product, loading, error } = productDetails;

  useEffect(() => {
    if (product && params?.id !== product._id) {
      dispatch(getProductDetails(params?.id));
    }
  }, [dispatch, params, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history(`/cart`);
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.img} alt={product.headline} />
            </div>
            <div className="left__info">
              <p className="left__name">{product.headline}</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.subHead}</p>
              <p>{product.plan}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>

              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.Stock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;
