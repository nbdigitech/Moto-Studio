import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Button from "../button/ButtonLight";

function HomeFollowUs() {
  return (
    <>
      <div className="home-follow-us-img">
        <div className="home-follow-us-img-distance">
          <div className="d-flex justify-content-center">
            {/* <button className="mx-auto">READ MORE</button> */}
            <div className="me-5 home-follow-button-mobile-media">
              <a
                href="https://www.instagram.com/motostudio_raipur/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="home-follow-button"
                  icon={<FaInstagram className="home-follow-icon" />}
                  text="&nbsp; INSTAGRAM"
                />
              </a>
            </div>
            <div className="home-follow-button-mobile-media">
              <a rel="noopener noreferrer">
                <Button
                  className="home-follow-button"
                  icon={<FaFacebook className="home-follow-icon" />}
                  text="&nbsp; FACEBOOK"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeFollowUs;
