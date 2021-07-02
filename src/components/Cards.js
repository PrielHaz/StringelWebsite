import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <img src="/images/logo.png" className="center"></img>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/resume.jpg"
              text="צפו בצוות המתכנתים שלנו, קורות חיים ועוד"
              label="Resume"
              path="/Resume"
            />
            <CardItem
              src="images/Assasination.png"
              text="פיתוח משחקים"
              label="Gaming"
              path="/contact"
            />
            <CardItem
              src="images/Web.jpg"
              text="פיתוח אתרים בהתאמה אישית מושלמת"
              label="Web"
              path="/contact"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/SmartBuild.png"
              text="פיתוח אפליקציות למובייל ולשולחן העבודה"
              label="Mobile"
              path="/contact"
            />
            <CardItem
              src="images/git.png"
              text="פרוייקטים"
              label="Git"
              path="/Resume"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
