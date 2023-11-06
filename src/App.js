import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./layout/Main";
import axios from "axios";

function App() {
  const [pictureData, setPictureData] = useState([]);
  const [date, setDate] = useState("2023-11-01");
  const changeHandler = (e) => {
    const { value } = e.target;
    setDate(value);
  };

  useEffect(() => {
    let startDate = date;
    console.log(startDate);
    let realDate = new Date(date);
    console.log(realDate);
    realDate.setDate(realDate.getDate() + 2);
    console.log(realDate);
    let endDate = realDate.toISOString().slice(0, 10);
    console.log(endDate);

    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=AKu8BUf533xhyS9Oti1eXZN9AYC2ZhmC48Gnl010&start_date=${startDate}&end_date=${endDate}`
      )
      .then((res) => {
        console.log(res.data);
        setPictureData(res.data);
      })
      .catch((err) => {
        console.log("veriler yuklenemedi!");
      });
  }, [date]);

  return (
    <Main pictureData={pictureData} changeHandler={changeHandler} date={date} />
  );
}

export default App;
