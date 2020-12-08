import React from "react";
import { Navbar } from "../components/navbar";
import styled from "styled-components";
import Container from "../components/global/Layout/container";
import { MasterHead } from "../components/sections";
import SectionTwo from "../components/sections/SectionTwo";
import PricingSection from "../components/sections/PricingSection";
// import tw from "twin.macro";

const Index = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <MasterHead />
          <SectionTwo />
          <PricingSection />
        </Wrapper>
      </Container>
    </>
  );
};

export default Index;
// components

const Wrapper = styled.section``;
