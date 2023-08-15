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
  space,
  extendTheme,
  useBreakpointValue,
} from "@chakra-ui/react";
import "./banner.css";

function Navbar() {
    const bg = useColorModeValue("gray.50", "gray.900");
    const isMobile = useBreakpointValue({ base: true, md: false });
    const breakpoints = {
        sm: '320px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1512px',
      }
    const theme = extendTheme({ breakpoints })
    return (
        <chakra.body bg="#f2f6fa" w="100%" maxW="1512px" fontFamily={"Montserrat"} color="#001430">
            <Container maxW="1512px"
                        minW="320px"
                        py={5}
                        align="center">
                <Box w="100%">
                    <Center 
                            width="70%"
                            paddingBottom={8}
                            paddingTop={8}
                            backgroundColor="#001430"
                            color="white"
                            fontSize={{base:'20px',md:'30px',lg:'36px'}}
                            fontWeight="700"
                            letterSpacing="0.3px"
                            lineHeight="21px"
                            textTransform={"capitalize"}>
                        ВІЙНА РОСІЇ ПРОТИ УКРАЇНСЬКИХ ДІТЕЙ 
                    </Center>
                    <Grid templateColumns='repeat(30 , 1fr)' gap={4}>
                        <GridItem colStart={{lg:13, md:13, sm:13, base:7}}
                                colEnd={{lg:26, md:26, base:20, sm:24}}
                                paddingTop={4}
                                paddingBottom={4}
                                bg={"#616992"}
                                color="white"
                                marginLeft={10}
                                marginTop={-4}
                                fontSize={{base:'16px',md:'24px',lg:'30px'}}
                                fontWeight="600"
                                lineHeight="21px"
                                textTransform={"capitalize"}>
                            СТАНОМ НА 01.06.2022
                        </GridItem >
                    </Grid>
                </Box>
                <Box maxW="1341px" borderWidth={1} borderLeft={0} borderRight={0} borderTop={0} borderColor="#00265c" >
                    <Box textAlign={"left"} 
                        marginTop={10}
                        marginBottom={10}
                        fontSize={{lg:'32px', md:'28px', base:'24px', sm:'24px'}}
                        fontWeight={600}
                        lineHeight="21px"
                        letterSpacing="-0.3px"
                        textTransform={"capitalize"}>
                        ПОСТРАЖДАЛІ
                    </Box>
                    <Flex justify={"space-between"} paddingBottom={10}>
                        <Box w="28%"
                            backgroundColor="white"
                            paddingTop={2} >
                            <Flex w={{lg:'40%', md:'60%', sm:'60%', base:'80%'}}
                                justify={{lg:'flex-start', md:'flex-start', sm:'flex-start', base:'center'}}
                                fontSize={{lg:'64px', md:'48px', base:'32px', sm:'32px'}}
                                >
                                487
                            </Flex>
                            <Flex w={{lg:'40%', md:'60%', sm:'60%', base:'80%'}}
                                justify={{lg:'flex-end', md:'flex-end', sm:'flex-end', base:'center'}}
                                marginTop={{lg:'-30px',md:'-24px',base:'-24px', sm:'-20px'}}
                                fontSize={{lg:'24px', md:'20px', base:'20px', sm:'16px'}}
                                paddingBottom={2}>
                                    дитини
                            </Flex>
                            <Center bg="#f2f6fa"
                                    fontSize={{lg:'30px', md:'24px', base:'24px', sm:'16px'}}
                                    paddingTop={3}
                                    paddingBottom={3}>ЗАГИНУЛО</Center>
                        </Box>
                        <Box w="28%"
                            backgroundColor="white"
                            paddingTop={2} >
                            <Flex w={{lg:'40%', md:'60%', sm:'60%', base:'80%'}}
                                justify={{lg:'flex-start', md:'flex-start', sm:'flex-start', base:'center'}}
                                fontSize={{lg:'64px', md:'48px', base:'32px', sm:'32px'}}
                                >
                                446
                            </Flex>
                            <Flex w={{lg:'40%', md:'60%', sm:'60%', base:'80%'}}
                                justify={{lg:'flex-end', md:'flex-end', sm:'flex-end', base:'center'}}
                                marginTop={{lg:'-30px',md:'-24px',base:'-24px', sm:'-20px'}}
                                fontSize={{lg:'24px', md:'20px', base:'20px', sm:'16px'}}
                                paddingBottom={2}>
                                    ДІТЕЙ
                            </Flex>
                            <Center bg="#f2f6fa"
                                    fontSize={{lg:'30px', md:'24px', base:'24px', sm:'16px'}}
                                    paddingTop={3}
                                    paddingBottom={3}>ПОРАНЕНО</Center>
                        </Box>
                        <Box w="28%"
                            backgroundColor="white"
                            paddingTop={2} >
                            <Flex w={{lg:'40%', md:'60%', sm:'60%', base:'80%'}}
                                justify={{lg:'flex-start', md:'flex-start', sm:'flex-start', base:'center'}}
                                fontSize={{lg:'64px', md:'48px', base:'32px', sm:'32px'}}
                                >
                                145
                            </Flex>
                            <Flex w={{lg:'40%', md:'60%', sm:'60%', base:'80%'}}
                                justify={{lg:'flex-end', md:'flex-end', sm:'flex-end', base:'center'}}
                                marginTop={{lg:'-30px',md:'-24px',base:'-24px', sm:'-20px'}}
                                fontSize={{lg:'24px', md:'20px', base:'20px', sm:'16px'}}
                                paddingBottom={2}>
                                    ДІТЕЙ
                            </Flex>
                            <Center bg="#f2f6fa"
                                    fontSize={{lg:'30px', md:'24px', base:'24px', sm:'16px'}}
                                    paddingTop={3}
                                    paddingBottom={3}>ЗНИКЛО БЕЗВІСТИ</Center>
                        </Box>
                    </Flex>
                </Box>
                <Box maxW="1341px">
                    <Box textAlign={"left"} 
                        marginTop={10}
                        marginBottom={5}
                        fontSize={{lg:'32px', md:'28px', base:'24px', sm:'24px'}}
                        fontWeight={600}
                        lineHeight="21px"
                        letterSpacing="-0.3px"
                        textTransform={"capitalize"}>
                        ПОСТРАЖДАЛІ
                    </Box>
                    <Box>
                        <Box >
                            <Box textAlign={"left"} 
                                marginTop={3}
                                marginBottom={3}
                                fontSize={{lg:'16px', md:'16px', sm:'12px', base:'10px'}}>
                                Бомбардування та обстріли цивільної інфраструктури
                            </Box>
                            <Box>
                                <Flex justify={"space-between"}>
                                    <Box w="93%" h={{lg:'4', md:'4', sm:'3', base:'3'}} position={"relative"} backgroundColor="white">
                                        <Box w="84%" h={{lg:'4', md:'4', sm:'3', base:'3'}} position={"absolute"} backgroundColor="#616992">
                                        </Box>
                                    </Box>
                                    <Center w="5%" h={4}>
                                        160
                                    </Center>
                                </Flex>
                            </Box>
                        </Box>
                        <Box >
                            <Box textAlign={"left"} 
                                marginTop={3}
                                marginBottom={3}
                                fontSize={{lg:'16px', md:'16px', sm:'12px', base:'10px'}}>
                                Бомбардування та обстріли цивільної інфраструктури
                            </Box>
                            <Box>
                                <Flex justify={"space-between"}>
                                    <Box w="93%" h={{lg:'4', md:'4', sm:'3', base:'3'}} position={"relative"} backgroundColor="white">
                                        <Box w="84%" h={{lg:'4', md:'4', sm:'3', base:'3'}} position={"absolute"} backgroundColor="#616992">
                                        </Box>
                                    </Box>
                                    <Center w="5%" h={4}>
                                        160
                                    </Center>
                                </Flex>
                            </Box>
                        </Box>
                        <Box >
                            <Box textAlign={"left"} 
                                marginTop={3}
                                marginBottom={3}
                                fontSize={{lg:'16px', md:'16px', sm:'12px', base:'10px'}}>
                                Бомбардування та обстріли цивільної інфраструктури
                            </Box>
                            <Box>
                                <Flex justify={"space-between"}>
                                    <Box w="93%" h={{lg:'4', md:'4', sm:'3', base:'3'}} position={"relative"} backgroundColor="white">
                                        <Box w="84%" h={{lg:'4', md:'4', sm:'3', base:'3'}} position={"absolute"} backgroundColor="#616992">
                                        </Box>
                                    </Box>
                                    <Center w="5%" h={4}>
                                        160
                                    </Center>
                                </Flex>
                            </Box>
                        </Box>
                        <Box >
                            <Box textAlign={"left"} 
                                marginTop={3}
                                marginBottom={3}
                                fontSize={{lg:'16px', md:'16px', sm:'12px', base:'10px'}}>
                                Бомбардування та обстріли цивільної інфраструктури
                            </Box>
                            <Box>
                                <Flex justify={"space-between"}>
                                    <Box w="93%" h={{lg:'4', md:'4', sm:'3', base:'3'}} position={"relative"} backgroundColor="white">
                                        <Box w="84%" h={{lg:'4', md:'4', sm:'3', base:'3'}} position={"absolute"} backgroundColor="#616992">
                                        </Box>
                                    </Box>
                                    <Center w="5%" h={4}>
                                        160
                                    </Center>
                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </chakra.body>
    );
}

export default Navbar;
  