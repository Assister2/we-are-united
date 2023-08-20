import React from "react";
import {Route, Link, Routes, useParams} from 'react-router-dom';

import { Container, Heading, Switch, Text, VStack } from "@chakra-ui/react";
import AboutItem1 from "components/About/item";
import AboutItem2 from "components/About/item2";
import AboutItem3 from "components/About/item3";
import AboutItem4 from "components/About/item4";
function About({}) {
  const params = useParams();
  console.log("ID", params.id);
  let component;
  switch(params.id) {
    case '1':
      component = <AboutItem1 />
    break
    case '2':
      component = <AboutItem2 />
    break
    case '3':
      component = <AboutItem3 />
    break
    case '4':
      component = <AboutItem4 />
    break
  }
  console.log("COMPONENT",component)
  return (
    <Container maxW="1512px" py={4}>
      {component}
    </Container>
  );
  // return component;
}

export default About;
