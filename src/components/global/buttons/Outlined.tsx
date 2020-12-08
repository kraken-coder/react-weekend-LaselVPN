import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Outlined: React.FC = ({ children }) => {
  return <Wrapper> {children}</Wrapper>;
};

const Wrapper = styled.button`
  ${tw`px-6 py-1 border border-solid  border-red-600 rounded-full text-xs outline-none  text-red-600 bg-transparent focus:outline-none hover:bg-red-500 hover:text-white shadow-none`}
`;
export default Outlined;
