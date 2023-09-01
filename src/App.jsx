import React from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";
import "./App.css"
export default function App(){
  return(
    <div className="App-container">
      <div className="App-container-two">
      <Header />
      <Content />
      <Footer />
      </div>
    </div>
  )
}