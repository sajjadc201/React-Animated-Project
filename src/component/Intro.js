import React from "react";
import { Link } from "react-router-dom";

export const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__inner container">
        <h1 className="title intro__title">BootCamp For Developer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing&nbsp; Officiis
          rerum ea a quos ipsam cum alias &nbsp;adipisci quidem voluptas nobis
          voluptatum
        </p>
        <div className="intro__buttons-wrapper">
          <Link to="#" className="button intro__button download-button">
            Download
          </Link>
          <Link
            to="#"
            className="button button_white button_bold intro__button buy-button"
          >
            Play
          </Link>
        </div>
        <div className="intro__video-wrapper">
          <video
            muted
            autoPlay
            loop
            src="/video/main-screen@1x.mp4"
            poster="/images/mutify-video-7a62103fb9.jpg"
            // data-2x-src="/videos/main-screen@2x.mp4"
            // data-2x-poster="/images/mutify-video@2x-5f70260dcb.jpg"
          ></video>
          <img
            src="images/mutify-video-7a62103fb9.jpg"
            srcSet="images/mutify-video@2x-5f70260dcb.jpg 2x"
            alt=""
          />
          <div className="intro__wave-wrapper">
            <img src="images/wave-1-ddc3a23018.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
