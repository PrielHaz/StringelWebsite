import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
	return (
		<div className="hero-container">
			<video src="/videos/video-2.mp4" autoPlay loop muted />
			<p>What are you waiting for?</p>
			<ul>
				<li>Desktop and Mobile applications</li>
				<li>Web Development</li>
				<li>Game Development</li>
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
