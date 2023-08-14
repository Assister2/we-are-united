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
} from "@chakra-ui/react";
import "./banner.css";

function Navbar() {
    const bg = useColorModeValue("gray.50", "gray.900");
    return (
        <chakra.body bg={bg} w="100%" fontFamily={"Montserrat"} color="#001430">
            <Container maxW="container.md"
                        py={5}
                        align="center">
                <Box w="100%">
                    <Center w="77%"
                            paddingBottom={8}
                            paddingTop={8}
                            backgroundColor="darkblue"
                            color="white"
                            fontSize="22px"
                            fontWeight="700"
                            lineHeight="21px"
                            textTransform={"capitalize"}>
                        ВІЙНА РОСІЇ ПРОТИ УКРАЇНСЬКИХ ДІТЕЙ 
                    </Center>
                    <Grid templateColumns='repeat(30 , 1fr)' gap={4}>
                        <GridItem colStart={13}
                                colEnd={26}
                                paddingTop={4}
                                paddingBottom={4}
                                bg={"#616992"}
                                color="white"
                                marginLeft={10}
                                marginTop={-4}
                                fontSize="16px"
                                fontWeight="600"
                                lineHeight="21px"
                                textTransform={"capitalize"}>
                            СТАНОМ НА 01.06.2022
                        </GridItem >
                    </Grid>
                </Box>
                <Box borderWidth={1} borderLeft={0} borderRight={0} borderTop={0} borderColor="#00265c" >
                    <Box textAlign={"left"} 
                        marginTop={3}
                        marginBottom={3}>
                        ПОСТРАЖДАЛІ
                    </Box>
                    <Flex justify={"space-between"} paddingBottom={5}>
                        <Box w="29%"
                            backgroundColor="white"
                            paddingTop={2} >
                            <Flex w="30%"
                                justify={"flex-start"}
                                fontSize="33px">
                                487
                            </Flex>
                            <Flex w="50%"
                                justify={"flex-end"}
                                marginTop="-15px"
                                fontSize="12px"
                                paddingBottom={2}>
                                    дитини
                            </Flex>
                            <Center bg={bg}
                                    fontSize="16px"
                                    paddingTop={3}
                                    paddingBottom={3}>ЗАГИНУЛО</Center>
                        </Box>
                        <Box w="29%"
                            backgroundColor="white"
                            paddingTop={2} >
                            <Flex w="30%"
                                justify={"flex-start"}
                                fontSize="33px">
                                446
                            </Flex>
                            <Flex w="45%"
                                justify={"flex-end"}
                                marginTop="-15px"
                                fontSize="12px"
                                paddingBottom={2}>
                                ДІТЕЙ
                            </Flex>
                            <Center bg={bg}
                                    fontSize="16px"
                                    paddingTop={3}
                                    paddingBottom={3}>
                                        ПОРАНЕНО
                            </Center>
                        </Box>
                        <Box w="29%"
                            backgroundColor="white"
                            paddingTop={2} >
                            <Flex w="30%"
                                justify={"flex-start"}
                                fontSize="33px">
                                145
                            </Flex>
                            <Flex w="45%"
                                justify={"flex-end"}
                                marginTop="-15px"
                                fontSize="12px"
                                paddingBottom={2}>
                                    ДІТЕЙ
                            </Flex>
                            <Center bg={bg}
                                    fontSize="16px"
                                    paddingTop={3}
                                    paddingBottom={3}>
                                ЗНИКЛО БЕЗВІСТИ
                            </Center>
                        </Box>
                    </Flex>
                </Box>
                <Box>
                    <Box textAlign={"left"} 
                        marginTop={5}
                        marginBottom={3}>
                        ПОСТРАЖДАЛІ
                    </Box>
                    <Box>
                        <Box >
                            <Box textAlign={"left"} 
                                marginTop={3}
                                marginBottom={3}
                                fontSize="10px">
                                Бомбардування та обстріли цивільної інфраструктури
                            </Box>
                            <Box>
                                <Flex justify={"space-between"}>
                                    <Box w="93%" h={4} position={"relative"} backgroundColor="white">
                                        <Box w="84%" h={4} position={"absolute"} backgroundColor="#616992">
                                        
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
                                fontSize="10px">
                                Бомбардування та обстріли цивільної інфраструктури
                            </Box>
                            <Box>
                                <Flex justify={"space-between"}>
                                    <Box w="93%" h={4} position={"relative"} backgroundColor="white">
                                        <Box w="84%" h={4} position={"absolute"} backgroundColor="#616992">
                                        
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
                                fontSize="10px">
                                Бомбардування та обстріли цивільної інфраструктури
                            </Box>
                            <Box>
                                <Flex justify={"space-between"}>
                                    <Box w="93%" h={4} position={"relative"} backgroundColor="white">
                                        <Box w="84%" h={4} position={"absolute"} backgroundColor="#616992">
                                        
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
                                fontSize="10px">
                                Бомбардування та обстріли цивільної інфраструктури
                            </Box>
                            <Box>
                                <Flex justify={"space-between"}>
                                    <Box w="93%" h={4} position={"relative"} backgroundColor="white">
                                        <Box w="84%" h={4} position={"absolute"} backgroundColor="#616992">
                                        
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
  