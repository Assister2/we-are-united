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
import BannerItem from "components/bannerItem";
import Direction from "components/Direction";
import About from "components/About";
import Banner from "components/Banner"
import fullItem from "components/Direction/fullItem";
import PayItem from "components/payItem";

function Payment() {
  return (
    <Container maxW="1512px" px={"171px"} py={"90px"}>
    <PayItem />
    </Container>
  );
}

export default Payment;
