import { IMG_URL } from "../../constants";

const RestaurantCard = ({ name, cuisines, area, cloudinaryImageId, url }) => {
  return (
      <div className="restaurantCard">
        <a href={url} target="_blank">
          <img src={IMG_URL + cloudinaryImageId} />
          <h1>{name}</h1>
          <h3>{cuisines.join(", ")}</h3>
          <h4>{area}</h4>
        </a>
      </div>
  );
};

export default RestaurantCard;
