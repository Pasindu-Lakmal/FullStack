import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  let { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((responce) => {
      console.log(responce.data);
    });
  }, []);
  return <div>{id}</div>;
};

export default Post;
