import React from "react";
import "../../src/index.scss";
const Home = () => {
  return (
    <div>
      <header></header>
      <Outlet></Outlet>
      <footer></footer>
    </div>
  );
};

export default Home;
