import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <p>What are you waiting for?</p>
      <ul className="skills">
        <li className="item1">
          Desktop and Mobile applications<i class="fab fa-app-store"></i>
          <i class="fab fa-google-play"></i>
        </li>
        <li className="item2">
          Web Development<i class="fas fa-file-code"></i>
        </li>
        <li className="item3">
          Game Development<i class="fas fa-gamepad"></i>
        </li>
      </ul>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          to="/contact"
        >
          BUILD YOUR COMPANY WEBSITE
          <i class="fab fa-internet-explorer"></i>
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          to="/contact"
          onClick={console.log("hey")}
        >
          SEND A REQUEST <i class="fas fa-paper-plane"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
