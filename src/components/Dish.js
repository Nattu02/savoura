import { addItems, removeItems } from "../utils/cartSlice";
import { DISH_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";

const Dish = (props) => {
  const { dishlist } = props;
  const { name, description, imageId, defaultPrice, price, isVeg } =
    dishlist.card.info;

  const dispatch = useDispatch();

  const handleAddItems = (itemName) => {
    dispatch(addItems(itemName));
  };

  return (
    <div data-testid="dish" className="flex justify-between items-start p-5 m-5 border border-gray-200 rounded-2xl shadow-sm w-full">
      <div className="flex flex-col gap-2 w-3/4">
        <div className="font-semibold text-lg">
          {name} {isVeg ? "🟢" : "🔺"}
        </div>
        <div className="text-gray-700">₹{(defaultPrice || price) / 100}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
      <div className="w-28 h-28 relative">
        <img
          src={DISH_IMG + imageId}
          alt={name}
          className="w-full h-full object-cover rounded-xl"
        />
        <button
          className="absolute bg-white px-4 my-1 font-bold text-lg text-green-500 bottom-0 left-1/5 rounded-md cursor-pointer"
          onClick={() => handleAddItems(dishlist)}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export const dishInCart = () => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeItems());
  };
  return (props) => {
    return (
      <div className="relative">
        <div
          className="absolute cursor-pointer rounded-tr-xl rounded-bl-xl top-0.5 -right-5 text-sm font-extrabold bg-red-600 py-1 px-2"
          onClick={() => handleRemove()}
        >
          X
        </div>
        <Dish {...props} />
      </div>
    );
  };
};

export default Dish;
