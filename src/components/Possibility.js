import React from "react";
import possibilityImage from "../assets/logoo.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
        Unlock the potential of your business with MechArtista Technocrafts. We deliver advanced IT consulting, managed services, and next-gen technologies that drive productivity, efficiency, and growth.
        </p>
      </div>
    </div>
  );
};

export default Possibility;
