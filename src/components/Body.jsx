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
    console.log("filter", filteredList);

    setlistofRestaurants(
      listofRestaurants.filter((res) => res.info.avgRating > 4.3)
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
      <div className="flex justify-center items-center m-4 h-20">
        <div className="p-4 m-2 w-3/6 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search for restaurants and food"
            className="border border-solid border-black shadow-lg rounded-lg p-2 m-2 w-5/6 flex-wrap"
            value={searchText}
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="bg-green-200 m-4 rounded-lg p-3 text-base hover:text-lg "
            onClick={() => handleSearchClick()}
          >
            Search
          </button>
        </div>
        <button
          className="p-3 rounded-lg bg-blue-100 h-[fit-content]"
          onClick={() => handleFilterClick()}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex mx-2 gap-3 flex-wrap ">
        {filteredList.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            <RestaurantCard key={restaurant.info.id} response={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
