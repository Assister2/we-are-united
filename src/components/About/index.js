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
import {useTranslation} from "react-i18next";

function About() {
    const bg = useColorModeValue("white.50 ", "white.900");
    const cardBg = useColorModeValue("gray.50", "gray.900");
    const { isOpen, onOpen, onClose } = useDisclosure()
    const textBg = useColorModeValue("#001430");
    const {t, i18n} = useTranslation('common');

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
                        {t('ABOUT US')}
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
                                {t("'Who are we'")}
                                {/* "Хто ми" */}
                            </Box>
                            <Box  textAlign={"left"} 
                                color="white"
                                w="100%"
                                fontWeight={600}
                                lineHeight="30px"
                                letterSpacing="0.2px"
                                fontSize={{lg:'20px', md:'20px', sm:'16px', base:'12px'}}>
                                {t("We are a team of active Ukrainians who have a common goal - to help the Ukrainian people in the reconstruction of Ukrainian settlements and homes of families who lost their homes at the hands of the Russian aggressor.")}
                            </Box>
                        </Box>
                        <Box  textAlign={"left"} 
                            color="white"
                            w="100%"
                            fontWeight={600}
                            lineHeight="30px"
                            letterSpacing="0.2px"
                            fontSize={{lg:'20px', md:'20px', sm:'16px', base:'12px'}}
                            >
                            {t("We are One - an officially registered organization that is ready to cooperate with international funds and caring people who unite community and good will. We will have a common future together.")}
                        </Box>
                    </Box>                                       
                </Box>
                <Box backgroundColor={cardBg} 
                    paddingTop={8} 
                    paddingBottom={8}  
                    px={{lg:'200px', md:'150px', sm:'120px', base:'120px'}}
                    fontSize={{lg:'20px', md:'20px', sm:'16px', base:'12px'}}>
                    <Center paddingBottom={5} fontWeight={700} lineHeight="21px" letterSpacing="0.2px" textTransform={"uppercase"} >
                        {t('Areas of our activity')}
                    </Center>
                    <SimpleGrid columns={2} spacing={8} fontWeight={600} lineHeight="30px">
                        <Link as={RouterLink} to="/about/1"> 
                        <Box borderWidth={1} py={{lg:'34px', md:'30px', sm:'24px', base:'20px'}}>
                            <Center>{t('Humanitarian help')}</Center>
                            <Center> {t('Population of Ukraine')}</Center>
                        </Box>
                        </Link>
                        <Link as={RouterLink} to="/about/2">
                        <Box borderWidth={1} py={{lg:'47px', md:'40px', sm:'32px', base:'28px'}}>
                            <Center >{t('Army Assistance')}</Center>
                        </Box>
                        </Link>
                        <Link as={RouterLink} to="/about/3"> 
                        <Box borderWidth={1} py={{lg:'34px', md:'30px', sm:'24px', base:'20px'}}>
                            <Center>{t('Development assistance')}</Center>
                            <Center>{t('Business projects')}</Center>
                        </Box>
                        </Link>
                        <Link as={RouterLink} to="/about/4"> 
                        <Box borderWidth={1} py={{lg:'34px', md:'30px', sm:'24px', base:'20px'}}>
                            <Center >{t('Help in rebuilding')}</Center>
                            <Center>{t('Lost housing')}</Center>
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
                            >
                            {t("Our team includes more than 30 volunteers and citizens who, at the beginning of the invasion of the Russian army, began to do everything to ensure the livelihood of the Ukrainian people. Our team has the goal of helping, building, and developing the future together.")}
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
                        {t('Help')}
                </Box>
                <Box backgroundColor={bg} 
                    paddingTop={8} 
                    paddingBottom={8}  
                    px={{lg:'200px', md:'150px', sm:'120px', base:'120px'}}
                    fontSize={{lg:'20px', md:'20px', sm:'16px', base:'12px'}}>
                    {t('If you want to join our team, fill out the form')}
                </Box>
                <Center>
                    <Button backgroundColor="orange" alignItems="center" borderRadius={0} onClick={onOpen}>
                        <Box fontSize="20px" fontWeight={600} lineHeight="30px">
                            {t('Help')}
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
                                    fontFamily={"Rutenia"} fontWeight={400} lineHeight={10} >
                                {t('To build the future together')}</Center>
                            <Center px={"78px"} mb={"48px"} mt={"18px"} fontSize={{lg:'30px', md:'24px', sm:'20px', base:'16px'}}
                                fontFamily={"Rutenia"} fontWeight={400} lineHeight={10} >
                                {t('It is worth being united in a common cause')}</Center>
                        </ModalHeader>
                        <Box  px={"68px"} my={"20px"} >
                            <VStack textAlign={"right"} gap={"20px"}>
                                <Input py={"33px"} pl={"30px"} borderColor={"#001430"} borderWidth={1} borderRadius={0} placeholder="name"  />
                                <Input py={"33px"} pl={"30px"} borderColor={"#001430"} borderWidth={1} borderRadius={0} placeholder="phone number"  />
                                <Input py={"33px"} pl={"30px"} borderColor={"#001430"} borderWidth={1} borderRadius={0} placeholder="Email"  />
                                <Input py={"33px"} pl={"30px"} borderColor={"#001430"} borderWidth={1} borderRadius={0} placeholder="What city do you live in?"  />
                                <Input pt={"33px"} pb={"134px"} pl={"30px"} borderColor={"#001430"} borderWidth={1} borderRadius={0} placeholder="How could and would you like to help?"  />    
                            </VStack>
                        </Box>
                        <Center py={"20px"}>
                            <Button backgroundColor="orange" alignItems="center" borderRadius={0}>
                                <Box fontSize="20px" fontWeight={600} lineHeight="30px">
                                    {t('Send')}
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