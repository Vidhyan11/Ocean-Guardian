import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from './components/Footer';
import PageNavigation from './components/PageNavigation';
import { pages } from './constants/pages';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const waveAnimation = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;

const OceanBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #0077be, #00a6fb, #7fb9f2);
  z-index: -1;
  opacity: 0.1;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem 2rem;
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 80px;
  position: relative;
`;

const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
  animation: ${fadeIn} 1s ease-out;

  h1 {
    font-size: 3rem;
    color: white;
    margin-bottom: 1rem;
    display: inline-block;
    transform-origin: 70% 70%;
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
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 105, 148, 0.1);
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-out;
  border-left: 5px solid #00a6fb;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 105, 148, 0.2);
  }

  h2 {
    color: #006994;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
    color: #555;
    margin-bottom: 1rem;
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const StatBox = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  opacity: 0;
  transform: scale(0.9);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0, 105, 148, 0.15);
  }

  h3 {
    color: #006994;
    font-size: 2.5rem;
    margin: 0;
    background: linear-gradient(to right, #00a6fb, #006994);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  p {
    color: #666;
    margin: 0.5rem 0 0;
  }

  &.visible {
    opacity: 1;
    transform: scale(1);
  }
`;

const NGOList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const NGOItem = styled.li`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(-20px);

  &:nth-child(even) {
    transform: translateX(20px);
  }

  &:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 10px 25px rgba(0, 105, 148, 0.15);
  }

  h3 {
    color: #006994;
    margin-top: 0;
  }

  p {
    color: #666;
    line-height: 1.5;
  }

  a {
    color: #00a6fb;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin-top: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }

  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;

const CallToAction = styled.div`
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, #00a6fb, #006994);
  color: white;
  border-radius: 15px;
  margin: 3rem 0;
  opacity: 0;
  transform: scale(0.95);

  h2 {
    margin-top: 0;
    font-size: 2rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 2rem;
  }

  button {
    background: white;
    color: #006994;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
  }

  &.visible {
    opacity: 1;
    transform: scale(1);
  }
`;

const SpacedSection = styled.div`
  margin: 0;
  margin-bottom: 2rem;
