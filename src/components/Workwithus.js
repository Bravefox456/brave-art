import React from "react";
import "../components/workwithus.css"; // Ensure this path is correct

const WorkWithUs = () => {
  return (
    <div className="work__withus section__margin" id="work-with-us">
      <div className="work__withus-header">
        <h1 className="gradient__text_2">Join Our Team</h1>
        <p>We're always looking for talented individuals to join our team.</p>
      </div>
      <div className="work__withus-description">
        <h2>Why Work With Us?</h2>
        <p>
          At MechArtista Technocrafts, we believe in fostering a culture of
          innovation and collaboration. Our team is made up of diverse
          individuals who are passionate about technology and creativity.
        </p>
        <p>
          We offer flexible working arrangements, opportunities for career
          growth, and a supportive environment where you can thrive.
        </p>
      </div>
      <div className="work__withus-positions">
        <h2>Open Positions</h2>
        <ul>
          <li>
            <strong>Software Engineer</strong> - Full-time
          </li>
          <li>
            <strong>Data Scientist</strong> - Full-time
          </li>
          <li>
            <strong>Project Manager</strong> - Contract
          </li>
          <li>
            <strong>UI/UX Designer</strong> - Full-time
          </li>
        </ul>
      </div>
      <div className="work__withus-apply">
        <h2>How to Apply</h2>
        <p>
          If you're interested in any of the above positions, please send your
          resume and cover letter to{" "}
          <a href="mailto:careers@mechartista.com">careers@mechartistatechnocrafts.com</a>.
        </p>
        <p>We look forward to hearing from you!</p>
      </div>
    </div>
  );
};

export default WorkWithUs;
