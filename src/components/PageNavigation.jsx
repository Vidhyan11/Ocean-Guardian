import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to right, rgba(0, 51, 102, 0.95), rgba(0, 102, 153, 0.95));
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.8rem 1.5rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    color: #00ccff;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  color: ${props => props.$isActive ? '#00ccff' : 'white'};
  text-decoration: none;
  font-weight: ${props => props.$isActive ? 'bold' : 'normal'};
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  
  &:hover {
    color: #00ccff;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    background-color: #00ccff;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const PageNavigation = ({ currentPage, pages }) => {
  return (
    <NavContainer>
      <NavContent>
        <Logo to="/ocean-guardian/">
          Ocean Guardian
        </Logo>
        <NavLinks>
          {pages.map(page => (
            <NavItem key={page.path}>
              <NavLink 
                to={page.path} 
                $isActive={currentPage === page.path}
              >
                {page.label}
              </NavLink>
            </NavItem>
          ))}
        </NavLinks>
      </NavContent>
    </NavContainer>
  );
};

export default PageNavigation; 