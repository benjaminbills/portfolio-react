import React from "react";
import profilePhoto from "../assets/profile.jpg";
function Home() {
  return (
    <div className="container about">
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <img src={profilePhoto} className="img-fluid" alt="" />
        </div>
        <div className="col-1"></div>
        <div className="col-lg-7 col-md-12 about-me">
          <h3>Hi, I'm Benjamin</h3>
          <p>
            I am a Front-End and Back-End Developer. I am a strong advocate of
            writing clean codes(Keep It DRY). <br />
            I love developing API's and building Frontend Components. I believe
            in searching for new challenges daily to improve my self. <br />
            I build frontend on REACT and ANGULAR, backend on Django. I love
            learning new things and googling :) is one of my major strengths.
            <br />
            When I am not coding, I ride mountain bikes.
          </p>
          <p>
            <strong>
              Skills: HTML, CSS, JAVASCRIPT, PYTHON, DJANGO, JQUERY, POSTGRESQL,
              ANGULAR, REACT
            </strong>
            <br />
            Currently learning more about Cloud
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
