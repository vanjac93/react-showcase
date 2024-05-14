import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { Flex } from '~/components/layout/Box';
import { GrClose } from 'react-icons/gr';

interface SidebarProps extends PropsWithChildren {
  isOpen: boolean;
  toggleOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, toggleOpen, children }: SidebarProps) {
  return (
    <StyledSidebar $isOpen={isOpen}>
      <Flex justifyContent="end">
        <GrClose cursor="pointer" onClick={() => toggleOpen(false)} size="30px" />
      </Flex>
      {children}
    </StyledSidebar>
  );
}

const StyledSidebar = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  z-index: 1000;
  /* width: 100vw; */
  height: 100vh;
  background-color: aliceblue;
  padding: 1rem;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%);
  width: 30vw;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: translateX(0);
    `}

  @media (max-width: 1000px) {
    width: 30vw;
  }

  @media (max-width: 600px) {
    width: 100vw;
  }
`;
