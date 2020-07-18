import React from "react";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import classnames from "classnames";
import { useEffect, useState, useRef } from "react";

function Navbarr() {
  const [scrolled, setScrolled] = useState(false);
  let navbarClasses = ["Navbarr"];

  const handleScroll = () => {
    const offset = window.pageYOffset;
  

    if (offset > 100) {
      setScrolled(true);
    }
    if (offset < 100) {
      setScrolled(false);
    }
  };

  if (scrolled) {
    navbarClasses.push("Scrolled");
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className={classnames(navbarClasses)}>
      

      {/* <div className="scrolled Navbarr"> */}

      <Link
        className="NavTitle"
        activeClass="active"
        to="Home"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        href="#"
      >
        Home
      </Link>

      <ul className="NavContent">
        <Link
          className="NavLinks"
          activeClass="active"
          to="real-about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href="#"
        >
          About
        </Link>
        <Link
          className="NavLinks"
          activeClass="active"
          to="Portfolio"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href="#"
        >
          Portfolio
        </Link>
        <Link
          className="NavLinks"
          activeClass="active"
          to="Highlight"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href="#"
        >
          Higlight
        </Link>
        <Link
          className="NavLinks"
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          href="#"
        >
          Contact
        </Link>
      </ul>
    </div>
  );
}

export default Navbarr;
