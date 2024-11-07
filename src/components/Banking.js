import React from "react";
import { Feature1 } from "../components";
import item1 from "../assets/item1.png";
import "./possibility.css";


const featuresData = [
  {
    title: <p><u>Overview.</u></p>,
    text: "A leading US commercial bank faced critical challenges in managing customer data confidentiality within its Centralized Commercial Banking Support Center. MechArtista Technocraft partnered with the client to implement a robust solution that not only addressed security concerns but also improved operational efficiency and customer satisfaction.",
  },
  {
    title:<p><u>Challenges.</u></p>,
  text:
    <>
      <p>
        The bank struggled with inadvertent sharing of confidential customer information with incorrect recipients, leading to serious breaches of customer privacy.
      </p>
      <p>Key business challenges:</p>
      <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
        <li>Accidental disclosure of sensitive customer data</li>
        <li>Risk of legal and regulatory consequences</li>
        <li>Potential damage to bank's reputation</li>
        <li>Decreased customer trust and satisfaction</li>
      </ul>
    </>
  
  },
  {
    title: <p><u>Solution.</u></p>,
    text:
    <>
    <p>MechArtista Technocraft implemented a comprehensive solution to enhance data security and prevent confidentiality breaches.</p>
    <p>Key highlights of MechArtista Technocraft's solution:</p>
    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
    <li>Implemented 'Moderator Queue' for quality check process.</li>
    <li>Established control email box for secure communication.</li>
    <li>Redirected all customer communications through moderator queue.</li>
    <li>Instituted validation process for account details and attachments.</li>
</ul>
</>
  },
  {
    title: <p><u>The Impact.</u></p>,
    text:<> <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
      <li>Enhanced security of customer data.</li>
      <li>35% cost savings from operational efficiency.</li>
      <li>Improved compliance with data protections regulations.</li>
      <li>Reduced errors in communication.</li>
</ul>
</>
  },
];

const Banking = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">
        Enhancing Data Security and Customer Satisfaction at 35% lower costs for a Centralized Commercial Banking Support Center.
        </h1>
        <div className="gpt3__possibility-image">
        <img src={item1} alt="item1" />
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

export default Banking;
