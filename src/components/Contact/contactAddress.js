import React from "react";
import { Link as RouterLink } from "react-router-dom";
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
  Icon,
  VStack,
} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";
import { HamburgerIcon, CopyIcon, ChevronDownIcon } from "@chakra-ui/icons";

function ContactAddress( color, type) {
    const {t, i18n} = useTranslation('common');
    const cardBg = useColorModeValue("gray.50", "gray.900");
    return (
        <Box color={"#001430"} width={"241px"} textAlign={"left"} >
            <Box fontSize={{lg:'32px', md:'24px', sm:'16px', base:'12px'}}
              fontStyle={"normal"} fontWeight={700} lineHeight={"21px"}
              textTransform={"uppercase"} mb={"30px"}>
              {t('CONTACTS')}
            </Box>
            <Box mt={"17px"}>
              <VStack alignItems={"start"} textAlign={"left"} gap={4}>
                <Box  textAlign={"left"}>
                  +380 99 999 99 99
                </Box>
                <Box  textAlign={"left"}>
                  myyedini@gmail.com
                </Box>
                <Box textAlign={"left"}>
                  м. Київ
                </Box>  
              </VStack>
            </Box>
        </Box>
    );
}

export default ContactAddress;