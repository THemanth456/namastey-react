const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "Child" }, [
    React.createElement("h1", {}, "Hello this real HTML"),
    React.createElement("h2", {}, "Hello this real HTML"),
  ]),
  React.createElement("div", { id: "Child2" }, [
    React.createElement("h1", {}, "Hello this real HTML"),
    React.createElement("h2", {}, "Hello this real HTML"),
  ]),
]);

// const headerThings = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello this ispracticeSession"
// );
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
