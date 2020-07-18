import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.scss";
import Home from "./Components/Home.jsx";
import Navbarr from "./Components/Navbarr";
import Service from "./Components/Service.jsx";
import Portfolio from "./Components/Portfolio.jsx";
import Highlights from "./Components/Highlight.jsx";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer.jsx";
import About from "./Components/About.jsx";

import ReactPageScroller from "react-page-scroller";

function App() {
  return (
    <div>
      <ReactPageScroller>
        {/* <Navbarr/> */}

        <Home />
        <About />
        <Service />
        <Portfolio />

        {/* <Highlights/> */}
        {/* <Contact/> */}

        <Footer />
      </ReactPageScroller>
    </div>
  );
}

export default App;
