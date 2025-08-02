import RestaurantCard, { TopRatedRestaurant } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const resList = useRestaurantList();
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    setFilteredRestaurant(resList);
  }, [resList]);

  const TopRatedResta = TopRatedRestaurant(RestaurantCard);

  // console.log(resList);

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex items-center justify-center">
        <div className="m-8">
          <input
            data-testid="searchInput"
            type="text"
            placeholder="Search a restaurant..."
            className="border-2 border-gray-400 p-2 rounded-lg"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          ></input>
          <button
            className="m-4 bg-green-100 px-4 py-2 rounded-lg cursor-pointer"
            onClick={() => {
              let searchResult = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(searchResult);
            }}
          >
            Search
          </button>
        </div>

        <div>
          <button
            data-testid="topRatedBtn"
            className="m-4 bg-green-100 px-4 py-2 rounded-lg cursor-pointer"
            onClick={() => {
              let filteredList = resList.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10 mx-10  p-10">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.5 ? (
              <TopRatedResta resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
