import React, { useState } from "react";
import Nav from "./nav/Nav";
// import Footer from "./footer/Footer";
import All from "./allComponents/All";
import "./main.scss";

const Footer = React.lazy(() => import("./footer/Footer"));

const Main = () => {
  const [mode, setmode] = useState("white");

  const modeSwitcher = () =>{
      if(mode==="white"){
        setmode("dark")
      }else if(mode==="dark"){
        setmode("white")
      }
      
  }

  console.log(mode);

  return (
    <div className={mode}>
      <Nav modeSwitcher={modeSwitcher}/>
      <All />
      <Footer />
    </div>
  );
};

export default Main;
