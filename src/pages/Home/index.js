import React from "react";

import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import Main from "../Directions"


function Home() {
  return (
    <Container maxW="1512px" py={4}>
      <Main />
    </Container>
  );
}

export default Home;
