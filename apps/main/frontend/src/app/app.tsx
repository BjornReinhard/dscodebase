import React from 'react';

import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  line-height: 28px;
  letter-spacing: 0.3px;
`;

export function App() {
  return (
    <StyledApp>
      Home Page
    </StyledApp>
  );
}

export default App;
