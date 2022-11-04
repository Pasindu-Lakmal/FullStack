import "./App.css";
import Home from "./pages/Home";

import { Routes, Route, Link } from "react-router-dom";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div className="App">
      <Link to="/">Home Page</Link>
      <Link to="/createpost">Create A Post</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
