import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container: React.FC = ({ children }) => {
  return <ContainerComponent>{children}</ContainerComponent>;
};

export default Container;

const ContainerComponent = styled.div`
  ${tw`container mx-auto sm:px-4 md:px-32`}
`;
