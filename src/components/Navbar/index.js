import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../images/SME1.png';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ImgLogo,
  Icon,
} from './NavbarElements';

function Navbar({ toggle }) {
  const [scrollnav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollnav={scrollnav ? 1 : 0}>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <Icon scrollnav={scrollnav ? 1 : 0} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                scrollnav={scrollnav ? 1 : 0}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                scrollnav={scrollnav ? 1 : 0}
              >
                Discover
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavLogo to="/" onClick={toggleHome}>
            <ImgLogo src={logo} scrollnav={scrollnav ? 1 : 0} />
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                scrollnav={scrollnav ? 1 : 0}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="book"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                scrollnav={scrollnav ? 1 : 0}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
