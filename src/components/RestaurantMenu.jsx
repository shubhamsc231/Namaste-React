import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "./utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo == null) return <Shimmer />;

  const { name, areaName, cuisines, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;
  const regularCards = resInfo?.cards?.find((card) => card?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCards =
    regularCards?.find((card) => card?.card?.card?.itemCards)?.card?.card
      ?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{areaName}</h3>
      <h3>{cuisines?.join(",")}</h3>
      <h3>{totalRatingsString}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.length > 0 &&
          itemCards.map((item, index) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name}- {item?.card?.info?.price}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
