import Dish from "./Dish";
import { useState } from "react";

const RestaurantCategory = (props) => {
  const handleClick = () => {
    setShowIndex();
  };

  const showItems = props.showItems;
  const { title, itemCards } = props.data;
  const setShowIndex = props.setShowIndex;

  return (
    <div className="w-3/5 shadow-gray-900 p-4 flex flex-col items-center ">
      <div
        className="w-full flex justify-between py-2.5 px-5 bg-gray-200 rounded-lg cursor-pointer"
        onClick={() => {
          handleClick();
        }}
      >
        <span className="font-bold text-xl">
          {title} ({itemCards.length})
        </span>
        <span>{showItems ? "⬆️" : "⬇️"}</span>
      </div>
      <div className="w-full flex flex-col items-center">
        {itemCards.map((item) => {
          return showItems && <Dish key={item.card.info.id} dishlist={item} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantCategory;
