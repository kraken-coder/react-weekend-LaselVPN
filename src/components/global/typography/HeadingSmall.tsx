import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const HeadingSmall: React.FC = ({ children }) => {
  return <HeadingMedium>{children}</HeadingMedium>;
};

const HeadingMedium = styled.h3`
  ${tw`text-base`}
`;

export default HeadingSmall;
