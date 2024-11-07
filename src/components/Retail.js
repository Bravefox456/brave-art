import React from "react";
import { Feature1 } from "../components";
import i5 from "../assets/i5.jpg";
import "./possibility.css";


const featuresData = [
  {
    title: <p><u>Retail</u></p>,
    text: <>
    <p>
    Revolutionizing Retail: AI-driven Insights, Personalized Experiences, and a Sustainable Supply Chain Future.
    </p>
    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
      <li>Retailers across the globe are operating in an ever-changing landscape and to serve digital savvy consumers at a time of unprecedented disruption, retailers are transforming at a rapid pace. They are identifying new ways to radically reduce costs, enabling all-channel growth, and focusing on providing personalized experiences to their consumers.</li>
      <li>Digital technologies enabled transformation initiatives are enhancing retailers’ operational efficiency, customer experience, and market reach. This often involves using e-commerce platforms, data analytics, AI, and other digital tools to innovate in sales, marketing, and customer service. Customer engagement goes beyond traditional transactions and focuses on creating meaningful experiences to foster loyalty, increase repeat business and build long-term relationships.</li>
      <li>The retail segment service offerings are continuously evolving, driven by the latest trends, advancements in the value chain, technology enablement, and digital transformations. These changes are reshaping the retail landscape, offering new opportunities for growth and success.</li>
    </ul>
  </>
  },
  {
    title:<p><u>Consumer Packaged Goods (CPG)</u></p>,
  text:
    <>
      <p>
      Adapting to Change, pioneering the Future: The evolutionary journey of CPG companies.
      </p>
      <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
        <li>The industry of Consumer-Packaged Goods (CPG) is experiencing a major shift. Factors such as evolving consumer tastes, alterations in worldwide regulations, and disruptions in the global supply chain are causing demand uncertainty. Additionally, large retailers are strategically focusing on private labeling, which is directly affecting the revenue growth of CPG companies. To navigate these changes, CPG firms are progressively embracing digital technological advancements to allow them to utilize data, sophisticated analytics, automation, and sustainable sourcing effectively.</li>
        <li>The growth of disruptive technologies like data & analytics, internet of things (IoT), artificial intelligence & machine learning (AI-ML), offers variety of opportunities for CPG companies to:
            <ul>
                <li>Align their strategic, financial, and operational goals using demand-led planning</li>
                <li>Target consumers more effectively, enhancing brand loyalty and driving sales</li>
                <li>Optimize production lines, reduce waste, and improve quality control</li>
                <li>Interact directly with consumers and gather valuable insights</li>
                <li>Ensure product availability and meeting consumer demand</li>
                <li>Reduce their environmental impact through eco-friendly packaging and sustainable sourcing</li>
            </ul>
        </li>
        <li>As a trusted consulting advisor, MechArtista Technocraft offers a comprehensive suite of solutions and services align with the CPG industry demands.</li>
      </ul>
    </>
  
  },
  
];


const Retail = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">
        Retail & Consumer Goods
        </h1>
        <div className="gpt3__possibility-image">
        <img src={i5} alt="i5"/>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature1
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Retail;
