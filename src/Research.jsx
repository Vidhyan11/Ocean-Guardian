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

const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 30px 0;
`;

const TechCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid #4fc3f7;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
  
  h3 {
    color: #006994;
    margin-bottom: 15px;
    font-size: 1.4rem;
  }
  
  p {
    color: #333;
    line-height: 1.6;
  }
`;

const ResearchPage = () => {
  return (
    <PageContainer>
      <PageNavigation currentPage="/research" pages={pages} />
      <ContentContainer>
        <Header>
          <h1>Ocean Research & Innovation</h1>
          <p>
            Discover the latest scientific research and technologies being used to study and protect our oceans.
          </p>
        </Header>
        
        <ContentBox>
          <h2>Emerging Technologies</h2>
          
          <TechContainer>
            <TechCard>
              <h3>Autonomous Underwater Vehicles (AUVs)</h3>
              <p>
                AUVs are robots that travel underwater without requiring input from an operator. 
                They're revolutionizing deep-sea exploration by accessing areas too dangerous or 
                remote for human divers. Equipped with sensors and cameras, they collect valuable 
                data on ocean conditions, marine life, and geological features.
              </p>
            </TechCard>
            
            <TechCard>
              <h3>Environmental DNA (eDNA) Sampling</h3>
              <p>
                eDNA technology allows scientists to detect the presence of marine species by 
                collecting and analyzing genetic material they leave behind in the water. This 
                non-invasive method is transforming biodiversity monitoring and helping researchers 
                discover new species without having to capture specimens.
              </p>
            </TechCard>
            
            <TechCard>
              <h3>Smart Buoys and Ocean IoT Networks</h3>
              <p>
                Networks of connected sensors deployed throughout the ocean form the "Internet of Things" 
                for marine environments. These systems continuously monitor ocean conditions, providing 
                real-time data on temperature, chemistry, currents, and more. The information helps 
                track climate change impacts and predict extreme weather events.
              </p>
            </TechCard>
            
            <TechCard>
              <h3>Ocean-Based Renewable Energy</h3>
              <p>
                Innovative technologies are harnessing the power of waves, tides, and ocean thermal 
                energy conversion (OTEC) to generate clean electricity. These renewable energy sources 
                have the potential to reduce our dependence on fossil fuels while minimizing environmental 
                impact on marine ecosystems.
              </p>
            </TechCard>
          </TechContainer>
        </ContentBox>
        
        <Footer />
      </ContentContainer>
    </PageContainer>
  );
};

export default ResearchPage; 