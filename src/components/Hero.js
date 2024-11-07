import React from "react";
import "../components/hero.css";
import ai from "../assets/ai.png";

const Hero = () => {
  return (
    <div className="gpt3__header section__padding">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with MechArtista Technocrafts
        </h1>
        <p>
        We deliver seamless technology solutions to drive your business forward. From robust infrastructure management to the latest in software development, we make technology work for you.
        </p>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Hero;
