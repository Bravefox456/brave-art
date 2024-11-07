import React from "react";
import { Feature1 } from "../components";
import item2 from "../assets/item2.png";
import "./possibility.css";


const featuresData = [
  {
    title: <p><u>Overview.</u></p>,
    text: "An APAC-based retail bank aimed to improve business performance insights, data quality, and governance. MechArtista Technocraft implemented a Customer 360 and Big Data solution using an Azure-based data lake, cloud data warehouse, and interactive dashboards. This solution enabled the bank to identify market opportunities, enhance business performance clarity, and ensure robust data governance.",
  },
  {
    title:<p><u>Challenges.</u></p>,
  text:
    <>
      <p>
      The client faced significant challenges in their data management and analytics processes:
      </p>
      <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
        <li>Inadequate Data Platform: No sufficient data and analytics platform to meet growing information requirements.</li>
        <li>Lack of Business Performance Insights: Difficulty in understanding business performance, trends, and opportunities.</li>
        <li>Poor Data Quality and Governance: Inconsistent and unreliable data quality and lack of proper data governance.</li>
      </ul>
    </>
  
  },
  {
    title: <p><u>Solution.</u></p>,
    text:
    <>
    <p>MechArtista Technocraft implemented a comprehensive Customer 360 and Big Data solution:</p><ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
    <li>DLXpress Powered Data Lake: Developed an end-to-end Azure-based data lake.</li>
    <li>Data Model and Dictionary: Created a detailed data model and dictionary for retail banking.</li>
    <li>Cloud Data Warehouse: Set up for direct and multidimensional analysis.</li>
    <li>Metadata-Driven Pipeline: Automated data quality and remediation processes.</li>
    <li>Interactive Dashboards: Used Power BI to create interactive dashboards for data visualization.</li>
    <li>Data Science Use Cases: Developed data science use cases for advanced analytics.</li>
    <li>Agile Delivery Methodology: Ensured iterative and efficient delivery of solutions.</li>
</ul>
</>
  },
  {
    title: <p><u>Key Highlights.</u></p>,
    text:
    <>
    <p>MechArtista Technocraft's solution delivered significant value to the client's operations:</p>
    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
        <li>Market Opportunity Identification: Helped the bank identify potential market opportunities.</li>
    <li>Self-Service BI: Enabled business users to develop their own insights through self-service BI.</li>
    <li>Performance Clarity: Provided a clear picture of branch, functions, and department performance.</li>
    <li>Customer Risk Profiling: Created risk profiles of customers using a credit risk analysis model.</li>
    <li>Robust Data Governance: Ensured robust data governance and high data quality.</li>
    <li>Near Real-Time Information: Enabled users to access near real-time information.</li>
</ul>
</>
  },
  {
    title: <p><u>The Impact.</u></p>,
    text:<> <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
      <li>Self-Service BI Empowered business users</li>
      <li>Customer Risk Profiling Improved with credit risk analysis</li>
      <li>Data Governance Robust and reliable</li>
</ul>
</>
  },
];

const DataEngineering = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">
        Enhancing Insights with Customer 360 & Big Data Solution for an APAC-Based Retail Bank.
        </h1>
        <div className="gpt3__possibility-image">
        <img src={item2} alt="item2"/>
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

export default DataEngineering;
