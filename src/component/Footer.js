import React from "react";
import useWebAnimations, { fadeIn } from "@wellyshen/use-web-animations";

export const Footer = () => {
  const { keyframes, timing } = fadeIn;
  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 1000, // Delay 1s
      duration: 1000, // Speed up the animation
      iterations: Infinity,
    },
  });
  return (
    <footer className="footer" id="feedback">
      <div className="footer__inner container">
        <div className="footer__feedback">
          <h2
            className="title title_medium footer__title"
            style={{ textAlign: "center" }}
          >
            Have an Idea or Feedback?
          </h2>
          <img
            src="images/wave-white.jpg"
            srcSet="images/wave-white-pic@2x-6d7635f668.jpg 2x"
            alt=""
          />
        </div>
        <div className="footer__copyright">
          Made by&nbsp;
          <br />
          <span
            style={{
              color: "#000000",
            }}
            ref={ref}
          >
            Muhammad Sajjad
          </span>
        </div>
      </div>
    </footer>
  );
};
