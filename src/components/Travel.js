import React from "react";
import { Feature1 } from "../components";
import i2 from "../assets/i2.jpg";
import "./possibility.css";

const featuresData = [
  {
    title: <p><u>Airlines</u></p>,
    text: <>
    <p>
    Trusted and Long Partnerships Powering Airlines Globally with Next-Gen Technologies.
    </p>
    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
      <li>For more than 30 years, MechArtista Technocraft has been a leader in delivering exceptional value to airline enterprises worldwide.</li>
      <li>We have worked with over 60 airlines, covering nearly all global destinations (95%) and handling more than 10% of the world's airline commerce.</li>
      <li>Our solutions and services empower a full spectrum of carriers ranging from low-cost to full-service carriers, across their customer, commercial, operations, and enterprise systems to operate more efficiently, boost revenue, and personalize the travel experience for their customers.</li>
      <li>We've assisted airline enterprises in modernizing their legacy systems, revamping the end-to-end travel experience, streamlining business processes, increasing customer loyalty, and achieving their digital transformation goals.</li>
      <li>Our team of experts have extensive experience working with a diverse range of over 50 industry-leading products, enabling us to deliver tailored solutions that seamlessly integrate with your existing technology landscape across various areas, including Passenger Service Systems (PSS), Loyalty, Revenue Management, Revenue Accounting, Crew Operations, and e-commerce.</li>
    </ul>
  </>
  },
  {
    title:<p><u>Airports</u></p>,
  text:
    <>
      <p>
      Supporting Airport Operations for a Seamless Travel Experience.
      </p>
      <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
        <li>For more than two decades, MechArtista Technocraft has been at the forefront of pioneering airport technology solutions. We develop solutions that improve every step of a passenger's journey, from check-in and security clearance to baggage claim, while simultaneously ensuring punctual flight operations and accelerated turnaround times for airlines.</li>
        
        <li>Leveraging our extensive expertise, we provide comprehensive solutions and services that cater to the diverse needs of over 65 airports worldwide. We have delivered solutions covering the entire spectrum of airport operations, spanning check-in and security procedures, lounge & guest services, passenger services, digital experiences, back-office functions, cargo management, ground support services and ramp handling support. These cutting-edge solutions empower airports globally to streamline their operations, improve non-aero revenues, and deliver a seamless, hassle-free travel experience for their passengers.</li>
      </ul>
    </>
  
  },
  {
    title: <p><u>Travel Tech.</u></p>,
    text:
    <>
    <p>Transforming Travel Experiences with Elevated Technology Solutions.</p><ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
    <li>MechArtista Technocraft is the preferred partner for leading global travel technology companies like Sabre, Amadeus, SITA providing product engineering, quality assurance, and system integration services. With over 4,500 travel technology experts, we offer strong techno-functional expertise in developing and maintaining 50+ mission-critical products used by 60+ airlines and 65+ airports worldwide.</li>
    <li>Our deep engagements across airline passenger service systems, digital retail, cargo, airport operations, and border management position us as strategic partners, ensuring seamless product integration for customers. Our extensive experience includes 20+ airline PSS migrations, 400+ passenger kiosks, 20+ cargo platform implementations and 40+ travel digital & e-commerce platforms.</li>
    <li>Leveraging product engineering capabilities combined with digital integration, AI/ML, and analytics, MechArtista Technocraft enables seamless product operations across airlines, airports, hospitality, transportation, and rail enterprises.</li>
</ul>
</>
  },
  {
    title: <p><u>Online Travel Agencies</u></p>,
    text:
    <>
    <p>Empowering OTA's with Efficient IT Solutions.</p>
    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
        <li>MechArtista Technocraft stands as the go-to partner for leading online travel management companies. We offer a comprehensive suite of services, including product engineering, digital e-commerce solutions, quality assurance, system integration, and AI-powered business processes. Our Real-Time Agent Assist solution provides immediate guidance and automation for customer interactions.</li>
    <li>With experience serving over 60 airlines and 5+ global travel companies, we cover 95% of global destinations and handle 10%+ of world airline commerce. We excel in developing e-commerce solutions for major OTAs, driving personalization, boosting conversion rates, improving customer loyalty, and streamlining processes.</li>
    <li>Our expertise extends to integrating various travel service providers and Global Distribution Systems. Our GDS Center of Excellence specializes in platforms like Sabre and Amadeus, providing comprehensive support for ticketing, modifications, refunds, and back-office functions.</li>
</ul>
</>
  },
  {
    title: <p><u>Logistics and Rail.</u></p>,
    text:<> <p>Logistics & Rail Operations Automated with Intelligent IT solutions.</p>
        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
      <li>For over three decades, MechArtista Technocraft has empowered Logistics and Rail businesses globally to achieve significant growth and enhance customer experiences. We leverage AI-powered industry solutions to streamline critical logistics and rail functions. These solutions focus on areas like Truckload Optimization, Pickup & Delivery, Line Haul Execution, Driver Scheduling & Planning, and Route Optimization.</li>
      <li>Additionally, our advanced Digital Engineering solutions deliver faster, superior, and cost-effective answers to complex business challenges faced by enterprises. By combining industry expertise with leading-edge AI and digital engineering, MechArtista Technocraft equips Logistics and Rail companies to navigate the ever-evolving business landscape and achieve operational excellence.</li>
</ul>
</>
  },
  {
    title: <p><u>Hospitality</u></p>,
    text:<> <p>
        Crafting Experiences & Optimizing Operations for Gaming, Hospitality & Cruiselines.
        </p>
        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
      <li>MechArtista Technocraft has been a pioneering force in delivering cutting-edge solutions to the gaming, hospitality, and cruise industries for over a decade. We have solidified our position as a strategic partner, driving the digital transformation journeys of leading brands in these sectors.</li>
      <li>Our consultative approach, underpinned by extensive industry knowledge, empowers our gaming, hospitality, and cruise clients to deliver personalized experiences across the entire customer journey while automating, streamlining, and optimizing their operations.</li>
      <li>We have provided comprehensive technology services to the world's top three cruise liners and managed IT solutions for over 60 hotels and casino properties globally. Additionally, we support leading airline holiday brands in developing digital applications and commerce solutions. Our expertise extends to enabling seamless integrations for prominent travel brands, facilitating over 50 hotel supplier and channel manager integrations, as well as 50 client integrations across online travel agencies (OTAs), travel management companies (TMCs), and B2B corporates.</li>
      <li>Furthermore, we have leveraged AI and automation to develop solutions for content mapping, contract loading, and distribution of hotel inventory for leading travel and hospitality brands, thereby driving efficiency and scalability.</li>
</ul>
</>
  },
];


const Travel = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">
        Travel, Transportation & Hospitality
        </h1>
        <div className="gpt3__possibility-image">
        <img src={i2} alt="i2"/>
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

export default Travel;
