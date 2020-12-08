import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import tw from "twin.macro";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Heading>Hi from the second page</Heading>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

const Heading = styled.h1`
  ${tw`
text-5xl text-regal-blue
`}
`;

export default SecondPage;
