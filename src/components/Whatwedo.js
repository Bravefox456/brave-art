import React from "react";
import { Article } from "../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "../components/whatwedo.css";

const Whatwedo = () => {
  return (
    <div className="gpt3__blog section__padding" id="what-we-do">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
        What we do
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
        <a href="/banking-and-financial-services" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Article
  imageUrl={blog01}
  title={<span style={{ textDecoration: 'underline' }}>Banking & Financial Services</span>}
/>
</a>
        </div>
        <div className="gpt3__blog-container_groupB">
        <a href="/travel" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Article
            imageUrl={blog02}
            title={<span style={{ textDecoration: 'underline' }}>Travel, Transportation & Hospitality</span>}
          />
          </a>
          <a href="/insurance" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Article
            imageUrl={blog03}
            title={
              <span style={{ textDecoration: 'underline' }}>Insurance</span>}
            
      />
</a>

          <a href="/healthcare" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
  <Article
    imageUrl={blog04}
    title={
      <span style={{ textDecoration: 'underline' }}>
        Healthcare & Life Sciences
        </span>
    }
  />
</a>
<a href="/retail" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Article
            imageUrl={blog05}
            title={
              <span style={{ textDecoration: 'underline' }}>
                Retail & Consumer Goods
              </span>
            }
          />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
