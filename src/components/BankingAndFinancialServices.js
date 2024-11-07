import React from "react";
import { Feature1 } from "../components";
import i1 from "../assets/i1.png";
import "./possibility.css";

const featuresData = [
  {
    title: <p><u>Retail & Corporate Banking</u></p>,
    text: <>
    <p>
    Revolutionizing Banking: Smart Loans, Digital Experiences, and Global Recognition.
    </p>
    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
      <li>The banking industry is undergoing a profound transformation, shifting from product-centric to customer-centric approaches. Banks seek agile systems and processes to deliver enhanced customer experiences through seamless digital channels, increasing customer revenue and profits.</li>
      <li>At MechArtista Technocraft, we play a crucial role in assisting global banks in enhancing customer satisfaction. We help them modernize their core banking and lending platforms, revamp risk management systems, and upgrade outdated legacy platforms. Our proficiency in cutting-edge and distributed technologies, combined with our deep understanding of legacy systems, empowers us to deliver optimal solutions for front, middle, and back-office operations.</li>
      <li>MechArtista Technocraft excels at modernizing core banking platforms and facilitating cloud migrations. We specialize in designing and implementing digital channels, products & platforms and harnessing low-code platforms to enhance operational efficiency. Our comprehensive knowledge of both legacy and emerging technologies positions us to provide tailored solutions to our clients, including some of the world's largest banks.</li>
    </ul>
  </>
  },
  {
    title:<p><u>Asset & Wealth Management</u></p>,
  text:
    <>
      <p>
      Empowering Asset & Wealth Management: Customized Strategies and Data-Driven Insights.
      </p>
      <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
        <li>At MechArtista Technocraft, we're not just keeping pace with the AWM industry - we're helping to shape its future. We are driving digital enablement and delivering tangible business value across private banking, financial advisory, investment management, and regulatory compliance sectors. We have a significant footprint in the industry, supporting over 50,000 advisors, over 50 clients & support platforms managing over $1.8T AUM/A.</li>
        <li>We are helping our customers
            <ul>
                <li>Explore new business and operating models - Digital, Direct, AI Based – focused on New Generation of Investors/Wealth.</li>
<li>Deliver Hyper-personalize CX to Investors, Advisors & Employees while improving operational efficiency with Frictionless Digital Operations – Front, Middle & Back Office – By Transforming Operations, Contact Centers & Business Processes.</li>
<li>Implement a tech-first strategy for business process transformation.</li>
<li>Modernize and implement modern wealth and investment management platform with greater speed of change and business agility.</li>
<li>Monetize Data & Technology Investments to innovate against competition and</li>
<li>Meet compliance and regulatory requirements, improve IT security and operational resilience.</li>
            </ul>
        </li>
        <li>Our AWM offerings cover the entire value chain, from sophisticated wealth management platforms to cutting-edge investment management solutions, addressing industry's most pressing challenges head-on by leveraging our deep domain expertise, digital transformation capabilities, business process capabilities, and AI-powered solutions such as Advisor Copilot.</li>
      </ul>
    </>
  
  },
  {
    title: <p><u>Mortgage</u></p>,
    text:
    <>
    <p>Revolutionizing Mortgages: Automation for Superior Customer Experiences.</p><ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
    <li>Mortgage business is experiencing a generational shift with a focus on direct selling, digitalization, AI automation, and enhanced security.</li>
    <li>We are enabling our customers transform mortgage platforms across sales, underwriting, securitization and servicing using core platform modernization, intelligent document processing, innovative AI solutions, cloud-native microservices based architecture, seamless third-party integrations, CRM and case management platforms. We are also driving digital-first and direct mortgage customer experience to transform the business model for Industry.</li>
    <li>We help incorporate end-to-end digital workflows with data analytics and AI-driven decision-making process leveraging existing customer data in applications to enhance offerings to customers and intermediaries across sales and service journey.</li>
    <li>Our Salesforce and Low Code practices along with our Pega, Appian and Business Process Excellence experts and Mortgage solutions enhance our offerings on mortgages from lead management to automation of the credit appraisal process, and to enhance overall customer experience by combining technology platforms and deep domain experience.</li>
</ul>
</>
  },
  {
    title: <p><u>Cards & Payments</u></p>,
    text:
    <>
    <p>Innovating Global Finance through Pioneering Payment Solutions.</p>
    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
        <li>The emergence of new payment models like digital payments, contactless payments, A2A & P2P payments, BNPL, mobile payment options are on the rise, providing consumers with convenient and secure payment methods. Likewise, the card industry is also undergoing a transformation, with traditional cards turning into multifunctional, technologically advanced financial tools.</li>
    <li>At MechArtista Technocraft, we help our clients build future-proof and secure payment and card solutions that enable them to stay ahead of the curve. Our legacy modernization framework allows banks and financial institutions to migrate from legacy to modern distributed platforms. Our team of experts can help banks and financial institutions launch new payment products, optimize payment processing, and enhance customer experience.</li>
    <li>MechArtista Technocraft provides cost-efficient solutions, assists with regulatory compliance, and maintains payment & card processing platforms with agility and automation. Our extensive support team assists clients in managing millions of daily transactions across multiple channels. MechArtista Technocraft also ensures clients' compliance with relevant regulations and industry standards, including PCI-DSS (Payment Card Industry - Data Security Standard).</li>
</ul>
</>
  },
  {
    title: <p><u>Risk & Compliance</u></p>,
    text:<> <p>
        Navigating Complex Risks: MechArtista Technocraft’s Innovative Compliance Solutions.
        </p>
        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
      <li>Financial institutions have been witnessing increasingly complex financial and non-financial risks and increased regulatory scrutiny in recent years. MechArtista Technocraft is positioned as a strategic provider for Risk advisory and solutions in the financial services industry. We bring in a comprehensive blend of Risk and Compliance offerings to deliver innovative solutions to enable our clients execute their risk management agenda and meet their regulatory obligations. Our team has multiple decades of banking, capital markets and financial products experience.</li>
      <li>We have kept pace with evolution in the risks and required compliances, both in terms of services and target engagement models - from simple capital requirement calculations and operational risk assessments to more complex internal models, and newer risk areas like environmental, AI and data privacy. MechArtista Technocraft provides customizable end-to-end risk management services across three key pillars - Risk Advisory, Business Services and Risk and Regulatory Transformations. Technology has been our key differentiator, and we provide risk solutions driven by solid technology infrastructure leveraging AI-based tools, data analytics and digital capabilities.</li>
</ul>
</>
  },
];

const BankingAndFinancialServices = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      
      <div className="gpt3__possibility-content">
        <h1 className="gradient__text">
        Banking & Financial Services
        </h1>
        <div className="gpt3__possibility-image">
        <img src={i1} alt="i1"/>
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

export default BankingAndFinancialServices;
