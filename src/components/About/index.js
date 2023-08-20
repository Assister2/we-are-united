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
  VStack,
  Text,
  SimpleGrid,
  Input,
  space,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import ContactForm from "components/Contact/contactForm";
import { ClassNames } from "@emotion/react";

function About() {
    const bg = useColorModeValue("white.50 ", "white.900");
    const cardBg = useColorModeValue("gray.50", "gray.900");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const textBg = useColorModeValue("#001430");
    return (
        <chakra.body maxWidth="1512px" fontFamily={"Montserrat"} color="#001430">
            <Container maxW="1170px"
                        py={5}
                        align="center">
                <Box  textAlign={"left"} 
                        marginTop={5}
                        marginBottom={3}
                        w="100%"
                        fontWeight={700}
                        lineHeight="21px"
                        id="about"
                        letterSpacing="0.2px"
                        textTransform={"uppercase"}
                        fontSize={{lg:'24px', md:'22px', sm:'18px', base:'16px'}}>
                        про нас
                </Box>
                <Box backgroundColor={textBg} paddingTop={8} paddingBottom={8}  px={{lg:'200px', md:'150px', sm:'120px', base:'120px'}}>
                    <Box >
                        <Box mb={4}>
                            <Box  textAlign={"left"} 
                                color="white"
                                w="100%"
                                fontWeight={600}
                                lineHeight="30px"
                                letterSpacing="0.2px"
                                fontSize={{lg:'20px', md:'20px', sm:'16px', base:'12px'}}>
                                "Хто ми"
                            </Box>
                            <Box  textAlign={"left"} 
                                color="white"
                                w="100%"
                                fontWeight={600}
                                lineHeight="30px"
                                letterSpacing="0.2px"
                                fontSize={{lg:'20px', md:'20px', sm:'16px', base:'12px'}}>
                                Ми команда активних українців,  які мають спільну мету  -  допомога 
                                українському народу у відбудові українських поселень та осель сімей,
                                які втратили дах над головою від рук російського агресора.
                            </Box>
                        </Box>
                        <Box  textAlign={"left"} 
                            color="white"
                            w="100%"
                            fontWeight={600}
                            lineHeight="30px"
                            letterSpacing="0.2px"
                            fontSize={{lg:'20px', md:'20px', sm:'16px', base:'12px'}}
                            textTransform={"capitalize"}>
                            Ми Єдині - офіційно зареєстрована організація, яка готова до співпраці
                            з міжнародними фондами та небайдужими людьми, яких об'єднує 
                            спільність та добра воля. Будуємо спільне майбутнє разом.
                        </Box>
                    </Box>                                       
                </Box>
                <Box backgroundColor={cardBg} 
                    paddingTop={8} 
                    paddingBottom={8}  
                    px={{lg:'200px', md:'150px', sm:'120px', base:'120px'}}
                    fontSize={{lg:'20px', md:'20px', sm:'16px', base:'12px'}}>
                    <Center paddingBottom={5} fontWeight={700} lineHeight="21px" letterSpacing="0.2px" textTransform={"uppercase"} >
                        напрямки нашої діяльності
                    </Center>
                    <SimpleGrid columns={2} spacing={8} fontWeight={600} lineHeight="30px">
                        <Link as={RouterLink} to="/about/1"> 
                        <Box borderWidth={1} py={{lg:'34px', md:'30px', sm:'24px', base:'20px'}}>
                            <Center>Гуманітарна допомога</Center>
                            <Center> населенню України</Center>
                        </Box>
                        </Link>
                        <Link as={RouterLink} to="/about/2">
                        <Box borderWidth={1} py={{lg:'47px', md:'40px', sm:'32px', base:'28px'}}>
                            <Center >Допомога армії</Center>
                        </Box>
                        </Link>
                        <Link as={RouterLink} to="/about/3"> 
                        <Box borderWidth={1} py={{lg:'34px', md:'30px', sm:'24px', base:'20px'}}>
                            <Center>Допомога у розвитку</Center>
                            <Center>бізнес-проектів</Center>
                        </Box>
                        </Link>
                        <Link as={RouterLink} to="/about/4"> 
                        <Box borderWidth={1} py={{lg:'34px', md:'30px', sm:'24px', base:'20px'}}>
                            <Center >Допомога у відбудуванні</Center>
                            <Center>втраченого житла</Center>
                        </Box>
                        </Link>
                    </SimpleGrid>
                </Box>
                <Box backgroundColor={textBg} paddingTop={8} paddingBottom={8}  px={{lg:'200px', md:'150px', sm:'120px', base:'120px'}}>
                    <Box >
                        <Box  textAlign={"left"} 
                            color="white"
                            w="100%"
                            fontWeight={600}
                            lineHeight="30px"
                            letterSpacing="0.2px"
                            fontSize={{lg:'20px', md:'20px', sm:'16px', base:'12px'}}
                            textTransform={"capitalize"}>
                            Наша команда нараховує більше ніж 30 волонтерів та громадян, які
                            спочатку вторгнення російського війська почали робити все, для 
                            забезпечення життєдіяльності українського народу. Наша команда
                            небайдужих громадян має мету - допомагати, будувати, розвивати
                            єдине майбутнє разом
                        </Box>
                    </Box>                                       
                </Box>
                <Box  textAlign={"left"} 
                        marginTop={5}
                        marginBottom={3}
                        w="100%"
                        fontWeight={700}
                        lineHeight="21px"
                        letterSpacing="0.2px"
                        textTransform={"uppercase"}
                        fontSize={{lg:'24px', md:'22px', sm:'18px', base:'16px'}}>
                        допомога
                </Box>
                <Box backgroundColor={bg} 
                    paddingTop={8} 
                    paddingBottom={8}  
                    px={{lg:'200px', md:'150px', sm:'120px', base:'120px'}}
                    fontSize={{lg:'20px', md:'20px', sm:'16px', base:'12px'}}>
                    Якщо ви бажаєте долучитися до нашої команди заповніть форму
                </Box>
                <Center>
                    <Button backgroundColor="orange" alignItems="center" borderRadius={0} onClick={onOpen}>
                        <Box fontSize="20px" fontWeight={600} lineHeight="30px">
                            допомогти
                        </Box>
                    </Button>
                </Center> 
                <Modal blockScrollOnMount={false} loseOnOverlayClick={false}
                        scrollBehavior="offside" backgroundColor={"white"}
                        isOpen={isOpen} onClose={onClose} size={"3xl"} borderWidth={1} borderRadius={0}>
                    <ModalOverlay backdropBlur='10px' backdropFilter='blur(10px) hue-rotate(0deg)'/>
                    <ModalContent height={"1006px"}>
                        <ModalCloseButton  textAlign={"right"}/>
                        <ModalHeader fontFamily={"Rutenia"}>
                            <Center px={"78px"} mt={"78px"} mb={"18px"} fontSize={{lg:'30px', md:'24px', sm:'20px', base:'16px'}}
                                    fontFamily={"Rutenia"} fontWeight={400} lineHeight={10} textTransform={"capitalize"}>
                                Щоб разом будувати майбутнє</Center>
                            <Center px={"78px"} mb={"48px"} mt={"18px"} fontSize={{lg:'30px', md:'24px', sm:'20px', base:'16px'}}
                                fontFamily={"Rutenia"} fontWeight={400} lineHeight={10} textTransform={"capitalize"}>
                                варто бути єдиними у спільній справі</Center>
                        </ModalHeader>
                        <Box  px={"68px"} my={"20px"} >
                            <VStack textAlign={"right"} gap={"20px"}>
                                <Input py={"33px"} pl={"30px"} borderColor={"#001430"} borderWidth={1} borderRadius={0} placeholder="ім’я"  />
                                <Input py={"33px"} pl={"30px"} borderColor={"#001430"} borderWidth={1} borderRadius={0} placeholder="номер телефону"  />
                                <Input py={"33px"} pl={"30px"} borderColor={"#001430"} borderWidth={1} borderRadius={0} placeholder="Email"  />
                                <Input py={"33px"} pl={"30px"} borderColor={"#001430"} borderWidth={1} borderRadius={0} placeholder="У якому місті проживаєте?"  />
                                <Input pt={"33px"} pb={"134px"} pl={"30px"} borderColor={"#001430"} borderWidth={1} borderRadius={0} placeholder="Чим би могли і хотіли допомагати?"  />    
                            </VStack>
                        </Box>
                        <Center py={"20px"}>
                            <Button backgroundColor="orange" alignItems="center" borderRadius={0}>
                                <Box fontSize="20px" fontWeight={600} lineHeight="30px">
                                    надіслати  
                                </Box>
                            </Button>
                        </Center> 
                    
                    
                    {/* <ModalBody>
                        <ContactForm />
                    </ModalBody> */}
                    
                    {/* <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter> */}
                    {/* <ContactForm /> */}
                    </ModalContent>
                </Modal>
            
            </Container>
        </chakra.body>
    );
}

export default About;