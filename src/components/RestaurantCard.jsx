import { CND_URL } from "./utils/constants";
const RestaurantCard = (props) => {
  const { info } = props.response;
  const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId } =
    info;
  return (
    <div className="res-card" key={info.id}>
      <img className="res-icon" src={`${CND_URL}${cloudinaryImageId}`} />
      <h3>{name}</h3>
      <h4>{cuisines.join()}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default RestaurantCard;
