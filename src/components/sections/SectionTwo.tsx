import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import illustration from "../../assets/section2.png";
import check from "../../assets/check.png";

const SectionTwo = () => {
  return (
    <Wrapper>
      <Container>
        <ImgContainer>
          <Image src={illustration} />
        </ImgContainer>
        <TextContainer>
          <h2>We Provide Many Features You Can Use</h2>
          <p>
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <CheckListContainer>
            <Checklist>
              <img src={check} />
              <p>Powerfull online protection.</p>
            </Checklist>
            <Checklist>
              <img src={check} />
              <p>Powerfull online protection.</p>
            </Checklist>
            <Checklist>
              <img src={check} />
              <p>Powerfull online protection.</p>
            </Checklist>
          </CheckListContainer>
        </TextContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${tw` max-w-3xl mx-auto mt-36`}
`;

const Container = styled.div`
  ${tw`flex flex-row justify-between items-start`}
`;

const ImgContainer = styled.div`
  ${tw`w-80 flex-none`}
`;

const Image = styled.img`
  ${tw`w-full`}
`;

const TextContainer = styled.div`
  ${tw`flex flex-col space-y-2 items-start w-80 space-y-6`}

  p {
    ${tw`text-xs text-blue-900`}
  }

  h2 {
    ${tw`text-blue-900 font-bold text-3xl leading-10 mb-0`}
  }
`;

const Checklist = styled.div`
  ${tw` flex flex-row justify-between`}
  img {
    ${tw`flex-none mb-0`}
  }

  p {
    ${tw`text-xs text-blue-900 mb-0 `}
  }
`;

const CheckListContainer = styled.div`
  ${tw`flex flex-col space-y-2 `}
`;
export default SectionTwo;
