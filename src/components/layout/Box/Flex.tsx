import styled, { css } from 'styled-components';
import Box from './Box';
import { flexbox, layout } from 'styled-system';
import { FlexProps } from './types';

const Flex = styled(Box)<FlexProps & { $gap?: number }>`
  display: flex;
  ${({ $gap }) =>
    $gap &&
    css`
      gap: ${$gap}px;
    `}
  ${flexbox}
  ${layout}
`;

export default Flex;
