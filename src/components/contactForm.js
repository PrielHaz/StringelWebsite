import emailjs from "emailjs-com";
import React, { useState } from "react";
import "./contactForm.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function ContactUs() {
  function sendEmail(e) {
    console.log("sends mail");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gk688ip",
        "template_t8bvc8d",
        e.target,
        "user_LLQ9jJYKS5bbiRNCrgoJ7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("בקשתך התקבלה במערכת, נציגנו יחזרו אליך בהקדם");
    setDone(true);
  }
  const [done, setDone] = useState(false);

  return (
    <>
      <video src="/videos/Typing_dark.mp4" autoPlay loop muted />
      <div className={done ? "done" : "hide"}>
        {/* <div className="hide"> */}
        <div className="ty">
          <h1>
            תודה שבחרת <span className="stringel">סטרינגל</span>
          </h1>
        </div>
        <br />
        <div className="contact-btn">
          <div className="to-home">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              to="/"
              onClick={console.log("Redirect to Home Page")}
            >
              <i class="fas fa-home"></i> חזרה לדף הבית
            </Button>
          </div>
          <div className="to-prog">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              to="/Resume"
              onClick={console.log("Redirect to Home Page")}
            >
              <i class="fas fa-laptop-code margin"></i>
              לעמוד המתכנתים שלנו
            </Button>
          </div>
        </div>
      </div>
      <div className={done ? "hide" : "wrapper"}>
        {/* <div className="wrapper"> */}
        <div className="title">
          <h1>מלא את פרטיך ונחזור אליך בהקדם</h1>
        </div>
        <div className="contact-form">
          <div className="input-fields">
            <form id="form" onSubmit={sendEmail}>
              <input
                dir="rtl"
                required
                type="text"
                className="input"
                placeholder="שם"
                name="name"
                id="name"
              />
              <input
                pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                required
                type="text"
                name="email"
                id="email"
                className="input"
                placeholder="כתובת אימייל"
              />
              <input
                required
                type="text"
                className="input"
                placeholder="מספר פלאפון לחזרה"
                name="phone"
                id="phone"
              />
              <input
                type="text"
                className="input"
                placeholder="?מה אתה מעוניין שנפתח עבורך"
                name="message"
                id="message"
              />
              <div className="btnContactForm">
                <input
                  type="submit"
                  value="שלח פנייה"
                  className="submit-btn"
                ></input>
              </div>
            </form>
          </div>
        </div>
        <h2 className="phone-num">:אנו זמינים בטלפון </h2>
        <h2 className="phone-num">052-708-8919</h2>
      </div>
    </>
  );
}

export default ContactUs;
