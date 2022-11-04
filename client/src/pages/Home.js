import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [listOfPost, setListOfPost] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((responce) => {
      setListOfPost(responce.data);
    });
  }, []);
  return (
    <div className="App">
      {listOfPost.map((value, key) => {
        return (
          <div className="post">
            <div className="title">{value.title}</div>
            <div className="body">{value.postText}</div>
            <div className="footer">{value.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
