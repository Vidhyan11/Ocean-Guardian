import React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import PageNavigation from './components/PageNavigation';
import { pages } from './constants/pages';

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: linear-gradient(to bottom, rgba(0, 20, 40, 0.95), rgba(0, 40, 80, 0.9));
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    color: white;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: white;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const ContentBox = styled.div`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const CoralReefPage = () => {
  return (
    <PageContainer>
      <PageNavigation currentPage="/ocean-guardian/coral-reef" pages={pages} />
      <ContentContainer>
        <Header>
          <h1>Coral Reef Ecosystem</h1>
          <p>
            Learn about the most biodiverse ecosystems in our oceans and the threats they face.
          </p>
        </Header>
        
        <ContentBox>
          <h2>Coral Health</h2>
          <p>This is a placeholder for coral reef content.</p>
        </ContentBox>
        
        <Footer />
      </ContentContainer>
    </PageContainer>
  );
};

export default CoralReefPage; 