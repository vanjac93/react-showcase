import { createGlobalStyle } from 'styled-components';

const NormalizedStyle = createGlobalStyle`
  html, body{
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    
  }

  
  * {
    box-sizing: border-box;
  }

  i {
    cursor: pointer;
  }
`;

export default NormalizedStyle;
