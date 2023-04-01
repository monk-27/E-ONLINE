import React from "react";
import Nav from "./components/Page1/nav";
import Container from "./components/Page1/container";
import Enrollmentcards from "./components/Page1/enrollmentcards";
import Navbar1 from "./components/Page2/navbar";
import Container1 from "./components/Page2/Container1";
import Card1 from "./components/Page2/cards";
import Container3 from "./components/Page3/container3";
import Card3 from "./components/Page3/cardcontainer";
import Header from "./components/Page4/header";
import Card4 from "./components/Page4/readmorecard";
import Lastcard from "./components/Page4/lastcard";
import Footer from "./components/footer/footer";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="background">
        <Nav />
        <Container />
      </div>
      <Enrollmentcards />
      <Container1 />
      <Navbar1 />
      <Card1 />
      <div className="background-1">
        <Container3 />
        <Card3 />
      </div>

      <Header />
      <Card4 />
      <div className="background_last">
        <Lastcard />

        <Footer />
      </div>
    </>
  );
};

export default App;
