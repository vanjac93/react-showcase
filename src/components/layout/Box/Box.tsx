import styled from 'styled-components';
import { background, border, color, flex, layout, position, space } from 'styled-system';
import { BoxProps } from './types';

const Box = styled.div<BoxProps>`
  ${background}
  ${layout}
  ${position}
  ${space}
  ${color}
  ${border}
  ${flex}
`;

export default Box;
