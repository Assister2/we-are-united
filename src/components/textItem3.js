import React from "react";
import {
  Container,
  Box,
  Text,
} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";

function TextItem3({about1, about2, about3}) {
  const {t, i18n} = useTranslation('common');
   const font20 = {lg:'20px', md:'16px', sm:'12px', base:'8px'};
   const font32 = {lg:'32px', md:'28px', base:'24px', sm:'24px'};
   return (
      <>
        <Text textAlign={"left"} fontSize={font20}
        fontFamily={"Montserrat"} fontStyle={"normal"} fontWeight={700}
        lineHeight={"40px"} letterSpacing={"0.2px"} font-variant="small-caps"
        mb={5}
        >{t(about1)}</Text>
        <Text textAlign={"justify"} fontSize={font20}
        fontFamily={"Montserrat"} fontStyle={"normal"} fontWeight={600} mb={5}
        lineHeight={"40px"} letterSpacing={"0.2px"} font-variant="small-caps">
        {t(about2)}
        </Text>
        <Text textAlign={"justify"} fontSize={font20}
        fontFamily={"Montserrat"} fontStyle={"normal"} fontWeight={600}
        lineHeight={"40px"} letterSpacing={"0.2px"} font-variant="small-caps">
        {t(about3)}
        </Text>
      </>
  );
}

export default TextItem3;
