import emailjs from "emailjs-com";
import React from "react";
import "./contactForm.css";

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
  }
  return (
    <div className="wrapper">
      <div className="title">
        <h1>מלא את פרטיך ונחזור אליך בהקדם</h1>
      </div>
      <div className="contact-form">
        <div className="input-fields">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              className="input"
              placeholder="שם"
              name="message"
              id="message"
            />
            <input
              type="text"
              name="email"
              id="email"
              className="input"
              placeholder="כתובת אימייל"
            />
            <input
              type="text"
              className="input"
              placeholder="מספר פלאפון לחזרה"
              name="phone"
              id="phone"
            />
            <input
              type="text"
              className="input"
              placeholder="תיאור הבקשה"
              name="message"
              id="message"
            />

            <input
              type="submit"
              value="שלח פנייה"
              className="btnContactForm"
            ></input>
          </form>
        </div>
      </div>
      <h2 className="phone-num">אנו זמינים בטלפון: 052-708-8919</h2>
    </div>
  );
}

export default ContactUs;
