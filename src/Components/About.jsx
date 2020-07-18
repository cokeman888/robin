import React from "react";
import robin from '../Assets/images/robin.jpg'
function About() {
  return (
    <div className="real-about">
      <div className="row">
        <div className="About-left col">
          <h1>ABOUT</h1>
          <div className="About-left-text"></div>
        </div>
        <div className="About-right col">
          <h1>PROFILE</h1>
          <div className="About-right-text">
              <img src={robin} alt=""/>


          </div>
        </div>
      </div>
      <div className="row text-center">
<div className="col">asDASD</div>
<div className="col">asdfas</div>
<div className="col">asdasd</div>
<div className="col">asdasda</div>
      </div>

    </div>
  );
}

export default About;
