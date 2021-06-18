import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #151518;
  color: #8A8A8C;
`;

const TweeterAppTitle = styled.span`
  margin-bottom: 1rem;
`;

export function App() {
  return (
    <StyledApp>
      <TweeterAppTitle>Tweeter app. Coming soon...</TweeterAppTitle>
      <a href="/">Back Home</a>
    </StyledApp>
  );
}

export default App;
