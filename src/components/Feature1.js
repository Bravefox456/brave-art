import React from "react";
import "../components/feature.css";

const Feature1 = ({ title, text }) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text_1">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature1;
