import React from "react";
import Nav from "./component/Nav";
import "./App.css";
import Banner from "./component/Banner";
import Relevant from "./component/Relevant";
import Compassion from "./component/Compassion";
import Benefits from "./component/Benefits";
import Great from "./component/Great";
import World from "./component/World";
import Share from "./component/Share";
import Footer from "./component/Footer";
const App = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Relevant />
      <Compassion />
      <Benefits />
      <Great />
      <World />
      <Share />
      <Footer/>
    </>
  );
};

export default App;
