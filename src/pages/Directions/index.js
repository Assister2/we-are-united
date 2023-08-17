import React from "react";

import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import BannerItem from "components/bannerItem";
import Direction from "components/Direction";
import About from "components/About";
function Directions() {
  return (
    <Container maxW="1512px">
        <BannerItem />
        <Direction />
        <About />
    </Container>
  );
}

export default Directions;
