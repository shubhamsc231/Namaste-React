import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";
// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "head1",
//     key: "h1",
//   },
//   "Welcome to Namaste React"
// );

// console.log(heading1);
// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "head2",
//     key: "h2",
//   },
//   "By: Shubham Chopra"
// );
// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading1, heading2]
// );
//this is a React Element
// const Head = () => <h1>Welcome</h1>;

const restaurantList = [
  {
    type: "F",
    id: "449707",
    name: "PIZZA CORNER",
    uuid: "77d2e4cc-4312-4441-b0b0-d54cd9d5fb69",
    city: "39",
    area: "Lal Bangla",
    totalRatingsString: "Too Few Ratings",
    cloudinaryImageId: "kpbi1l4micwhvbwydac9",
    cuisines: ["Pizzas", "Desserts"],
    url: "https://www.swiggy.com/restaurants/pizza-yumm-gandhi-nagar-chamanganj-kanpur-326068",
  },
  {
    type: "F",
    id: "679783",
    name: "Batla Di Rasoi",
    uuid: "c452b9c3-a4f4-4fc6-aacd-3f80cfa733df",
    city: "39",
    area: "ashok nagar harsh nagar",
    totalRatingsString: "Too Few Ratings",
    cloudinaryImageId: "8018c14b50ba15c110a31a122492d890",
    cuisines: ["North Indian", "Indian", "Chinese", "Pizzas"],
  },
  {
    type: "F",
    id: "517423",
    name: "Ye Do Chay Sutta Adda",
    uuid: "b4716420-e3a2-4982-baf0-5977dfdd5e71",
    city: "39",
    area: "Darshan Purwa",
    totalRatingsString: "Too Few Ratings",
    cloudinaryImageId: "lj2306eokqgggwbbo5xc",
    cuisines: ["Pizzas", "Pastas"],
  },
  {
    type: "F",
    id: "484494",
    name: "DOMINOJ PIZZA",
    uuid: "b08587b4-fc0d-49b3-837f-783a2c0657d3",
    city: "39",
    area: "ashok nagar harsh nagar",
    totalRatingsString: "50+ ratings",
    cloudinaryImageId: "n3uhyml99rofrbahw70w",
    cuisines: ["Pizzas"],
  },
  {
    type: "F",
    id: "221897",
    name: "Burger King",
    uuid: "34ea9fda-a146-4de4-87f1-c8fc739a8ca6",
    city: "39",
    area: "Kidwai Nagar",
    totalRatingsString: "10000+ ratings",
    cloudinaryImageId: "jdzxiolzcuaidizvxjer",
    cuisines: ["Burgers", "American"],
  },
  {
    type: "F",
    id: "517423",
    name: "Ye Do Chay Sutta Adda",
    uuid: "b4716420-e3a2-4982-baf0-5977dfdd5e71",
    city: "39",
    area: "Darshan Purwa",
    totalRatingsString: "Too Few Ratings",
    cloudinaryImageId: "lj2306eokqgggwbbo5xc",
    cuisines: ["Pizzas", "Pastas"],
  },
  {
    type: "F",
    id: "484494",
    name: "DOMINOJ PIZZA",
    uuid: "b08587b4-fc0d-49b3-837f-783a2c0657d3",
    city: "39",
    area: "ashok nagar harsh nagar",
    totalRatingsString: "50+ ratings",
    cloudinaryImageId: "n3uhyml99rofrbahw70w",
    cuisines: ["Pizzas"],
  },
  {
    type: "F",
    id: "449707",
    name: "PIZZA CORNER",
    uuid: "77d2e4cc-4312-4441-b0b0-d54cd9d5fb69",
    city: "39",
    area: "Lal Bangla",
    totalRatingsString: "Too Few Ratings",
    cloudinaryImageId: "kpbi1l4micwhvbwydac9",
    cuisines: ["Pizzas", "Desserts"],
  },
  {
    type: "F",
    id: "679783",
    name: "Batla Di Rasoi",
    uuid: "c452b9c3-a4f4-4fc6-aacd-3f80cfa733df",
    city: "39",
    area: "ashok nagar harsh nagar",
    totalRatingsString: "Too Few Ratings",
    cloudinaryImageId: "8018c14b50ba15c110a31a122492d890",
    cuisines: ["North Indian", "Indian", "Chinese", "Pizzas"],
  },
  {
    type: "F",
    id: "517423",
    name: "Ye Do Chay Sutta Adda",
    uuid: "b4716420-e3a2-4982-baf0-5977dfdd5e71",
    city: "39",
    area: "Darshan Purwa",
    totalRatingsString: "Too Few Ratings",
    cloudinaryImageId: "lj2306eokqgggwbbo5xc",
    cuisines: ["Pizzas", "Pastas"],
  },
];
const RestaurantCard = ({ name, cuisines, area, cloudinaryImageId, url }) => {
  return (
    <>
      <div className="restaurantCard">
        <a href={url} target="_blank">
          <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              cloudinaryImageId
            }
          />
          <h1>{name}</h1>
          <h3>{cuisines.join(", ")}</h3>
          <h4>{area}</h4>
        </a>
      </div>
    </>
  );
};
const Header = () => {
  return (
    <div className="header">
      <img alt="logo" src={logo} />
      <h1>Food Walk</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Help</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
const Body = () => {
  return (
    <div className="cards">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant} />;
      })}
    </div>
  );
};
const Footer = () => {
  return <></>;
};
const Applayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
