import { Route, Routes } from "react-router";

import "./App.scss";
import Blog from "./components/Blog";
import Post from "./components/Post";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/* exam-hitblogs */}
      <Routes path="/" element={<Home />}>
        <Route path="/blogs" element={<Blog />}></Route>
        <Route path="/blogs/create" element={<Post />}></Route>
        <Route path="*" element={<h1>Not found</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
