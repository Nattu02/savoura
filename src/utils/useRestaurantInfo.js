import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantInfo = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    getResInfo();
  }, []);

  const getResInfo = async () => {
    const data = await fetch(MENU_URL + id);
    const json = await data.json();

    setResInfo(json);
  };

  // console.log(resInfo);
  return resInfo;
};

export default useRestaurantInfo;
