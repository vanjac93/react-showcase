import { StyleSheetManager, WebTarget } from 'styled-components';
import AppRouter from './Router';
import emotionIsPropValid from '@emotion/is-prop-valid';
import NormalizedStyle from './theme/css/normalize.styled';

function App() {
  return (
    <>
      <NormalizedStyle />
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <AppRouter />
      </StyleSheetManager>
    </>
  );
}

export default App;

function shouldForwardProp(propName: string, elementToBeRendered: WebTarget) {
  return typeof elementToBeRendered === 'string' ? emotionIsPropValid(propName) : true;
}
