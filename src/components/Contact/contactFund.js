import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {useTranslation} from "react-i18next";
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
} from "@chakra-ui/react";
import { HamburgerIcon, CopyIcon, ChevronDownIcon } from "@chakra-ui/icons";

function ContactFund( color, type) {
    const {t, i18n} = useTranslation('common');
    const cardBg = useColorModeValue("gray.50", "gray.900");
    return (
        <Box color={"#001430"} width={"50%"} textAlign={"center"} >
            <Center fontSize={{lg:'32px', md:'24px', sm:'20px', base:'16px'}}
                fontWeight={700} lineHeight={"21px"} letterSpacing={"0.2px"}
                textTransform={"uppercase"} pb={"25px"}>
                {t('Документи фонду')}
            </Center>
            <Flex justify={"space-between"} py={"20px"}
             fontSize={{lg:'20px', md:'16px', sm:'12px', base:'8px'}}>
                <Box width={"20%"}>
                    <Center textAlign={"center"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="95" height="95" viewBox="0 0 95 95" fill="none">
                            <path d="M57.6587 0L83.125 25.4663V95H5.9375V0H57.6587ZM59.375 10.1587V23.75H72.9663L59.375 10.1587ZM11.875 89.0625H77.1875V29.6875H53.4375V5.9375H11.875V89.0625ZM23.75 47.5V41.5625H65.3125V47.5H23.75ZM23.75 59.375V53.4375H65.3125V59.375H23.75ZM23.75 71.25V65.3125H65.3125V71.25H23.75Z" fill="#001430"/>
                        </svg>
                    </Center>
                    <Text textAlign={"center"}>
                        {t('Статут')}
                    </Text>
                </Box>
                <Box width={"25%"}>
                    <Center textAlign={"center"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="95" height="95" viewBox="0 0 95 95" fill="none">
                            <path d="M57.6587 0L83.125 25.4663V95H5.9375V0H57.6587ZM59.375 10.1587V23.75H72.9663L59.375 10.1587ZM11.875 89.0625H77.1875V29.6875H53.4375V5.9375H11.875V89.0625ZM23.75 47.5V41.5625H65.3125V47.5H23.75ZM23.75 59.375V53.4375H65.3125V59.375H23.75ZM23.75 71.25V65.3125H65.3125V71.25H23.75Z" fill="#001430"/>
                        </svg>
                    </Center>
                    <Text textAlign={"center"}>
                        {t('Виписка з ЄДР')}
                    </Text>
                </Box>
                <Box width={"20%"}>
                    <Center textAlign={"center"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="95" height="95" viewBox="0 0 95 95" fill="none">
                            <path d="M57.6587 0L83.125 25.4663V95H5.9375V0H57.6587ZM59.375 10.1587V23.75H72.9663L59.375 10.1587ZM11.875 89.0625H77.1875V29.6875H53.4375V5.9375H11.875V89.0625ZM23.75 47.5V41.5625H65.3125V47.5H23.75ZM23.75 59.375V53.4375H65.3125V59.375H23.75ZM23.75 71.25V65.3125H65.3125V71.25H23.75Z" fill="#001430"/>
                        </svg>
                    </Center>
                    <Text textAlign={"center"}>
                        {t('Протокол')}
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
}

export default ContactFund;