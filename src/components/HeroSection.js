import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-2.mp4" autoPlay loop muted />
      <p className="headerPro">העסק שלך חייב אתר מקצועי</p>
      <p>
        <i class="fab fa-google-play"></i> <i class="fab fa-app-store"></i>
        <i class="fas fa-file-code"></i>
        <i class="fas fa-gamepad"></i>
      </p>
      <ul className="skills">
        <li className="item1">
          <div className="item">פיתוח אתרים בהתאמה אישית</div>
        </li>

        <li className="item">פיתוח אפליקציות למובייל</li>
        <li className="item">פיתוח מערכות תוכנה מתקדמות</li>
      </ul>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          to="/contact"
        >
          <i class="fab fa-internet-explorer"></i>
          בנה אתר לעסק שלך
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          to="/contact"
          onClick={console.log("Redirect to Contact page")}
        >
          <i class="fas fa-paper-plane"></i>
          צור איתנו קשר
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
