import styled from 'styled-components';
import logo from '~/assets/logo.jpg';

export default function Logo() {
  return <StyledImage src={logo} />;
}

const StyledImage = styled.img`
  height: 30px;
  width: 30px;
`;
