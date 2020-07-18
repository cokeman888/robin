import React from "react";
import { useState } from "react";
import grey from "../Assets/grey.jpg";
import test1 from "../Assets/small.jpg";
import test2 from "../Assets/window.jpg";

import jery1 from '../Assets/images/jery1.jpeg'
import jery2 from '../Assets/images/jery2.jpeg'
import jery3 from '../Assets/images/jery3.jpeg'
import jery4 from '../Assets/images/jery4.jpg'
import justin from '../Assets/images/justin.jpg'
import robin from '../Assets/images/robin.jpg'
import jeryy from '../Assets/images/jeryy.png'

import babyb from "../Assets/icon/babyb.png";
import babyc from "../Assets/icon/babyc.png";

import birthdayc from "../Assets/icon/birthdayc.png";

import companyb from "../Assets/icon/companyb.png";
import companyc from "../Assets/icon/companyc.png";

import productb from "../Assets/icon/productb.png";
import productc from "../Assets/icon/productc.png";

import socialb from "../Assets/icon/socialb.png";
import socialc from "../Assets/icon/socialc.png";

import weddingc from "../Assets/icon/weddingc.png";
import weddingb from "../Assets/icon/weddingb.png";

import camerac from '../Assets/icon/camerac.png'

function Portfolio() {
  const [projectImage, setprojectImage] = useState("");

  const defaultImage = () => {
    setprojectImage("");
  };

  const displayimagefirst = (e) => {
    console.log("Images displayed sucessfully");
    setprojectImage(test1);
  };

  const displayimagesecond = (e) => {
    console.log("Images displayed sucessfully");
    setprojectImage(jeryy);
  };

  const displayimagethird = (e) => {
    console.log("Images displayed sucessfully");
    setprojectImage(jery1);
  };

  const displayimagefourth= (e) => {
    console.log("Images displayed sucessfully");
    setprojectImage(jery2);
  };

  const displayimagefifth = (e) => {
    console.log("Images displayed sucessfully");
    setprojectImage(jery3);
  };

  const displayimagesixth= (e) => {
    console.log("Images displayed sucessfully");
    setprojectImage(jery4);
  };

  return (
    <div className="Portfolio ">
      <h2 className="mt-3 Portfolio-title">PORTFOLIO</h2>

      <div className="row">
        <div className="col-3 my-4 ml-5">
          <div className="row probar">
            <div
              className="col-9 prokiri p-5 "
              onMouseEnter={displayimagefirst}
              onMouseLeave={defaultImage}
            >
              <div className="left">
                <div className="row">
                  <div className="col-7">Birthday</div>
                  <div className="col-2 pb-5">
                    <img src={birthdayc} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row probar ">
            <div className="col-9 prokiri p-5 my-2"
                          onMouseEnter={displayimagesecond}
                          onMouseLeave={defaultImage}>
              <div className="row">
                <div className="col-7">Wedding</div>
                <div className="col-2">
                  <img src={weddingc} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="row probar">
            <div className="col-9 prokiri p-5 my-2"
                          onMouseEnter={displayimagethird}
                          onMouseLeave={defaultImage}>
              <div className="row">
                <div className="col-7">Product Marketing</div>
                <div className="col-2">
                  <img src={productc} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="row probar">
            <div className="col-9 prokiri p-5 my-2"
                          onMouseEnter={displayimagefourth}
                          onMouseLeave={defaultImage}>
              <div className="row">
                <div className="col-7">Social Events</div>
                <div className="col-2">
                  <img src={socialc} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row probar">
            <div className="col-9 prokiri p-5 my-2"
                          onMouseEnter={displayimagefifth}
                          onMouseLeave={defaultImage}>
              <div className="row">
                <div className="col-7">Company Profile</div>
                <div className="col-2">
                  <img src={companyc} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row probar">
            <div className="col-9 prokiri p-5 my-2"
                          onMouseEnter={displayimagesixth}
                          onMouseLeave={defaultImage}>
              <div className="row">
                <div className="col-7">Photoshoot</div>
                <div className="col-2">
                  <img src={camerac} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-8  mt-5 ">
          <div className="prokanan">
            <img src={projectImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
