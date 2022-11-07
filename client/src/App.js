import "./App.css";
import Home from "./pages/Home";

import { Routes, Route, Link } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import EnterData from "./pages/EnterData";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Link to="/">Home Page</Link>
        <Link to="/createpost">Create A Post</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/enterData" element={<EnterData />} />
        <Route path="post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
