import React from "react";
import { useState } from "react";
import classnames from "classnames";
import { useParams } from "react-router";
import home from '../Assets/home-bg.mp4'
import Navbarr from '../Components/Navbarr'
import jeryy from '../Assets/images/jeryy.png'
import justin from '../Assets/images/justin.jpg'


function Home() {
  const [homeClassName, sethomeClassName] = useState("Home");

  var homeClass = "Home";

  const defaultClassName = (e) => {
    sethomeClassName("Home");
  };

  const setClassName1 = (e) => {
    sethomeClassName("Home-1");
  };
  const setClassName2 = (e) => {
    sethomeClassName("Home-2");
  };
  const setClassName3 = (e) => {
    sethomeClassName("Home-3");
  };

  return (
    <div>

    {/* <Navbarr/> */}
    <div className={homeClassName}>

      

      <div className="row ">
        <div
          onMouseEnter={setClassName1}
          onMouseLeave={defaultClassName}
          className="Home-heading-1 col-2"
        >
          What is Lorem Ipsum? 1
          lorem.30
        </div>

        <p
          onMouseEnter={setClassName2}
          onMouseLeave={defaultClassName}
          className="Home-heading-2 col-2"
        >
          What is Lorem Ipsum? 2
        </p>
        <p
          onMouseEnter={setClassName3}
          onMouseLeave={defaultClassName}
          className="Home-heading-3 col-2"
        >
          What is Lorem Ipsum? 3
        </p>
      </div>
    </div>
    </div>
  );
}

export default Home;
