import { restaurantList } from "../../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchInput, restaurants) {
  let list = restaurants.filter((r) => r.name.match(searchInput));
  return list;
}
const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        className="search-input"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const data = filterData(searchInput, restaurants);
          setRestaurants(data);
        }}
      >
        Search
      </button>
      <div className="cards">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
