import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Abc from "./components/Abc";
import Post from "./components/Post";
import { Card } from "@mui/material";

function App() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((responce) => {
      console.log(responce.data);
      setListOfPosts(responce.data);
    });
  }, []);

  return (
    <div>
      <div className="App">
        {listOfPosts.map((value, key) => {
          return (
            <Post
              title={value.title}
              postText={value.postText}
              userName={value.username}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
