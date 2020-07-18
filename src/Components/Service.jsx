import React from "react";
import VideoIcon from "../Assets/VideoIcon.png";
import passportIcon from "../Assets/passportIcon.png";
import productIcon from "../Assets/productIcon.png";

import cameraIcon from "../Assets/cameraIcon.png";
import { useState } from "react";

import ReactPlayer from "react-player";

import hovid from "../Assets/home-bg.mp4";
import holding from "../Assets/holdingCamera.mp4";
import scenery from "../Assets/scenery.mp4";
import money from "../Assets/money.mp4";

function Service() {
  const [serviceVideo, setserviceVideo] = useState("");

  const playDefault = () => {
    setserviceVideo("");
  };

  const playEventDocumentation = () => {
    setserviceVideo(hovid);
  };

  const playProductVideo = () => {
    setserviceVideo(holding);
  };
  const playStudioRental = () => {
    setserviceVideo(scenery);
  };
  const playPassport = () => {
    setserviceVideo(money);
  };

  return (
    <div className="About">

      <div className="Service">
        <h1 className="Service-title">SERVICES</h1>
        <div className="row m-0 ">
          <div
            onMouseEnter={playEventDocumentation}
            onMouseLeave={playDefault}
            className="col event-documentation "
          >
            <h3>Event Documentation</h3>
            <div className="logo">
              <img src={VideoIcon} />
            </div>
          </div>
          <div
            onMouseEnter={playProductVideo}
            onMouseLeave={playDefault}
            className="col product-video "
          >
            <h3>Product Video</h3>
            <div className="logo">
              <img src={productIcon} />
            </div>
          </div>
          <div
            onMouseEnter={playStudioRental}
            onMouseLeave={playDefault}
            className="col studio-rental "
          >
            <h3>Studio Rental</h3>
            <div className="logo">
              <img src={cameraIcon} />
            </div>
          </div>
          <div
            onMouseEnter={playPassport}
            onMouseLeave={playDefault}
            className=" col passport-photo mr-5"
          >
            <h3>Passport Photo</h3>
            <div className="logo">
              <img src={passportIcon} />
            </div>
          </div>
        </div>

        <div className="playVideo">
          <ReactPlayer
            url={serviceVideo}
            width="100%"
            height="100%"
            loop="true"
            playing="true"
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
