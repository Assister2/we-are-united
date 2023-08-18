import React from "react";
import {
    Container,
    Box,
    Text,
  } from "@chakra-ui/react";

function TextItem2({about1, about2}) {
   const font20 = {lg:'20px', md:'16px', sm:'12px', base:'8px'};
   const font32 = {lg:'32px', md:'28px', base:'24px', sm:'24px'};
   return (
      <>
        <Text textAlign={"left"} fontSize={font20}
        fontFamily={"Montserrat"} fontStyle={"normal"} fontWeight={700}
        lineHeight={"40px"} letterSpacing={"0.2px"} font-variant="small-caps"
        mb={5}
        >{about1}</Text>
        <Text textAlign={"justify"} fontSize={font20}
        fontFamily={"Montserrat"} fontStyle={"normal"} fontWeight={600}
        lineHeight={"40px"} letterSpacing={"0.2px"} font-variant="small-caps">
        {about2}
        </Text>
      </>
  );
}

export default TextItem2;
