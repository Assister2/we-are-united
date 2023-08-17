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
import ContactForm from "components/Contact/contactForm";
import ContactAddress from "components/Contact/contactAddress";
import ContactFund from "components/Contact/contactFund";
function Contacts() {
  return (
    <Container maxW="1512px" px={"171px"} py={"90px"}>
        <Box position={"relative"} height={"1004px"}>
            <Box top={0} left={0} position={"absolute"}>
                <ContactAddress />
            </Box>
            <Box top={0} right={0} position={"absolute"}>
                <ContactForm />
            </Box>
        </Box>
        <Center>
            <ContactFund />
        </Center>
        
    </Container>
  );
}

export default Contacts;
