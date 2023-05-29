import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.scss";

const Blog = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/blogs/create");
  };
  return (
    <div className="blogs">
      <header>
        <button>HIT BLOGS</button>
      </header>
      <div className="btn-create">
        <button onClick={handleNavigate}>create</button>
      </div>

      <div className="listCards">
        <div className="card">
          <h2>React</h2>
          <h2>Learn React</h2>

          <div className="btn">
            <button>edit</button>
            <button>delete</button>
          </div>
        </div>
        <div className="card">
          <h2>Node</h2>
          <h2>Learn node</h2>

          <div className="btn">
            <button>edit</button>
            <button>delete</button>
          </div>
        </div>
      </div>
      <footer>
        <button>@hithaui 2023</button>
      </footer>
    </div>
  );
};

export default Blog;
