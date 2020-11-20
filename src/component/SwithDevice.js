import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export const SwithDevice = () => {
  const mutedmicro = useRef(null);
  const airpods = useRef(null);
  useEffect(() => {
    mutedmicro.current.animate(
      [
        { opacity: 0 },
        { transform: "translate3d(-50%, 50%, 0)" },
        { opacity: 1 },
        { transform: "translateZ(0)" },
      ],
      { duration: 3000, fill: "both", iterations: Infinity }
    );
    airpods.current.animate(
      [
        { opacity: 0 },
        { transform: "translate3d(-50%, 50%, 0)" },
        { opacity: 1 },
        { transform: "translateZ(0)" },
      ],
      { duration: 3000, fill: "both", iterations: Infinity }
    );
  }, []);
  return (
    <section className="switch-device" id="switch-device">
      <div className="switch-device__inner container">
        <div className="switch-device__content">
          <h2 className="title title_medium switch-device__title">
            Stay muted even on a newly connected device
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing&nbsp; Officiis
            rerum ea a quos ipsam cum alias &nbsp;adipisci quidem voluptas nobis
            voluptatum
          </p>
          <Link to="#" className="button switch-device__button download-button">
            Download
          </Link>
        </div>
        <div className="switch-device__images-wrapper">
          <img
            className="switch-device__macbook-image"
            src="images/Mockup_010-d63c73e7e3.png"
            srcSet="images/Mockup_010@2x-ae14ac1830.png 2x"
            alt="MacBook"
            title=""
          />
          <img
            ref={mutedmicro}
            className="switch-device__mutify-window-image animated fadeInAngle"
            src="images/muted-screen-04789f86b7.png"
            srcSet="images/muted-screen@2x-8fb72fee3e.png 2x"
            alt="Mutify window"
            title=""
          />
          <div ref={airpods} className="switch-device__airpods-wrapper">
            <img
              src="images/airpods-left-7c7413e6a7.png"
              srcSet="images/airpods-left@2x-5904767628.png 2x"
              alt="Left airpod"
              className="animated fadeInUp"
            />
            <img
              src="images/airpods-right-1edfc7c6a2.png"
              srcSet="images/airpods-right@2x-32b66e95b0.png 2x"
              alt="Right airpod"
              className="animated fadeInUp"
            />
          </div>
          <div className="switch-device__wave-wrapper">
            <img src="images/wave-3-e6584704b7.svg" alt="" />
          </div>
        </div>
        <img
          className="switch-device__full-image"
          src="images/switch-device-image-395c6d0238.png"
          srcSet="images/switch-device-image@2x-4d3bcd1e26.png"
          alt=""
          role="presentation"
        />
      </div>
    </section>
  );
};
