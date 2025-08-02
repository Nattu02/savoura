import { useEffect, useState } from "react";
import { RESTALIST_URL } from "./constants";

const useRestaurantList = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(RESTALIST_URL);
    const json = await data.json();
    setResList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  // console.log(resList);

  return resList;
};

export default useRestaurantList;
