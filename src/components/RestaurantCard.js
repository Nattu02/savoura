import { IMG_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const { resData } = props;

  const userInfo = useContext(UserContext);

  const {userName, location} = userInfo;

  const { cloudinaryImageId, name, areaName, cuisines, avgRating, costForTwo } =
    resData.info;

  return (
    <div data-testid="resCard" className="h-[380px] p-2.5 flex-col items-center rounded-2xl bg-green-50 hover:shadow-md shadow-gray-400">
      <div className="flex justify-center">
        <img
          className="w-[280px] h-[200px] rounded-2xl"
          src={IMG_URL + cloudinaryImageId}
          alt="res-image"
        ></img>
      </div>
      <div className="mx-2.5 mt-5">
        <div className="text-xl font-bold truncate">{name}</div>
        <div className="font-medium">⭐ {avgRating} </div>
        <div className="font-medium">{costForTwo}</div>
        <div className="truncate font-medium">{cuisines.join(", ")}</div>
        <div>{areaName}</div>
        {/* <div>{userName} + {location}</div> */}
      </div>
    </div>
  );
};

export const TopRatedRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 px-2 py-1.5 bg-red-500 text-white font-bold rounded-md shadow">
          Top rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
