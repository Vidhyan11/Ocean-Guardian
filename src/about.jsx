import React from "react";
import "./indexcss.css";
import Header from "./navbar";
import "./aboutcss.css";

const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Header />

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2>About Ocean-Guardian</h2>
          <p>
            Ocean-Guardian is dedicated to protecting marine life and promoting
            ocean conservation. We work to raise awareness about pollution,
            climate change, and sustainable practices that help preserve the
            beauty of our oceans for future generations.
          </p>
          <p>
            Founded by a passionate team of environmentalists, our organization
            collaborates on projects such as beach clean-ups, coral reef
            restoration, and community outreach to foster a sustainable future
            for our blue planet.
          </p>
          {/* Uncomment the following line if you want to display an image */}
          {/* <img src="assets/ocean_clean.jpg" alt="Clean Ocean" className="about-image" /> */}
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-section">
        <h3>Our Mission & Vision</h3>
        <p>
          Our mission is to create a sustainable future for our oceans by
          actively engaging communities, fostering environmental education, and
          partnering with global organizations dedicated to marine conservation.
        </p>
        <p>
          We envision a world where the oceans remain healthy, vibrant, and
          teeming with life – a source of inspiration, sustenance, and wonder
          for generations to come.
        </p>
        <p>
          Through innovative projects and sustainable practices, Ocean-Guardian
          is committed to turning this vision into reality by driving research,
          promoting green policies, and encouraging responsible stewardship of
          marine ecosystems.
        </p>
        <p className="extra-info">
          Our initiatives extend to supporting local communities, developing
          educational programs, and leveraging technology to monitor and protect
          ocean health. We believe that every individual has a role to play in
          preserving our natural heritage, and together, we can ensure that the
          oceans continue to flourish for a brighter future.
        </p>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col">
              <h4>About Ocean-Guardian</h4>
              <ul>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Mission</a>
                </li>
                <li>
                  <a href="#">Vision</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#">
                  <img src="asset/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="#">
                  <img src="asset/instagram.png" alt="Instagram" />
                </a>
                <a href="#">
                  <img src="asset/facebook.png" alt="Facebook" />
                </a>
                <a href="#">
                  <img src="asset/x.png" alt="X" />
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="#">Email: info@ocean-guardian.com</a>
                </li>
                <li>
                  <a href="#">Phone: +1234567890</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
