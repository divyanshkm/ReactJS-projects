import Footer from "./components/Footer";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import japanpic from "./assets/japan-background-digital-art.jpg";

function App() {
  const [bgImg, setBgImg] = useState(japanpic);
  const [picName, setPicName] = useState("Picture Name");
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [description, setDescription] = useState("NASA DESCRIPTION");

  const apicall = (NASA_KEY) => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setBgImg(data.hdurl);
        setDescription(data.explanation);
        setPicName(data.title);
      });
  };

  useEffect(() => {
    const NASA_KEY = import.meta.env.VITE_NASA_API;

    apicall(NASA_KEY);
  }, []);

  return (
    <>
      <Main bgImg={bgImg}></Main>
      <SideBar picName={picName} description={description}></SideBar>
      <Footer picName={picName} date={date}></Footer>
    </>
  );
}

export default App;
