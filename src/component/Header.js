import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export const Header = () => {
  return (
    <div className="content-wrap">
      <header className="header">
        <div className="header__inner container">
          <nav className="main-nav">
            <div className="main-nav__inner">
              <div className="main-nav__logo">
                <img
                  src="/images/mutify-logo-6ab64e5ad7.png"
                  srcSet="images/mutify-logo@2x-43fd3a1fd6.png 2x"
                  alt="Mutify"
                />
                <span>BootCamp</span>
              </div>
              <ul className="main-nav__menu">
                <li>
                  <Link
                    activeClass="active"
                    to="work-with"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="selected"
                  >
                    Works With
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="noise-level"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="selected"
                  >
                    Noise Level
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="switch-device"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="selected"
                  >
                    Switch Device
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="feed-back"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="selected"
                  >
                    Feedback
                  </Link>
                </li>
              </ul>
              <NavLink
                to="#"
                className="button button_small main-nav__button download-button"
              >
                Download
              </NavLink>
              <button className="main-nav__burger"></button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};
