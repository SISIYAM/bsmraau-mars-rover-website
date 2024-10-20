import React from "react";

function IntroAbout() {
  return (
    <div className="row position-relative mb-0">
      <div className="col-lg-8 text-center mx-auto position-relative">
        <figure className="position-absolute top-0 start-0 ms-n9">
          <svg width="22px" height="22px" viewBox="0 0 22 22">
            <polygon
              className="fill-orange"
              points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7"
            />
          </svg>
        </figure>

        <figure className="position-absolute top-100 start-100 translate-middle ms-5 d-none d-lg-block">
          <svg width="21.5px" height="21.5px" viewBox="0 0 21.5 21.5">
            <polygon
              className="fill-danger"
              points="21.5,14.3 14.4,9.9 18.9,2.8 14.3,0 9.9,7.1 2.8,2.6 0,7.2 7.1,11.6 2.6,18.7 7.2,21.5 11.6,14.4 18.7,18.9"
            />
          </svg>
        </figure>

        <figure className="position-absolute top-0 start-100 translate-middle d-none d-md-block">
          <svg width="27px" height="27px">
            <path
              className="fill-purple"
              d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z"
            />
          </svg>
        </figure>

        <h3>Who We Are?</h3>
        <p style={{ textAlign: "justify" }}>
          The **Mars Rover 71** project at **Bangabandhu Sheikh Mujibur Rahman
          Aviation and Aerospace University (BSMRAAU)** began with a shared
          passion for space exploration and robotics. Inspired by NASA’s Mars
          rovers and international competitions, our goal is to create a rover
          that can simulate tasks performed on Mars, including navigating rough
          terrain and conducting autonomous scientific experiments.
        </p>

        <p style={{ textAlign: "justify" }}>
          Our team, composed of **students from multiple disciplines**, has
          combined expertise in **aerospace engineering, electronics,
          programming, and mechanical design** to bring this rover to life.
          Through hard work, creativity, and teamwork, the Mars Rover 71 project
          stands as a testament to what BSMRAAU students can achieve on the
          global stage.
        </p>

        <p style={{ textAlign: "justify" }}>
          This project is more than just a technical challenge—it represents the
          **spirit of innovation and resilience**, qualities that align with the
          legacy of Bangladesh. Rover 71 aims to inspire the next generation of
          engineers and space explorers, showing that with the right mindset and
          dedication, students from a young aerospace university like BSMRAAU
          can aim for the stars.
        </p>
      </div>
    </div>
  );
}

export default IntroAbout;
