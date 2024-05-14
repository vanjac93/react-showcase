import styled, { css } from 'styled-components';
import { DividerProps } from './types';
import { background, color, layout, space } from 'styled-system';

const HorizontalCSS = css`
  width: 100%;
  height: 1px;
`;

const VerticalCSS = css`
  width: 1px;
  height: 100%;
`;

const Divider = styled.div<DividerProps>`
  line-height: 1.5;
  ${({ $vertical }) => {
    if ($vertical) {
      return VerticalCSS;
    } else {
      return HorizontalCSS;
    }
  }}

  ${background}
  ${space}
  ${color}
  ${layout}
`;

export default Divider;
