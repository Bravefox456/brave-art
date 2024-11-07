import React from "react";
import { Feature1 } from "../components";
import i4 from "../assets/i4.jpg";
import "./possibility.css";


const featuresData = [
  {
    title: <p><u>Life Sciences</u></p>,
    text: <>
    <p>
    Catalyze Life Sciences Innovation, Efficiencies, and Speed to Market.
    </p>
    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
      <li>Life Sciences organizations have made great strides in bringing drug therapies and medical devices to market. Digitization, efficiency optimization and cost takeouts in operations, speed to market and compliance with ever tightening regulations are key priorities to drive technology-led business transformation.</li>
      <li>MechArtista Technocraft, with its breadth and depth of technical capabilities and domain knowledge, can help Pharma, CRO, CDMO, Biotech & Med Devices organizations:
        <ul>
            <li>Optimize IT operations through rationalization, modernization and move to cloud</li>
            <li>Improve operational efficiencies and experiences by digitizing and automating business operations</li>
            <li>Adopt Pharma 4.0+ and build/scale for the future</li>
<li>Focus on core high value initiatives by outsourcing non-critical commoditized operations</li>
<li>Set up Global Capability Centers (Build, Operate, Transfer / Scale)</li>
        </ul>
      </li>
      <li>Our Life Sciences team brings thought leadership, operational excellence, cross-industry best practices and unbiased technology expertise to accelerate your transformational efforts. Reach out to us for more information.</li>
    </ul>
  </>
  },
  {
    title:<p><u>Med Tech</u></p>,
  text:
    <>
      <p>
      Magnify Medical Technology Innovation, Product Excellence and Customer Success.
      </p>
      <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
        <li>Medical technology and digital healthcare platform companies provide unique technology solutions to the healthcare and life sciences market.</li>
        <li>Adopting emerging technologies, optimizing the product engineering life cycle, integratedingquality and regulatory compliance, running cost-effective operations, increasing speed to market and driving end-customer experiences are key to building a competitive edge and sustaining/scaling business.</li>
        <li>MechArtista Technocraft, with its breadth and depth of technical capabilities and industry domain knowledge, can help med tech organizations:
            <ul>
                <li>Drive speed to market by leveraging agile digital & quality engineering expertise at global scale</li>
                <li>Quickly adapt to change by leveraging modern architectures, AI, automation and Industry 4.0+</li>
                <li>Scale professional services and customer support capabilities globally</li>
<li>Optimize IT operations through rationalization, modernization, shared services and move to cloud</li>
<li>Set up Global Capability Centers (Build, Operate, Transfer / Scale)</li>
            </ul>
        </li>
        <li>Our healthcare & life sciences team brings thought leadership, operational excellence, cross-industry best practices and unbiased technology expertise to accelerate your transformational efforts and speed to value. Reach out to us for more information.</li>
      </ul>
    </>
  
  },
  {
    title: <p><u>Payers</u></p>,
    text:
    <>
    <p>Amplify Health Insurance Value Chain, Efficiencies, and Scale.</p><ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
    <li>The world for payers and PBMs continues to evolve rapidly with competitive market consolidations, ever-changing regulations and payment reforms, operational cost pressures, blurring lines between payers and providers, heightening consumerism and growing technical debt.</li>
    <li>Improving health outcomes, pricing transparency and member experiences, as well as balancing growing membership and population health risk while seamlessly yet cost-effectively scaling operations and complying with regulations continue to be key business drivers.</li>
    <li>MechArtista Technocraft, with its breadth and depth of technical capabilities, business process services and domain knowledge, can help health insurance organizations:
        <ul>
            <li>Drive digital transformation, data-driven decision making and interoperability for compliance and competitive differentiation including UM/CM/A&G and Contact Center transformation</li>
            <li>Improve operational efficiencies and experiences leveraging process automation and AI</li>
            <li>Optimize IT operations through rationalization, modernization and move to cloud</li>
            <li>Focus on core high value initiatives by outsourcing non-critical commoditized operations</li>
            <li>Set up Global Capability Centers (Build, Operate, Transfer / Scale)</li>
        </ul>
    </li>
    <li>Our health insurance team brings thought leadership, operational excellence, cross-industry best practices and unbiased technology expertise to accelerate your transformational efforts. Reach out to us for more information.</li>
</ul>
</>
  },
  {
    title: <p><u>Providers</u></p>,
    text:
    <>
    <p>Propel Healthcare Outcomes, Experiences, and Business Economics.</p><ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
    <li>The world of healthcare systems continues to evolve rapidly with competitive market consolidations, ever-changing regulations and payment reforms, operational cost and supply chain pressures, heightening consumerism, staffing shortages and growing tech debt.</li>
    <li>Driving forward the quadruple aim of healthcare (equitable quality of care, affordable cost of care, accessible care with great experiences, teammate satisfaction) and complying with regulations continue to be key business drivers. It is critical for healthcare organizations to adopt emerging technologies and scale operations seamlessly and cost-effectively, to stay relevant and gain competitive advantage. MechArtista Technocraft, with its breadth and depth of technical capabilities, business process services and domain knowledge, can help healthcare organizations:
        <ul>
            <li>Improve patient experience, care coordination, health outcomes and overall Star ratings through digital transformation, data-driven decision support and interoperability.</li>
            <li>Improve provider experience, productivity and workflow efficiencies leveraging process automation and AI</li>
            <li>Drive efficiencies, cost takeouts and scalability in operations through IT Ops rationalization (consolidation, modernization, move to cloud, etc.) and business process optimization (outsourcing, automation)</li>
            <li>Expand horizons with Global Capability Centers (Build, Operate, Transfer / Scale)</li>
        </ul>
    </li>
    <li>Our healthcare team brings thought leadership, operational excellence, cross-industry best practices and unbiased technology expertise to accelerate your transformational efforts. Reach out to learn more.</li>
</ul>
</>
  },
];


const Healthcare = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">
        Healthcare & Life Sciences
        </h1>
        <div className="gpt3__possibility-image">
        <img src={i4} alt="i4"/>
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

export default Healthcare;
