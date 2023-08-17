import React from "react";

import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import BannerItem from "components/bannerItem";
import Direction from "components/Direction";
import About from "components/About";
import Banner from "components/Banner"
function Meeting() {
  return (
    <Container maxW="1512px">
        <Banner />
        <Direction />
        <About />
    </Container>
  );
}

export default Meeting;
