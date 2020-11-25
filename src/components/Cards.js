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
							src="images/Assasination.png"
							text="Game Development"
							label="Gaming"
							path="/services"
						/>
						<CardItem
							src="images/Web.jpg"
							text="Web Development"
							label="Web"
							path="/services"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src="images/SmartBuild.png"
							text="Mobile Apps"
							label="Mobile"
							path="/services"
						/>
						<CardItem
							src="images/git.png"
							text="Projects"
							label="Git"
							path="/products"
						/>
						<CardItem
							src="images/resume.jpg"
							text="Our programmers, skills, resume, specialties and more"
							label="Adrenaline"
							path="/sign-up"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
