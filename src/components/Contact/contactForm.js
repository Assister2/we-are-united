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
  VStack,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, CopyIcon, ChevronDownIcon } from "@chakra-ui/icons";

function ContactForm( color, type) {
    const {t, i18n} = useTranslation('common');
    const cardBg = useColorModeValue("gray.50", "gray.900");
    return (
        <Box color={"#001430"} width={"742px"} py={"25px"} borderColor={"#001430"} borderWidth={1} borderRadius={0}>
            <Box textAlign={"-webkit-right"} pr={"25px"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.4913 9.40793C27.616 9.28337 27.7149 9.13547 27.7825 8.97267C27.85 8.80987 27.8849 8.63535 27.885 8.45909C27.8851 8.28283 27.8505 8.10827 27.7831 7.94539C27.7158 7.7825 27.617 7.63448 27.4924 7.50977C27.3679 7.38505 27.22 7.2861 27.0572 7.21854C26.8944 7.15099 26.7199 7.11617 26.5436 7.11606C26.3673 7.11595 26.1928 7.15056 26.0299 7.21791C25.867 7.28527 25.719 7.38404 25.5943 7.5086L17.4999 15.6029L9.40793 7.5086C9.15607 7.25673 8.81446 7.11523 8.45827 7.11523C8.10207 7.11523 7.76047 7.25673 7.5086 7.5086C7.25673 7.76047 7.11523 8.10207 7.11523 8.45827C7.11523 8.81446 7.25673 9.15607 7.5086 9.40793L15.6029 17.4999L7.5086 25.5919C7.38389 25.7166 7.28496 25.8647 7.21747 26.0276C7.14997 26.1906 7.11523 26.3652 7.11523 26.5416C7.11523 26.718 7.14997 26.8926 7.21747 27.0556C7.28496 27.2185 7.38389 27.3666 7.5086 27.4913C7.76047 27.7431 8.10207 27.8846 8.45827 27.8846C8.63464 27.8846 8.80928 27.8499 8.97222 27.7824C9.13517 27.7149 9.28322 27.616 9.40793 27.4913L17.4999 19.3969L25.5943 27.4913C25.8461 27.7428 26.1876 27.884 26.5436 27.8838C26.8996 27.8836 27.2409 27.742 27.4924 27.4901C27.744 27.2382 27.8852 26.8967 27.885 26.5408C27.8848 26.1848 27.7431 25.8435 27.4913 25.5919L19.3969 17.4999L27.4913 9.40793Z" fill="#001430"/>
                </svg>
            </Box>
            <Center px={"78px"} mt={"78px"} mb={"18px"} fontSize={{lg:'30px', md:'24px', sm:'20px', base:'16px'}}
                fontFamily={"Rutenia"} fontWeight={400} textAlign={"center"} lineHeight={10} >
                {t('To build the future together')}
            </Center>
            <Center px={"78px"} mb={"48px"} mt={"18px"} fontSize={{lg:'30px', md:'24px', sm:'20px', base:'16px'}}
                fontFamily={"Rutenia"} textAlign={"center"} fontWeight={400} lineHeight={10} >
                {t('It is worth being united in a common cause')}
            </Center>
            <Box  px={"68px"} my={"20px"} >
                <VStack textAlign={"right"} gap={"20px"}>
                    <Input py={"33px"} pl={"30px"} borderColor={"#001430"} borderWidth={1} borderRadius={0} placeholder={t('Name')}  />
                    <Input py={"33px"} pl={"30px"} borderColor={"#001430"} borderWidth={1} borderRadius={0} placeholder={t('Phone number')}  />
                    <Input py={"33px"} pl={"30px"} borderColor={"#001430"} borderWidth={1} borderRadius={0} placeholder={t('Email')}  />
                    <Input py={"33px"} pl={"30px"} borderColor={"#001430"} borderWidth={1} borderRadius={0} placeholder={t('What city do you live in?')}  />
                    <Input pt={"33px"} pb={"134px"} pl={"30px"} borderColor={"#001430"} borderWidth={1} borderRadius={0} placeholder={t('How could and would you like to help?')}  />    
                </VStack>
            </Box>
            <Center py={"20px"}>
                <Button backgroundColor="orange" alignItems="center" borderRadius={0}>
                    <Box fontSize="20px" fontWeight={600} lineHeight="30px">
                        {t('Send')}
                    </Box>
                </Button>
            </Center> 
        </Box>
    );
}

export default ContactForm ;