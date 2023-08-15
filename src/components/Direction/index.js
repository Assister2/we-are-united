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
} from "@chakra-ui/react";

function Direction() {
    const bg = useColorModeValue("white.50 ", "white.900");
    const cardBg = useColorModeValue("gray.50", "gray.900");
    return (
        <chakra.body bg={bg}  maxWidth="1512px" fontFamily={"Montserrat"} color="#001430">
            <Container maxW="1170px"
                        py={5}
                        align="center">
                <Box  textAlign={"left"} 
                        marginTop={5}
                        marginBottom={3}
                        w="100%"
                        fontSize={{lg:'24px', md:'22px', sm:'18px', base:'16px'}}>
                        напрямки
                </Box>
                <Box w="100%">
                     <SimpleGrid columns={2} spacing={8}>
                        <Box bg={cardBg}>
                            <Image src="../../assets/item1.png" alt='item1' />
                            <Box pl={16} pr={16}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'32px', md:'28px', base:'24px', sm:'24px'}}>
                                    Дрони, “Очі в Небі”
                                </Box>
                                <Flex justify={"space-between"} marginTop={4} marginBottom={4}>
                                <Button backgroundColor="orange" fontSize={{lg:'20px', md:'20px', sm:'16px', base:'12px'}} alignItems="center" borderRadius={0}>
                                    допомогти
                                </Button>
                                <Button backgroundColor="white"  fontSize={{lg:'20px', md:'20px', sm:'16px', base:'12px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                    допомогти
                                </Button>
                                </Flex>
                            </Box>
                            
                        </Box>
                        <Box bg={cardBg}>
                            <Image src="../../assets/item1.png" alt='item1' />
                            <Box pl={16} pr={16}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'32px', md:'28px', base:'24px', sm:'24px'}}>
                                    Дрони, “Очі в Небі”
                                </Box>
                                <Flex justify={"space-between"} marginTop={4} marginBottom={4}>
                                <Button backgroundColor="orange" fontSize={{lg:'20px', md:'20px', sm:'16px', base:'12px'}} alignItems="center" borderRadius={0}>
                                    допомогти
                                </Button>
                                <Button backgroundColor="white"  fontSize={{lg:'20px', md:'20px', sm:'16px', base:'12px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                    допомогти
                                </Button>
                                </Flex>
                            </Box>
                            
                        </Box>
                        <Box bg={cardBg}>
                            <Image src="../../assets/item1.png" alt='item1' />
                            <Box pl={16} pr={16}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'32px', md:'28px', base:'24px', sm:'24px'}}>
                                    Дрони, “Очі в Небі”
                                </Box>
                                <Flex justify={"space-between"} marginTop={4} marginBottom={4}>
                                <Button backgroundColor="orange" fontSize={{lg:'20px', md:'20px', sm:'16px', base:'12px'}} alignItems="center" borderRadius={0}>
                                    допомогти
                                </Button>
                                <Button backgroundColor="white"  fontSize={{lg:'20px', md:'20px', sm:'16px', base:'12px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                    допомогти
                                </Button>
                                </Flex>
                            </Box>
                            
                        </Box>
                        <Box bg={cardBg}>
                            <Image src="../../assets/item1.png" alt='item1' />
                            <Box pl={16} pr={16}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'32px', md:'28px', base:'24px', sm:'24px'}}>
                                    Дрони, “Очі в Небі”
                                </Box>
                                <Flex justify={"space-between"} marginTop={4} marginBottom={4}>
                                <Button backgroundColor="orange" fontSize={{lg:'20px', md:'20px', sm:'16px', base:'12px'}} alignItems="center" borderRadius={0}>
                                    допомогти
                                </Button>
                                <Button backgroundColor="white"  fontSize={{lg:'20px', md:'20px', sm:'16px', base:'12px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                    допомогти
                                </Button>
                                </Flex>
                            </Box>
                            
                        </Box>
                     </SimpleGrid>
                </Box>
                <Box  textAlign={"left"} 
                        marginTop={5}
                        marginBottom={3}
                        w="100%"
                        fontSize="18px">
                        актуальні проєкти
                    <SimpleGrid columns={3} spacing="30px">
                        <Box bg={cardBg}>
                            <Image src="../../assets/item1.png" alt='item1' />
                            <Box pl={12} pr={12}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'20px', md:'20px', sm:'14px', base:'12px'}}>
                                    Назва проекту
                                </Box>
                                <Flex justify={"space-between"} marginTop={4} marginBottom={4}>
                                    <Button backgroundColor="orange" fontSize={{lg:'14px', md:'14px', sm:'12px', base:'10px'}} alignItems="center" borderRadius={0}>
                                        допомогти
                                    </Button>
                                    <Button backgroundColor="white"  fontSize={{lg:'14px', md:'14px', sm:'12px', base:'10px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                        переглянути
                                    </Button>
                                </Flex>
                            </Box>
                            
                        </Box>
                        <Box bg={cardBg}>
                            <Image src="../../assets/item1.png" alt='item1' />
                            <Box pl={12} pr={12}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'20px', md:'20px', sm:'14px', base:'12px'}}>
                                    Назва проекту
                                </Box>
                                <Flex justify={"space-between"} marginTop={4} marginBottom={4}>
                                    <Button backgroundColor="orange" fontSize={{lg:'14px', md:'14px', sm:'12px', base:'10px'}} alignItems="center" borderRadius={0}>
                                        допомогти
                                    </Button>
                                    <Button backgroundColor="white"  fontSize={{lg:'14px', md:'14px', sm:'12px', base:'10px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                        переглянути
                                    </Button>
                                </Flex>
                            </Box>
                            
                        </Box>
                        <Box bg={cardBg}>
                            <Image src="../../assets/item1.png" alt='item1' />
                            <Box pl={12} pr={12}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'20px', md:'20px', sm:'14px', base:'12px'}}>
                                    Назва проекту
                                </Box>
                                <Flex justify={"space-between"} marginTop={4} marginBottom={4}>
                                    <Button backgroundColor="orange" fontSize={{lg:'14px', md:'14px', sm:'12px', base:'10px'}} alignItems="center" borderRadius={0}>
                                        допомогти
                                    </Button>
                                    <Button backgroundColor="white"  fontSize={{lg:'14px', md:'14px', sm:'12px', base:'10px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                        переглянути
                                    </Button>
                                </Flex>
                            </Box>
                            
                        </Box>
                    </SimpleGrid>
                </Box>
                <Box  textAlign={"left"} 
                        marginTop={5}
                        marginBottom={3}
                        w="100%"
                        fontSize="18px">
                        виконані проєкти
                    <SimpleGrid columns={3} spacing="30px">
                        <Box bg={cardBg}>
                            <Image src="../../assets/item1.png" alt='item1' />
                            <Box pl={12} pr={12}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'20px', md:'20px', sm:'14px', base:'12px'}}>
                                    Назва проекту
                                </Box>
                                <Box textAlign={"right"}>
                                    <Button backgroundColor="white" marginBottom={4} fontSize={{lg:'14px', md:'14px', sm:'12px', base:'10px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                        переглянути
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box bg={cardBg}>
                            <Image src="../../assets/item1.png" alt='item1' />
                            <Box pl={12} pr={12}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'20px', md:'20px', sm:'14px', base:'12px'}}>
                                    Назва проекту
                                </Box>
                                <Box textAlign={"right"}>
                                    <Button backgroundColor="white" marginBottom={4}  fontSize={{lg:'14px', md:'14px', sm:'12px', base:'10px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                        переглянути
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box bg={cardBg}>
                            <Image src="../../assets/item1.png" alt='item1' />
                            <Box pl={12} pr={12}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'20px', md:'20px', sm:'14px', base:'12px'}}>
                                    Назва проекту
                                </Box>
                                <Box textAlign={"right"}>
                                    <Button backgroundColor="white" marginBottom={4} fontSize={{lg:'14px', md:'14px', sm:'12px', base:'10px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                        переглянути
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Container>
        </chakra.body>
    );
}

export default Direction;