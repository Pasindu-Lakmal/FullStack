import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((responce) => {
      console.log(responce.data);
    });
  }, []);
}

export default App;
