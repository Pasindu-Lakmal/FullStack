import "./App.css";
import Home from "./pages/Home";

import { Routes, Route, Link } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import EnterData from "./pages/EnterData";

function App() {
  return (
    <div className="App">
      <Link to="/">Home Page</Link>
      <Link to="/createpost">Create A Post</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/enterData" element={EnterData} />
      </Routes>
    </div>
  );
}

export default App;
