import { useDispatch, useSelector } from "react-redux";
import Dish, { dishInCart } from "./Dish";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("Cart items = ", cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const CartItem = dishInCart(Dish);

  return cartItems.length === 0 ? (
    <div className="w-1/4 shadow-2xl shadow-gray-200 m-auto text-center p-8 my-10 rounded-2xl">
      <h2 className="font-bold text-2xl m-3">Cart is empty...</h2>
      <h2 className="font-bold text-2xl m-3">Add something to view here... </h2>
      <img src="https://krosfitsports.com/public/empty-cart.gif" />
    </div>
  ) : (
    <div>
      <h1 className="text-2xl font-bold text-center m-3 p-3">
        Items in your cart!!!
      </h1>
      <div
      data-testid="clrBtn"
        className="ml-auto mr-4 p-2 w-fit bg-gray-500 text-white font-bold text-xl cursor-pointer rounded-xl"
        onClick={() => handleClearCart()}
      >
        Clear cart
      </div>
      <div className="w-6/12 mx-auto">
        {cartItems.map((item) => {
          return <CartItem key={item.card.info.id} dishlist={item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
