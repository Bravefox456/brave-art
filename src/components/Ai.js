import React from "react";
import { Feature1 } from "../components";
import item3 from "../assets/item3.png";
import "./possibility.css";


const featuresData = [
  {
    title: <p><u>Overview.</u></p>,
    text: "Insurance organizations publish policy docs to all states. Competitors also file these documents, for example, Policy doc for critical illness. It is required to compare the policies with competitors’ policies for critical and other types of insurance policies. Need to take big 6 insurance companies and compare policy documents from them.",
  },
  {
    title:<p><u>Challenges.</u></p>,
  text:
    <>
      <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
        <li>Insurance companies issue complex policy documents with variations across states.</li>
        <li>Manually comparing these documents with competitor offerings for critical illness and other insurance types is time-consuming and inefficient.</li>
        <li>Analyzing massive volumes of documents from the "Big 6" insurers further exacerbate this issue.</li>
      </ul>
    </>
  
  },
  {
    title: <p><u>Solution.</u></p>,
    text:
    <><ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
    <li>Solution is developed using Autonomous agents which can operate independently and interact in natural way.</li>
    <li>All the policy documents are loaded to vector database from Knowledge base.</li>
    <li>A chat bot interface is provided for SME and sales team to interact with the agent and get response to queries. Response sources are also provided along with the query response. Users can further go onto the specific page of document for more information on the user interface.</li>
    <li>API based integrated with the upstream and downstream application is also supported.</li>
    
</ul>
</>
  },
  {
    title: <p><u>The Impact.</u></p>,
    text:<> <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
      <li>Optimizing the resource allocation</li>
      <li>Process large amounts of documents more efficiently with processing time reduction by 45%</li>
      <li>Operationally easier to handle complex files</li>
      <li>Drive increased conversions and revenue</li>
      <li>Error reduced to less than 5%</li>
</ul>
</>
  },
];

const Ai = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">
        Enhancing Insights with Customer 360 & Big Data Solution for an APAC-Based Retail Bank.
        </h1>
        <div className="gpt3__possibility-image">
        <img src={item3} alt="item3" />
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

export default Ai;
