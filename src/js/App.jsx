import React from "react";
import Header from "./components/Header";
import Home from "./views/Home";
import About from "./views/About";
import Cover from "./components/Cover";
import Work from "./views/Work";
import Contact from "./views/Contact";
import "../sass/main.scss";

const App = () => {
  return (
    <>
      <Cover />
      <Header />
      <Home />
      <About />
      <Work />
      <Contact />
    </>
  );
};

export default App;
