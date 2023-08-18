import React from "react";

import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import AboutItem1 from "components/About/item";
import AboutItem2 from "components/About/item2";
import AboutItem3 from "components/About/item3";
import AboutItem4 from "components/About/item4";
import item from "components/Direction/item";
function About() {

  return (
    <Container maxW="1512px" py={4}>
      <AboutItem4 />
    </Container>
  );
}

export default About;