`;

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

const NGOPage = () => {
  const contentBoxesRef = useRef([]);
  const statBoxesRef = useRef([]);
  const ngoItemsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Initialize animations with GSAP ScrollTrigger
    contentBoxesRef.current.forEach((box, i) => {
      if (box) {
        gsap.to(box, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          delay: i * 0.1
        });
      }
    });

    statBoxesRef.current.forEach((box, i) => {
      gsap.to(box, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: box,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        delay: i * 0.15
      });
    });

    ngoItemsRef.current.forEach((item, i) => {
      gsap.to(item, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        delay: i * 0.1
      });
    });

    if (ctaRef.current) {
      gsap.to(ctaRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }

    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Sample data for NGOs
  const ngos = [
    {
      name: "Ocean Conservancy",
      description: "Working to protect the ocean from today's greatest global challenges, with science-based solutions.",
      link: "https://oceanconservancy.org"
    },
    {
      name: "Sea Shepherd",
      description: "Direct-action conservation organization working to defend marine wildlife and habitats.",
      link: "https://seashepherd.org"
    },
    {
      name: "Surfrider Foundation",
      description: "Dedicated to the protection and enjoyment of the world's ocean, waves and beaches.",
      link: "https://www.surfrider.org"
    },
    {
      name: "The Ocean Cleanup",
      description: "Developing advanced technologies to rid the oceans of plastic.",
      link: "https://theoceancleanup.com"
    },
    {
      name: "Blue Marine Foundation",
      description: "Working to restore the ocean to health by addressing overfishing.",
      link: "https://www.bluemarinefoundation.com"
    },
    {
      name: "Coral Reef Alliance",
      description: "Saving the world's coral reefs by implementing science-based strategies.",
      link: "https://coral.org"
    }
  ];

  return (
    <PageContainer>
      <PageNavigation currentPage="/ngo" pages={pages} />
      <ContentContainer>
        <PageWrapper>
          <OceanBackground />
          <Container>
            <Header>
              <h1>NGOs Protecting Our Oceans</h1>
              <p>
                NGOs around the globe are actively engaged in cleaning up our beaches and promoting marine conservation. 
                These organizations play a crucial role in preserving marine habitats and educating communities on sustainable practices.
              </p>
            </Header>

            <ContentBox 
              ref={el => contentBoxesRef.current[0] = el}
            >
              <h2>The Importance of Ocean Conservation</h2>
              <p>
                Our oceans cover more than 70% of the Earth's surface and are home to an incredible diversity of life. 
                They regulate our climate, produce half of the oxygen we breathe, and provide food and livelihoods for billions of people. 
                Yet, human activities are threatening marine ecosystems through pollution, overfishing, and climate change.
              </p>
              <p>
                Non-governmental organizations (NGOs) are at the forefront of efforts to protect and restore our oceans. 
                Through research, advocacy, education, and direct action, these groups are making a tangible difference in marine conservation.
              </p>
            </ContentBox>

            <StatsGrid>
              <StatBox ref={el => statBoxesRef.current[0] = el}>
                <h3>8M+</h3>
                <p>Tons of plastic enter the ocean each year</p>
              </StatBox>
              <StatBox ref={el => statBoxesRef.current[1] = el}>
                <h3>90%</h3>
                <p>Of large fish populations have been depleted</p>
              </StatBox>
              <StatBox ref={el => statBoxesRef.current[2] = el}>
                <h3>50%</h3>
                <p>Of coral reefs have been lost since 1950</p>
              </StatBox>
              <StatBox ref={el => statBoxesRef.current[3] = el}>
                <h3>30%</h3>
                <p>Of marine protected areas needed by 2030</p>
              </StatBox>
            </StatsGrid>

            <ContentBox 
              ref={el => contentBoxesRef.current[1] = el}
            >
              <h2>How NGOs Are Making a Difference</h2>
              <p>
                Marine conservation NGOs employ various strategies to protect our oceans:
              </p>
              <ul style={{ color: '#333' }}>
                <li><strong>Beach Cleanups:</strong> Organizing volunteers to remove trash from coastlines worldwide</li>
                <li><strong>Policy Advocacy:</strong> Lobbying governments for stronger marine protection laws</li>
                <li><strong>Scientific Research:</strong> Studying marine ecosystems to inform conservation efforts</li>
                <li><strong>Education:</strong> Teaching communities about sustainable fishing and plastic reduction</li>
                <li><strong>Direct Action:</strong> Patrolling protected areas to prevent illegal fishing</li>
                <li><strong>Technology Development:</strong> Creating innovative solutions to remove ocean plastic</li>
              </ul>
            </ContentBox>

            <h2 style={{ textAlign: 'center', margin: '3rem 0' }}>Leading Ocean Conservation NGOs</h2>
            <NGOList>
              {ngos.map((ngo, index) => (
                <NGOItem 
                  key={ngo.name}
                  ref={el => ngoItemsRef.current[index] = el}
                >
                  <h3>{ngo.name}</h3>
                  <p>{ngo.description}</p>
                  <a href={ngo.link} target="_blank" rel="noopener noreferrer">Visit Website →</a>
                </NGOItem>
              ))}
            </NGOList>

            <SpacedSection>
              <ContentBox 
                ref={el => contentBoxesRef.current[2] = el}
                style={{ marginBottom: 0 }}
              >
                <h2>What You Can Do</h2>
                <p>
                  While NGOs lead large-scale conservation efforts, individuals can make a significant impact through daily choices:
                </p>
                <ul style={{ color: '#333' }}>
                  <li>Reduce single-use plastics in your daily life</li>
                  <li>Choose sustainable seafood options</li>
                  <li>Participate in local beach cleanups</li>
                  <li>Support ocean-friendly businesses</li>
                  <li>Educate others about marine conservation</li>
                  <li>Donate to or volunteer with marine NGOs</li>
                </ul>
                <p style={{ marginBottom: 0 }}>
                  Together, we can ensure healthy oceans for future generations.
                </p>
              </ContentBox>
            </SpacedSection>
          </Container>
          <Footer />
        </PageWrapper>
      </ContentContainer>
    </PageContainer>
  );
};

export default NGOPage; 