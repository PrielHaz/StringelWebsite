import emailjs from "emailjs-com";
import React from "react";
import "./contactForm.css";

export default function ContactUs() {
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
              placeholder="Name"
              name="message"
              id="message"
            />
            <input
              type="text"
              name="email"
              id="email"
              className="input"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="input"
              placeholder="Phone"
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
              value="Send Message"
              className="btnContactForm"
            ></input>
          </form>
        </div>
      </div>
      <h2 className="phone-num">אנו זמינים בטלפון: 052-708-8919</h2>
    </div>

    // <div>
    // 	<div className="container">
    // 		<form onSubmit={sendEmail}>
    // 			<div className="row pt-5 mx-auto">
    // 				<div className="col-8 form-group mx-auto">
    // 					<input
    // 						type="text"
    // 						className="form-control"
    // 						placeholder="Name"
    // 						name="name"
    // 						id="name"
    // 					/>
    // 				</div>
    // 				<div className="col-8 form-group pt-2 mx-auto">
    // 					<input
    // 						type="email"
    // 						className="form-control"
    // 						placeholder="Email Address"
    // 						name="email"
    // 						id="email"
    // 					/>
    // 				</div>
    // 				<div className="col-8 form-group pt-2 mx-auto">
    // 					<input
    // 						type="text"
    // 						className="form-control"
    // 						placeholder="Subject"
    // 						name="phone"
    // 						id="phone"
    // 					/>
    // 				</div>
    // 				<div className="col-8 form-group pt-2 mx-auto">
    // 					<textarea
    // 						className="form-control"
    // 						id=""
    // 						cols="30"
    // 						rows="8"
    // 						placeholder="Your message"
    // 						name="message"
    // 						id="message"
    // 					></textarea>
    // 				</div>
    // 				<div className="col-8 pt-3 mx-auto">
    // 					<input
    // 						type="submit"
    // 						className="btn btn-info"
    // 						value="Send Message"
    // 					></input>
    // 				</div>
    // 			</div>
    // 		</form>
    // 	</div>
    // </div>
  );
}
