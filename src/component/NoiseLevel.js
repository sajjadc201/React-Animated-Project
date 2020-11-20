import React, { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const NoiseLevel = () => {
  const rightBlock = useRef(null);
  const noiseImg = useRef(null);
  const circleWrapper = useRef(null);

  useEffect(() => {
    rightBlock.current.animate([{ transform: "translateY(-50%)" }], {});
    noiseImg.current.animate(
      [
        { transform: "scale3d(0.8, 0.8, 0.8)" },
        { transform: "scale3d(0.6, 0.6, 0.6)" },
        { transform: "scale3d(0.45, 0.45, 0.45)" },
      ],
      {}
    );
    circleWrapper.current.animate(
      [
        { transform: "translateY(-50%)" },
        { transform: "translate(-50%, -50%)" },
      ],
      {}
    );
  }, []);
  return (
    <section className="noise-level" id="noise-level">
      <div className="noise-level__inner container">
        <div className="noise-level__block">
          <div className="noise-level__content">
            <h2 className="title title_medium title_white noise-level__title">
              Easily control the volume level
            </h2>
            <p>
              Use a shortcut to&nbsp;quickly access a&nbsp;window for
              your&nbsp;microphone volume&nbsp;controls
            </p>
            <Link to="#" className="button button_white">
              Try It Free
            </Link>
          </div>
          <div ref={rightBlock} className="noise-level__right-block">
            <img
              ref={noiseImg}
              src="images/wave-c1b84a9196.png"
              srcSet="images/wave@2x-7ab45b32d6.png 2x"
              alt=""
            />
            <div ref={circleWrapper} className="noise-level__circles-wrapper">
              <div className="noise-level__circle noise-level__circle_active"></div>
              <div className="noise-level__circle noise-level__circle_active"></div>
              <div className="noise-level__circle"></div>
              <div className="noise-level__circle"></div>
              <div className="noise-level__circle"></div>
              <div className="noise-level__circle"></div>
              <div className="noise-level__circle"></div>
              <div className="noise-level__circle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
