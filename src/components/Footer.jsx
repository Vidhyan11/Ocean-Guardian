import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #003366, #006699);
  color: white;
  padding: 2rem 0;
  margin-top: 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: white;
      text-decoration: underline;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Ocean Guardian</h3>
          <p>Protecting our oceans through education, awareness and action.</p>
        </FooterSection>
        <FooterSection>
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/underwater-life">Underwater Life</Link></li>
            <li><Link to="/deep-sea">Deep Sea</Link></li>
            <li><Link to="/coral-reef">Coral Reef</Link></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Take Action</h3>
          <ul>
            <li><Link to="/conservation">Conservation</Link></li>
            <li><Link to="/ngo">NGO Partners</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </FooterSection>
      </FooterContent>
      <Copyright>
        &copy; {new Date().getFullYear()} Ocean Guardian. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 