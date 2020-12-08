import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const HeadingLarge: React.FC = ({ children }) => {
  return <HeadingMedium>{children}</HeadingMedium>;
};

const HeadingMedium = styled.h1`
  ${tw`text-4xl antialiased text-blue-900`}
`;

export default HeadingLarge;
