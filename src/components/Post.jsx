import React from "react";
import "../index.scss";

const Post = () => {
  return (
    <div className="post">
      <header>
        <button>HIT BLOGS</button>
      </header>

      <div className="post-outlet">
        <button className="title">title</button>
        <button className="content">content</button>
        <div className="btn-create">
          <button>create</button>
        </div>
      </div>

      <footer>
        <button>@hithaui 2023</button>
      </footer>
    </div>
  );
};

export default Post;
