import React from "react";
import "../../src/index.scss";
const Home = () => {
  return (
    <div className="home">
      <header>
        <button>HIT BLOGS</button>
      </header>
      <Outlet></Outlet>
      <footer>
        <button>@hithaui 2023</button>
      </footer>
    </div>
  );
};

export default Home;
