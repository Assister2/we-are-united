import React from "react";
import {
    Container,
    HStack,
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
import {Route, Link, Routes, useParams} from 'react-router-dom';
import FullItem from "components/Direction/fullItem";

function Detail({}) {
  const params = useParams();
  console.log("ID",params.id);
  return (
    <Container maxW="1512px" py={"90px"}>
        <FullItem index={params.id}/>
    </Container>
  );
}

export default Detail;
