import { CND_URL } from "./utils/constants";
const RestaurantCard = (props) => {
  const { info } = props.response;
  const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId } =
    info;
  return (
    <div
      className="res-card w-[240px] bg-red-200 rounded-md flex flex-col items-center hover:bg-red-500 hover:text-white"
      key={info.id}
    >
      <img
        className="res-icon rounded-lg"
        src={`${CND_URL}${cloudinaryImageId}`}
      />
      <h3 className="pt-2">{name}</h3>
      <h4>{cuisines.join()}</h4>
      <h4>{avgRatingString}</h4>
      <h4 className="pb-2">{costForTwo}</h4>
    </div>
  );
};
export default RestaurantCard;
