import React, { ReactNode } from "react";
import styled from "styled-components";
import tw from "twin.macro";

declare interface ILink {
  flex: string;
  children: ReactNode;
}
const Link: React.FC = ({ children, flex }: ILink) => {
  return <LinkComponent className={flex ? flex : ""}>{children}</LinkComponent>;
};

const LinkComponent = styled.a`
  ${tw`text-gray-400 text-sm  border-b-2 border-gray-400`}
`;

export default Link;
