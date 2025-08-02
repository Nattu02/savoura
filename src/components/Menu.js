import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import RestaurantCategory from "./RestaurantCategory";


const Menu = () => {
  const { id } = useParams();

  const resInfo = useRestaurantInfo(id);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, areaName, avgRatingString, totalRatingsString } =
    resInfo.data?.cards[2]?.card.card.info;

  const { itemCards } =
    resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="flex flex-col items-center">
      <div className="my-8 p-5 w-4/12 border-2 rounded-xl">
        <h1 className="m-2 font-bold text-2xl">{name}</h1>
        <h2 className="m-2 font-medium text-xl">{areaName}</h2>
        <h2>
          ⭐{avgRatingString} ({totalRatingsString})
        </h2>
      </div>

      <div className="flex flex-col items-center w-full">
        {categories.map((category, index) => {
          return (
            <RestaurantCategory
              key={category.card.card.categoryId}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => {
                index === showIndex ? setShowIndex(null) : setShowIndex(index);
              }}
            />
          );
        })}
        <div className="h-4 w-3/4 m-2.5 bg-gray-100"></div>
      </div>
    </div>
  );
};

export default Menu;
