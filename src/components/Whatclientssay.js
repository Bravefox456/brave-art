import React from "react";
import { Feature } from "../components";
import "../components/whatclientssay.css";

const featuresData = [
  {
    title: <p><u>George Hadjiyiannis</u><br/><br/>Senior Architect at Haufe-Umantis</p>,
    text: "The team at MechArtista Technocrafts transformed our IT infrastructure. Their dedication to understanding our needs and providing tailored solutions has made a significant impact on our productivity. We couldn't be happier!",
  },
  {
    title: <p><u>Andrew Koslow</u><br/><br/>
    EVP Strategic Transactions at Folio Financial</p>,
    text: "We partnered with MechArtista Technocrafts for our software development needs, and they exceeded our expectations. Their expertise in technology and customer service is unmatched. Highly recommend!",
  },
  {
    title: <p><u>Mike Robbie</u><br/><br/>
    Senior Delivery Manager IT at IAG GBS</p>,
    text: "The level of support we receive from MechArtista Technocrafts is exceptional. Their insights and proactive approach have helped us streamline our operations and achieve our goals faster than we imagined.",
  },
  {
    title: <p><u>Nick Scully</u><br/><br/>
    Procurement and Supplier Management at Tokio Marine HCC International</p>,
    text: "From the initial consultation to the final implementation, MechArtista Technocrafts was with us every step of the way. Their team's professionalism and knowledge have made our project a resounding success.",
  },
];

const Whatclientssay = () => {
  return (
    <div className="gpt3__features section__padding" id="what-our-clients-say">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">What our clients say</h1>
        <p className="gradient__text">
        Don't take our word for it. Hear from the business leaders who have entrusted us with critical projects and chosen us as their transformation partners.
        </p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Whatclientssay;
