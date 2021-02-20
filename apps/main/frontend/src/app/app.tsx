import React from 'react';

import styled from 'styled-components';

import ReactIcon from './../assets/react.svg';
import AngularIcon from './../assets/angular.svg';
import TypescriptIcon from './../assets/typescript.svg';
import NodeIcon from './../assets/node-dot-js.svg';

const GreenColor = '#5afea4';
const DeepBlueColor = '#090f29';
const DarkFont = '#020307';

const About = styled.div`
  padding: 0 1rem;
  font: 300 48px 'Fira Sans', sans-serif;
`;

const TextBlock = styled.span`
  text-align: left;
`;

const Company = styled.div`
`;

const CompanyLink = styled.a`
  width: 100%;
  color: ${GreenColor};

  &:hover {
    text-decoration: none;
    color: ${DarkFont};
    background-color: #fff;
  }
`;

const Icons = styled.div`
  margin-top: 3rem;
  justify-content: flex-start;
  opacity: 0.2;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 1rem;

  &.first {
    margin: 0 1rem 0 0;
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem 2rem 2rem 10rem;
  margin: 0;
  list-style: none;
  font: 300 48px 'Fira Sans', sans-serif;
`;

const MenuItem = styled.li`
  margin: 0.5rem 0;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: ${DeepBlueColor};
    color: #fff;
  }
`;

const StyledCol = styled.div`
  @media (max-width: 425px) {
    height: 50%;
  }
`;

const LeftColumn = styled(StyledCol)`
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: ${DeepBlueColor};
  @media (max-width: 768px) {
    height: 50%;
  }
`;

const RightColumn = styled(StyledCol)`
  color: ${DarkFont};
`;

const Columns = styled.div`
  height: 100%;
  margin: 0;
`;

export function App() {
  return (
    <Columns className='columns'>
      <LeftColumn className='is-flex is-flex-direction-column column is-half is-align-items-center'>
        <About className='is-flex is-flex-direction-column'>
          <TextBlock>Daniil Stepanov,</TextBlock>
          <TextBlock>Senior Frontend Developer</TextBlock>
          <Company>
            <CompanyLink href='https://www.luxoft.com/'>
              @Luxoft
            </CompanyLink>
          </Company>
          <Icons className='is-flex'>
            <Icon className='first' alt='react icon' src={ReactIcon} />
            <Icon alt='angular icon' src={AngularIcon} />
            <Icon alt='typescript icon' src={TypescriptIcon} />
            <Icon alt='node icon' src={NodeIcon} />
          </Icons>
        </About>
      </LeftColumn>
      <RightColumn className='is-flex column is-half is-align-items-center'>
        <Menu>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Github</MenuItem>
          <MenuItem>LinkedIn</MenuItem>
          <MenuItem>Contact me</MenuItem>
        </Menu>
      </RightColumn>
    </Columns>
  );
}

export default App;
