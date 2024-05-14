import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './components/Logo';
import { FiShoppingCart } from 'react-icons/fi';
import useIsMobile from '~/hooks/useIsMobile';
import { Box } from '../layout/Box';
import Sidebar from './components/Sidebar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

interface LinkType {
  text: string;
  path: string;
}

const LINKS: LinkType[] = [
  {
    text: 'Dashboard',
    path: '/',
  },
  {
    text: 'About',
    path: '/about',
  },
];

export default function NavBar() {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function renderLinks() {
    if (isMobile) {
      return <GiHamburgerMenu cursor="pointer" size="30px" onClick={() => setSidebarOpen(true)} />;
    } else {
      return (
        <ul>
          {LINKS.map(({ text, path }) => (
            <Link key={path} to={path}>
              <li>{text}</li>
            </Link>
          ))}
        </ul>
      );
    }
  }
  return (
    <StyledNav>
      <Logo />
      {renderLinks()}
      {isMobile ? (
        <Box position="fixed" bottom="20px" right="20px">
          <FiShoppingCart cursor="pointer" size="30px" />
        </Box>
      ) : (
        <FiShoppingCart size="30px" />
      )}
      <Sidebar isOpen={sidebarOpen} toggleOpen={setSidebarOpen}>
        test
      </Sidebar>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  ul {
    justify-content: center;
    display: flex;
    gap: 3rem;
    list-style-type: none;

    a {
      text-decoration: none;
    }
  }
`;
