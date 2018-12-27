import React from "react";
import ReactDOM from "react-dom";

import Nav from "../src/Nav";
import About from "../src/About";
import ProductList from "../src/ProductList";
import RecommededProducts from "../src/RecommededProducts"


import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Nav />
      <About />
      <RecommededProducts />
      <ProductList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
