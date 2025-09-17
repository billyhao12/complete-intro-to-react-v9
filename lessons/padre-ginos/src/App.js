const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's Pizza"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "some dope pizza yo",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "French fries and hot dogs",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "pineapple and ham",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza",
      description: "chicken nuggets on your pizza",
    }),
    React.createElement(Pizza, {
      name: "Baked Potato Pizza",
      description: "potato mash",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
