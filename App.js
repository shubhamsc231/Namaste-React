import React from "react";
import ReactDOM from "react-dom/client";

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

const Head = () => <h1>Welcome</h1>;

const HeaderComponent = () => {
  return (
    <div>
      {<Head />}
      <h1>Namaste React by Shubham Chopra</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
