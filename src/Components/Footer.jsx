import React from "react";
import facebook from "../Assets/Favorites/facebook.svg";
import youtube from "../Assets/Favorites/youtube.svg";
import instagram from "../Assets/Favorites/instagram.svg";
import linkedin from "../Assets/Favorites/linkedin.svg";
import twitter from "../Assets/Favorites/twitter.svg";

import whatsapp from "../Assets/whatsappp.svg";

function Footer() {
  return (
    <div className="foot">
      <div className="Footer">
        <div className="logo-container"></div>
        <div className="inner row">
          <div className="icon-container col-4">
            <h2>Reach us on</h2>
            <ul className="icon-list">
              <li className="icony">
                <a href="" target="blank">
                  <img src={facebook} alt="" />
                </a>
              </li>

              <li className="icony">
                <a href="" target="blank">
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li className="icony">
                <a href="" target="blank">
                  <img src={twitter} alt="" />
                </a>
              </li>
              <li className="icony">
                <a href="" target="blank">
                  <img src={linkedin} alt="" />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-4 location">
            <h2>Locate us on</h2>
            <li className="icony">
              <img src={whatsapp} alt="" />
            </li>
            <div className="19">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              aspernatur impedit totam
            </div>
          </div>

          <div className="col-4 chat">
            <h2> Whatsapp us now</h2>
            <li className="icony">
              <img src={whatsapp} alt="" />
            </li>
            <h3>+62 888 8888 888</h3>
          </div>
        </div>
      </div>
      <div className="banner">
        
      </div>
    </div>
  );
}

export default Footer;
