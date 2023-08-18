import React from "react";
import {
    Container,
    HStack,
    Link,
    Grid,
    Box,
    Flex,
    Spacer,
    VisuallyHidden,
    chakra,
    Image,
    Button,
    useColorModeValue,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    GridItem,
    Center,
    Text,
    SimpleGrid,
    space,
  } from "@chakra-ui/react";

import FullItem from "components/Direction/fullItem";

function Detail() {
  return (
    <Container maxW="1512px" py={"90px"}>
        <FullItem />
    </Container>
  );
}

export default Detail;
