import { useState } from "react";
import { Route, Routes } from "react-router";

import "./App.scss";
import Blog from "./components/Blog";
import Post from "./components/Post";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes path="exam-hitblogs/" element={Home}>
        <Route path="exam-hitblogs/blogs" element={Blog}></Route>
        <Route path="exam-hitblogs/blogs/create" element={Post}></Route>
      </Routes>
    </div>
  );
}

export default App;
