import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import logo from "../../assets/small_logo.png";
import { OutlinedButton } from "../global/buttons";
import { Container } from "../global/Layout";
import HeadingSmall from "../global/typography/HeadingSmall";
const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Inner>
          <Branding>
            <Logo src={logo} alt="logo" />
            <HeadingSmall>
              Lasel<span>VPN</span>
            </HeadingSmall>
          </Branding>
          <Links>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Features</Link>
            <Link href="#">Help</Link>
          </Links>
          <CTA>
            <LinkCTA href="#">sign up</LinkCTA>
            <OutlinedButton>Sign up</OutlinedButton>
          </CTA>
        </Inner>
      </Container>
    </Wrapper>
  );
};

// components
const Wrapper = styled.nav`
  ${tw`pt-6 px-5`}
`;

const Inner = styled.div`
  ${tw`flex justify-between items-start`}
`;

const Branding = styled.div`
  ${tw`flex items-center space-x-1  `}
`;

const Links = styled.div`
  ${tw` flex items-center space-x-5 justify-between `}
`;
const CTA = styled.div`
  ${tw`flex space-x-3 items-center`}
`;

const Logo = styled.img`
  ${tw`w-8 h-8 `}
`;

const Link = styled.a`
  ${tw`text-gray-800 text-sm  border-b-2 border-gray-800 no-underline hover:underline `}
`;

const LinkCTA = styled.a`
  ${tw`text-gray-800 text-sm  font-bold no-underline `}
`;
export default Navbar;
