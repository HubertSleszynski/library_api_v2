import React from "react";
import "./About.css";
import aboutImg from "../../images/pexels-taryn-elliott-4440123.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About this website</h2>
            <p className="fs-17">
              Welcome to our platform, where the love for books meets the
              fascinating world of exploration. Specifically crafted for you,
              we've created a space where you can delve into new titles without
              any commitments. Here, we focus on the pure joy of discovery. Our
              intuitive search engine allows you to explore diverse genres,
              authors, and topics, with each book offering a unique summary.
              It's a place designed for literature enthusiasts who want to
              derive pleasure from new findings without any hidden obligations.
            </p>
            <p className="fs-17">
              Discover the pleasure of navigating the literary world, where
              every visit to our site is a new opportunity for exciting
              revelations. We invite you to make use of our unique summaries and
              experience the joy of endless literary inspirations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
