const heading1 = React.createElement(
  "h1",
  {
    id: "head1",
  },
  "Welcome to Namaste React"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "head2",
  },
  "By: Shubham Chopra"
);
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
