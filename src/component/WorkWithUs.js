import React from "react";
import { Link } from "react-router-dom";
import useWebAnimations from "@wellyshen/use-web-animations";
import { useEffect, useRef } from "react";

export const WorkWithUs = () => {
  const logoCont = useRef(null);
  useEffect(() => {
    logoCont.current.animate(
      [
        // keyframes
        { transform: "translateZ(0)" },
        { transform: "translate3d(0, -10px, 0)" },
        { transform: "translateZ(0)" },
      ],
      {
        // timing options
        duration: 2000,
        iterations: Infinity,
        easing: "cubic-bezier(1, 1, 0, 0)",
      }
    );
  });
  const { ref } = useWebAnimations({
    keyframes: [
      { opacity: "0" },
      { transform: "scale3d(0.3, 0.3, 0.3)" },
      { transform: "scale3d(1.15,1.15,1.15) " },
      { opacity: "1" },
      { transform: "scaleX(1)" },
    ],
    timing: {
      delay: 1000, // Delay 1s
      duration: 1500, // Speed up the animation
      iterations: Infinity, // Repeat once
      fill: "both",
    },
  });
  return (
    <section className="work-with" id="work-with">
      <div className="work-with__inner container">
        <div className="work-with__microphone-control">
          <h2 className="title title_medium work-with__title">
            Control your&nbsp;microphone anywhere
          </h2>
          <p>Even during calls</p>
          <img
            src="images/FaceTimePopup-8b68d7ca18.jpg"
            srcSet="images/FaceTimePopup@2x-11df12166f.jpg 2x"
            alt="FaceTime Popup"
          />
          <div ref={logoCont} className="work-with__logos-wrapper">
            <div className="work-with__logo work-with__logo_appear work-with__logo_floating">
              <img
                src="images/Appear-1ad98c17f8.png"
                srcSet="images/Appear@2x-524960b483.png 2x"
                alt="Appear"
              />
              <span>Appear</span>
            </div>
            <div className="work-with__logo work-with__logo_fb work-with__logo_floating myAnimate">
              <img
                src="images/FB-1b46484926.png"
                srcSet="images/FB@2x-22351c148e.png 2x"
                alt="FB Messenger"
              />
              <span>FB Messenger</span>
            </div>
            <div className="work-with__logo work-with__logo_go-to-meetings work-with__logo_floating">
              <img
                src="images/GoToMeetings-6907108d0d.png"
                srcSet="images/GoToMeetings@2x-9a4bc25e56.png 2x"
                alt="GoToMeetings"
              />
              <span>GoToMeetings</span>
            </div>
            <div className="work-with__logo work-with__logo_skype work-with__logo_floating">
              <img
                src="images/Skype-64e68baaf2.png"
                srcSet="images/Skype@2x-184b075740.png 2x"
                alt="Skype"
              />
              <span>Skype</span>
            </div>
            <div className="work-with__logo work-with__logo_slack work-with__logo_floating">
              <img
                src="images/Slack-a34e725729.png"
                srcSet="images/Slack@2x-aa29d1f637.png 2x"
                alt="Slack"
              />
              <span>Slack</span>
            </div>
            <div className="work-with__logo work-with__logo_zoom work-with__logo_floating">
              <img
                src="images/Zoom-0cb3267633.png"
                srcSet="images/Zoom@2x-5fea776a6d.png 2x"
                alt="Zoom"
              />
              <span>Zoom</span>
            </div>
            <div className="work-with__logo work-with__logo_hangouts ">
              <img
                src="images/Hangouts-de6270cae5.png"
                srcSet="images/Hangouts@2x-25426e4a32.png 2x"
                alt="Hangouts"
              />
              <span>Hangouts</span>
            </div>
            <div className="work-with__logo work-with__logo_webex work-with__logo_floating">
              <img
                src="images/Webex-0b269eb5af.png"
                srcSet="images/Webex@2x-d5b4bc2142.png 2x"
                alt="Webex"
              />
              <span>Webex</span>
            </div>
            <div className="work-with__logo work-with__logo_viber work-with__logo_floating">
              <img
                src="images/Viber-bcad9961af.png"
                srcSet="images/Viber@2x-f5bb2dfd9d.png 2x"
                alt="Viber"
              />
              <span>Viber</span>
            </div>
            <div className="work-with__logo work-with__logo_telegram work-with__logo_floating">
              <img
                src="images/Telegram-d2ec968abe.png"
                srcSet="images/Telegram@2x-22661ce92e.png 2x"
                alt="Telegram"
              />
              <span>Telegram</span>
            </div>
            <div className="work-with__logo work-with__logo_skype work-with__logo_blurred">
              <img
                src="images/Skype-64e68baaf2.png"
                srcSet="images/Skype@2x-184b075740.png 2x"
                alt="Skype"
              />
            </div>
            <div className="work-with__logo work-with__logo_viber work-with__logo_blurred">
              <img
                src="images/Viber-bcad9961af.png"
                srcSet="images/Viber@2x-f5bb2dfd9d.png 2x"
                alt="Viber"
              />
            </div>
            <div className="work-with__logo work-with__logo_telegram work-with__logo_blurred">
              <img
                src="images/Telegram-d2ec968abe.png"
                srcSet="images/Telegram@2x-22661ce92e.png 2x"
                alt="Telegram"
              />
            </div>
            <div className="work-with__logo work-with__logo_slack work-with__logo_blurred">
              <img
                src="images/Slack-a34e725729.png"
                srcSet="images/Slack@2x-aa29d1f637.png 2x"
                alt="Slack"
              />
            </div>
            <div className="work-with__logo work-with__logo_fb work-with__logo_blurred">
              <img
                src="images/FB-1b46484926.png"
                srcSet="images/FB@2x-22351c148e.png 2x"
                alt="FB Messenger"
              />
            </div>
            <div className="work-with__logo work-with__logo_hangouts work-with__logo_blurred">
              <img
                src="images/Hangouts-de6270cae5.png"
                srcSet="images/Hangouts@2x-25426e4a32.png 2x"
                alt="Hangouts"
              />
            </div>
          </div>
        </div>
        <div className="work-with__macbook-wrapper">
          <img
            src="images/macbook-1-51fcc36e0a.png"
            srcSet="images/macbook-1@2x-7437a8b433.png 2x"
            alt="MacBook"
          />
          <img
            src="/images/magnifier-1878b93fb0.png"
            srcSet="/images/magnifier@2x-31e24730ea.png 2x"
            alt="Mute button"
            className="animated bounceIn"
            ref={ref}
          />
          <div className="work-with__wave-wrapper">
            <img src="images/wave-2-ca2e74569e.svg" alt="" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing&nbsp; Officiis
          rerum ea a quos ipsam cum alias &nbsp;adipisci quidem voluptas nobis
          voluptatum
        </p>
        <div className="work-with__buttons-wrapper">
          <Link to="#" className="button work-with__button download-button">
            Download
          </Link>
          <Link
            to="#"
            className="button button_white button_bold work-with__button buy-button"
          >
            Play
          </Link>
        </div>
      </div>
    </section>
  );
};
