import React from "react";
import "../components/footer.css";
import gpt3Logo from "../assets/logoo.png";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p><a href="/safeharbor" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Safe Harbor</a></p>
          <p><a href="/cookiepolicy" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Cookie Policy</a></p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p><a href="/termsofuse" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Terms & Conditions</a></p>
          <p><a href="/privacypolicy" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Privacy Policy</a></p>
          <p><a href="/contactus" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a></p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>085-132567</p>
          <p>contact@mechartistatechnocrafts.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2016 MechArtista Technocrafts. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
