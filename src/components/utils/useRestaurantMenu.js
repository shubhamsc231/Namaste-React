import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.4312276&lng=80.3394527&restaurantId=${resId}&catalog_qa=undefined`
    );
    const json = await data.json();
    setresInfo(json?.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
