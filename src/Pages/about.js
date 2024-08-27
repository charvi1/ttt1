// src/pages/About.js
import React from 'react';
import '../App.css'; // Import the corresponding CSS file

const About = () => {
  return (
    
      <div>
        <div className="about-bg">
          <div className="about-text-heading">
            <h1>Pawsitively Wholesome</h1>
            <h2>Innovation for every paw</h2>
            <h5>FURS, FINS, WINGS & MORE</h5>
          </div>
          <img src="header-about.png" alt="About Header" />
        </div>
      
      <main>
        <section className="about-section1">
          <img className="sec1-paw" src="about-sec1-paw.png" alt="Paw" />
          <div className="about-sec1-content">
            <div className="sec1-img-container">
              <img src="about-section1.png" alt="About Section 1" className="sec1-img" />
            </div>
            <div className="sec1-text">
              <img src="sec1-logo.png" alt="Sec1 Logo" />
              <h1>Happy Pets,</h1>
              <h1>Happy Humans</h1>
              <p>Welcome to Fuzzies, your one-stop shop for all things pet food and accessories! At Fuzzies, we believe that every pet deserves the best care, love, and nutrition. That's why we've curated a range of high-quality, wholesome pet food and premium accessories to keep your furry friends happy, healthy, and stylish. Join us on our mission to create a world where every pet is pampered and cherished!</p>
            </div>
          </div>
        </section>
        <section className="about-section2">
          <div className="about-sec2-content">
            <img className="FAQ" src="FAQ.png" alt="FAQ" />
          </div>
        </section>
      </main></div>
    
  );
};

export default About;
