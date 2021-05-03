import React from 'react';
import logo from '../../images/SME2.png';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  ImgLogo,
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Connect</FooterLinkTitle>
              <FooterLink to="/">
                Call us: <br /> (+63)927-884-6859
              </FooterLink>
              <FooterLink to="/">
                Message us:
                <br /> On Facebook or Instagram.
              </FooterLink>
              <FooterLink to="/">
                Email us:
                <br /> On sguilleno22@gmail.com
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Offers</FooterLinkTitle>
              <FooterLink to="/">Make up</FooterLink>
              <FooterLink to="/">Hair Color</FooterLink>
              <FooterLink to="/">Brazilian Blowout</FooterLink>
              <FooterLink to="/">Haircut</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Navigate</FooterLinkTitle>
              <FooterLink to="about">About</FooterLink>
              <FooterLink to="discover">Discover</FooterLink>
              <FooterLink to="services">Services</FooterLink>
              <FooterLink to="book">Contact us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Gmail</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <ImgLogo src={logo} onClick={toggleHome} />
            <WebsiteRights>
              Selyn Make'em &copy; {new Date().getFullYear()} All rights
              reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/selynmakethem"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/hmuaselyn/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://mail.google.com/mail/?view=cm&source=mailto&to=sguilleno22@gmail.com"
                target="_blank"
                aria-label="Gmail"
              >
                <FaEnvelope />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
