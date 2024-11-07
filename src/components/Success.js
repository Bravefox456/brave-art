import React from "react";
import { Feature } from "../components";
import "../components/success.css";

const Success = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="success-stories">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="Success Stories."
          text="Discover how we’ve harnessed the disruptive power of cutting-edge AI to tackle daunting business challenges and deliver remarkable outcomes."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        {/* <p>Explore The Library</p> */}
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title={
            <a href="/banking" target="_self" style={{ textDecoration: 'underline', color: 'inherit' }}>
              Banking & Financial Services.
            </a>
          }
          text="Enhancing Data Security and Customer Satisfaction at 35% lower costs for a Centralized Commercial Banking Support Center."
        />
        <Feature
          title={
            <a href="/data-engineering" target="_self" style={{ textDecoration: 'underline', color: 'inherit' }}>
              Data Engineering
            </a>
          }
          text="Enhancing Insights with Customer 360 & Big Data Solution for an APAC-Based Retail Bank"
        />
        <Feature
          title={
            <a href="/ai" target="_self" style={{ textDecoration: 'underline', color: 'inherit' }}>
              Artificial Intelligence
            </a>
          }
          text="Gen AI based Policy Comparator using Autonomous Agent for a large insurance organization"
        />
      </div>
    </div>
  );
};

export default Success;
