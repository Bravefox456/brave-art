import React from "react";
import { Feature1 } from "../components";
import i3 from "../assets/i3.jpg";
import "./possibility.css";


const featuresData = [
  {
    title: <p><u>Life & Annuities</u></p>,
    text: <>
    <p>
    Modernize & Innovate Your Life & Annuity Business with MechArtista Technocraft to Deliver Exceptional Experiences.
    </p>
    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
      <li>Life and annuity carriers need to stay ahead of the competition as new technologies and InsurTechs disrupt the industry. The ask is to quickly modernize core platforms and create a flexible, extensible technology stack that enables continuous innovation, cost reduction, and delivery of an exceptional customer experience.</li>
      <li>We provide comprehensive, integrated Life & Annuities IT solutions to help reduce IT costs while improving customer experiences. Our services include policy administration system implementations, upgrades and enhancements, digital transformation initiatives, and operations support.</li>
      <li>Our team of experts brings decades of insurance experience to help meet customer expectations, increase operational efficiency, and accelerate process automation. We help unlock the power of advanced analytics and artificial intelligence to better serve your customers and gain a competitive edge. Our platform-agnostic approach gives you the agility and speed to market you need to stay competitive and remain a leader in the insurance space.</li>
    </ul>
  </>
  },
  {
    title:<p><u>Property & Casualty</u></p>,
  text:
    <>
      <p>
      Innovate & Transform Your P&C Business with MechArtista Technocraft to Unlock Growth.
      </p>
      <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
        <li>Property & Casualty insurers can stay at the forefront of the industry by leveraging MechArtista Technocraft's innovative IT solutions. Our comprehensive portfolio helps insurers meet their business objectives while addressing the challenges of legacy systems, outdated processes, lack of innovation, and stringent regulatory requirements. Our solutions are tailored to each insurer's specific needs, allowing them to achieve their business goals quickly and cost-effectively. We enable insurers to increase operational efficiency, reduce operational costs, and provide better customer service. Additionally, we help insurers leverage technology innovations to develop new products and services that meet the changing needs of their customers. With MechArtista Technocraft's comprehensive Property & Casualty Insurance IT solutions, insurers can gain a competitive edge in the marketplace and drive greater business success.</li>
      </ul>
    </>
  
  },
  {
    title: <p><u>Lloyd's & London Market</u></p>,
    text:
    <>
    <p>Transform insurance operations of Lloyds and London market through MechArtista Technocraft.</p><ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
    <li>The Lloyd’s and London Market is an essential hub of the U.K. insurance and reinsurance industry, and an innovative global marketplace for complex risk. The digital revolution has been rapidly accelerated due to the pandemic, propelling the Lloyd’s vision for the Future of Lloyd's from Blueprint One - focused on simplification, efficiency, and reduction of risk - to Blueprint Two.</li>
    <li>This new era of insurance offers the opportunity to deliver better, faster, and more cost-effective services to customers, providing a unique experience that is tailored to their individual needs.</li>
    <li>MechArtista Technocraft provides the London Market with business-transforming solutions that create a leaner and simpler approach to the insurance process. Our services and solutions leverage the power of Cloud, Automation, AI, and analytics to give our clients the agility to launch new products and unlock operational efficiencies. We understand the needs of the industry and have the technical expertise and proven execution culture to make us the go-to partner for commercial insurance and reinsurance carriers. Let us help you unlock the potential of your business today.</li>
</ul>
</>
  },
  
];


const Insurance = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">
        Insurance
        </h1>
        <div className="gpt3__possibility-image">
        <img src={i3} alt="i3"/>
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

export default Insurance;
