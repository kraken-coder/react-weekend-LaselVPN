import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { HeadingLarge } from "../global/typography";
import Illus from "../../assets/masterhead.png";
import userLogo from "../../assets/user.png";
import locationLogo from "../../assets/location.png";
import serverLogo from "../../assets/Server.png";

const MasterHead = () => {
  return (
    <Container>
      <Wrapper>
        <HeadingWrapper>
          <HeadingLarge>Want anything to be easy with LaslesVPN.</HeadingLarge>
          <Text>
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </Text>
          <CTAButton>Get started</CTAButton>
        </HeadingWrapper>
        <IllustrationContainer>
          <Illustration src={Illus} />
        </IllustrationContainer>
      </Wrapper>
      <IconsContainer>
        <IconWrapper>
          <Icon src={userLogo} />
          <IconText>
            <strong>90+</strong>
            <p>Users</p>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <Icon src={locationLogo} />
          <IconText>
            <strong>30+</strong>
            <p>Locations</p>
          </IconText>
        </IconWrapper>
        <IconWrapper>
          <Icon src={serverLogo} />
          <IconText>
            <strong>50+</strong>
            <p>Servers</p>
          </IconText>
        </IconWrapper>
      </IconsContainer>
    </Container>
  );
};

const Wrapper = styled.div`
  ${tw`flex justify-between space-x-6  items-center`}
`;

const Container = styled.section`
  ${tw`mt-6`}
`;
const Illustration = styled.img``;
const HeadingWrapper = styled.div`
  ${tw`w-1/2 flex flex-col space-y-2`}
`;
const IllustrationContainer = styled.div`
  ${tw`w-1/2`}
`;

const Text = styled.p`
  ${tw`text-xs text-blue-900`}
`;

const CTAButton = styled.button`
  ${tw`px-4 py-2 hover:border hover:border-solid  hover:border-red-600 rounded-md text-sm   text-white hover:bg-transparent  bg-red-500 hover:text-red-600 w-32 shadow-none cursor-pointer shadow-2xl border-none outline-none`}
`;

const IconsContainer = styled.div`
  ${tw`max-w-3xl my-8 bg-white mx-auto flex flex-row justify-between  items-center shadow-2xl px-7 py-8`}
`;
const IconWrapper = styled.div`
  ${tw`flex flex-row space-x-3 items-center  border-r-4  border-red-600`}
`;
const Icon = styled.img`
  ${tw`w-11 h-11 mb-0`}
`;

const IconText = styled.div`
  ${tw`flex flex-col justify-start`}
  p {
    ${tw`text-sm text-gray-500 mb-0`}
  }
  strong {
    ${tw`font-bold text-sm text-gray-700`}
  }
`;

export default MasterHead;
