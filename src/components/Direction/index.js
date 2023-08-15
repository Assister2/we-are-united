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
            <Container maxW="2xl"
                        py={5}
                        align="center">
                <Box  textAlign={"left"} 
                        marginTop={5}
                        marginBottom={3}
                        w="80%"
                        fontSize="18px">
                        напрямки
                </Box>
                <Box w="80%">
                     <SimpleGrid columns={2} spacing={5}>
                        <Box bg={cardBg}>
                            <Image src="../../assets/item1.png" alt='item1' />
                            <Box textAlign={"left"} 
                                marginLeft={5}
                                marginBottom={3}
                                fontSize="20px">
                                Дрони, “Очі в Небі”
                            </Box>
                            <Flex justify={"space-around"} marginTop={4} marginBottom={4}>
                            <Button backgroundColor="orange" alignItems="center" borderRadius={0}>
                                допомогти
                            </Button>
                            <Button backgroundColor="white"  alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                допомогти
                            </Button>
                            </Flex>
                        </Box>
                        <Box bg={cardBg}>
                            <Image src="../../assets/item1.png" alt='item1' />
                            <Box textAlign={"left"} 
                                marginLeft={5}
                                marginBottom={3}
                                fontSize="20px">
                                Дрони, “Очі в Небі”
                            </Box>
                            <Flex justify={"space-around"} marginTop={4} marginBottom={4}>
                            <Button backgroundColor="orange" alignItems="center" borderRadius={0}>
                                допомогти
                            </Button>
                            <Button backgroundColor="white"  alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                допомогти
                            </Button>
                            </Flex>
                        </Box>
                        <Box bg={cardBg}>
                            <Image src="../../assets/item1.png" alt='item1' />
                            <Box textAlign={"left"} 
                                marginLeft={5}
                                marginBottom={3}
                                fontSize="20px">
                                Дрони, “Очі в Небі”
                            </Box>
                            <Flex justify={"space-around"} marginTop={4} marginBottom={4}>
                            <Button backgroundColor="orange" alignItems="center" borderRadius={0}>
                                допомогти
                            </Button>
                            <Button backgroundColor="white"  alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                допомогти
                            </Button>
                            </Flex>
                        </Box>
                        <Box bg={cardBg}>
                            <Image src="../../assets/item1.png" alt='item1' />
                            <Box textAlign={"left"} 
                                marginLeft={5}
                                marginBottom={3}
                                fontSize="20px">
                                Дрони, “Очі в Небі”
                            </Box>
                            <Flex justify={"space-around"} marginTop={4} marginBottom={4}>
                            <Button backgroundColor="orange" alignItems="center" borderRadius={0}>
                                допомогти
                            </Button>
                            <Button backgroundColor="white"  alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                допомогти
                            </Button>
                            </Flex>
                        </Box>
                     </SimpleGrid>
                </Box>
                <Box  textAlign={"left"} 
                        marginTop={5}
                        marginBottom={3}
                        w="80%"
                        fontSize="18px">
                        актуальні проєкти
                </Box>
                <Box  textAlign={"left"} 
                        marginTop={5}
                        marginBottom={3}
                        w="80%"
                        fontSize="18px">
                        виконані проєкти
                </Box>
            </Container>
        </chakra.body>
    );
}

export default Direction;