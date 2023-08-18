import React from "react";
import {
    Container,
    Box,
    Text,
  } from "@chakra-ui/react";

function TextItem({about1 , wei}) {
   const font20 = {lg:'20px', md:'16px', sm:'12px', base:'8px'};
   const font32 = {lg:'32px', md:'28px', base:'24px', sm:'24px'};
   return (
        <Text textAlign={"justify"} fontSize={font20}
        fontFamily={"Montserrat"} fontStyle={"normal"} fontWeight={wei}
        lineHeight={"40px"} letterSpacing={"0.2px"} font-variant="small-caps"
        >{about1}</Text>
  );
}

export default TextItem;
