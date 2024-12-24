// import Header from "./src/components/Header";
// import Body from "./src/components/Body";
// import Footer from "./src/components/Footer";

// const Applayout = () => {
//   return <>
//     ss
//     {/* <Header></Header>
//     <Body></Body>
//     <Footer></Footer> */}
//   </>
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Applayout />);

const heading = React.createElement("div", { id: 'heading1' }, React.createElement("h1", { id: "child" }, "Child I am"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);