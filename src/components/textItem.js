import React from "react";
import {
    Container,
    Box,
    Text,
  } from "@chakra-ui/react";
import {useTranslation} from "react-i18next";

function TextItem({about1 , wei}) {
  const {t, i18n} = useTranslation('common');
  const font20 = {lg:'20px', md:'16px', sm:'12px', base:'8px'};
  const font32 = {lg:'32px', md:'28px', base:'24px', sm:'24px'};
  console.log("t",t, "about", about1)
  return (
    <Text textAlign={"justify"} fontSize={font20}
    fontFamily={"Montserrat"} fontStyle={"normal"} fontWeight={wei==700 ? "bold" : "semibold"}
    
    lineHeight={"40px"} letterSpacing={"0.2px"} font-variant="small-caps"
    >{t(about1)}</Text>
  );
}

export default TextItem;
