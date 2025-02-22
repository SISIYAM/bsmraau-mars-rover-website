import React from "react";
import Gallery from "./Gallery";
import Mission from "./Mission";
import IntroAbout from "./IntroAbout";
import Developer from "./Developer";
import Acknowledgements from "./Acknowledgements";
import Journey from "./Journey";
import Memories from "./Memories";

function AboutContent() {
  return (
    <div>
      <section className="bg-light">
        <div className="container pt-1 mt-0 mt-lg-0">
          {/* Title and SVG START */}
          <div className="row position-relative">
            <div className="col-lg-8 text-center mx-auto position-relative">
              <figure className="position-absolute top-0 start-0 ms-n9">
                <svg width="22px" height="22px" viewBox="0 0 22 22">
                  <polygon
                    className="fill-orange"
                    points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7 "
                  />
                </svg>
              </figure>
              {/* SVG decoration */}
              <figure className="position-absolute top-100 start-100 translate-middle ms-5 d-none d-lg-block">
                <svg width="21.5px" height="21.5px" viewBox="0 0 21.5 21.5">
                  <polygon
                    className="fill-danger"
                    points="21.5,14.3 14.4,9.9 18.9,2.8 14.3,0 9.9,7.1 2.8,2.6 0,7.2 7.1,11.6 2.6,18.7 7.2,21.5 11.6,14.4 18.7,18.9 "
                  />
                </svg>
              </figure>
              {/* SVG decoration */}
              <figure className="position-absolute top-0 start-100 translate-middle d-none d-md-block">
                <svg width="27px" height="27px">
                  <path
                    className="fill-purple"
                    d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z"
                  />
                </svg>
              </figure>
              {/* Title */}
              <h3>
                The Story of How We Got Started: Mars Rover 71 Project at
                BSMRAAU
              </h3>
              <p style={{ textAlign: "justify" }}>
                The journey of Mars Rover 71 at Bangabandhu Sheikh Mujibur
                Rahman Aviation and Aerospace University (BSMRAAU) began with a
                vision—an ambitious group of students and faculty united by a
                passion for space exploration and robotics. Inspired by the
                success of NASA's Mars rovers, our mission was to build a
                functional prototype capable of handling extreme terrain and
                simulating tasks that real Mars rovers perform.
              </p>
            </div>
          </div>
          <section className="">
            <div className="container">
              <div className="row">
                <div className="col-md-8 text-center mx-auto">
                  <div className="card card-body shadow p-2">
                    <div className="position-relative">
                      {/* Image */}
                      <img
                        src="assets/images/NASA_Mars_Rover.webp"
                        className="card-img rounded-2"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <IntroAbout />
          <Mission />

          <Journey />
          <Memories />
          {/* <Gallery /> */}
        </div>
      </section>
    </div>
  );
}

export default AboutContent;
