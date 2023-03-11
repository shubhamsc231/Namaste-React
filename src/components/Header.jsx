import logo from "../../logo.png";

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

export default Header;
