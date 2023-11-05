import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./layout/Main";
import axios from "axios";

function App() {
  const [pictureData, setPictureData] = useState([]);
  const [date, setDate] = useState("");
  const changeHandler = (e) => {
    const  {value}  = e.target;
    setDate(value);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=AKu8BUf533xhyS9Oti1eXZN9AYC2ZhmC48Gnl010&date=${date}`
      )
      .then((res) => {
        console.log(res.data);
        setPictureData(res.data);
      })
      .catch((err) => {
        console.log("veriler yuklenemedi!");
      });
  }, [date]);

  return <Main pictureData={pictureData} changeHandler={changeHandler} />;
}

export default App;
