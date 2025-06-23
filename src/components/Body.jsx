import { Link } from "react-router";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANT_DATA } from "./utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [searchText, setsearchText] = useState("");
  const handleFilterClick = () => {
    setlistofRestaurants(
      listofRestaurants.filter((res) => res.info.avgRating < 4)
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4312276&lng=80.3394527&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    setlistofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if (listofRestaurants.length === 0) return <Shimmer />;
  const handleSearchClick = () => {
    const filteredRestaurants = listofRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilteredList(filteredRestaurants);
  };
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for restaurants and food"
            className="search-input"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button className="" onClick={() => handleSearchClick()}>
            Search{" "}
          </button>
        </div>
        <button className="filter-btn" onClick={() => handleFilterClick()}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.info.id}`}
            style={{ textDecoration: "none" }}
          >
            <RestaurantCard key={restaurant.info.id} response={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
