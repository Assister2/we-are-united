import React ,{ useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
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
  Icon,
  Text,
  space,
  extendTheme,
  useBreakpointValue,
} from "@chakra-ui/react";
import "./banner.css";
import "../bannerItem";
import "../bannerItem2";
import BannerItem from "../bannerItem";
import BannerItem2 from "../bannerItem2";
import ContactItem from "components/Contact/contactAddress";
import ContactForm from "components/Contact/contactForm";
import ContactFund from "components/Contact/contactFund";

const YOUR_PAT = 'pattgeELcYcjvzwSG.a95aa8b9b1ec83e15e67f5bdaea6edf9d96c024618f60391a1347de366acc10c';
const BASE_ID = 'applgD9CzrAvFqdsw';
const TABLE_NAME = 'injured';

function Navbar() {
    const bg = useColorModeValue("gray.50", "gray.900");
    const isMobile = useBreakpointValue({ base: true, md: false });
    const [injuredData, setInjuredData] = useState([]);
    const breakpoints = {
        sm: '320px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1512px',
      }
    //   style={{position:'absolute'}}
    const theme = extendTheme({ breakpoints })
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, {
            headers: {
              'Authorization': `Bearer ${YOUR_PAT}`
            }
          });
            console.log(response.data);
            setInjuredData(response.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);
    return (
        <chakra.body bg="#f2f6fa" w="100%" maxW="1512px" fontFamily={"Montserrat"} color="#001430">
            <Container maxW="1512px"
                minW="320px"
                py={5}
                align="center">
                {/* <Box w="100%" height={'800px'} pl={"116px"} pr={"53px"} bg={"white"} >
                    <Box position={"relative"} height={'800px'}>
                        <Box color={"#00265c"} position={"absolute"} zIndex={2} top={0} left={0}>
                            <Box>
                                <svg xmlns="http://www.w3.org/2000/svg" width="905" height="680" viewBox="0 0 905 680" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M389.811 95.1534C550.012 77.4383 719.355 -49.3998 845.661 21.2082C968.799 90.0449 869.402 232.488 823.111 337.378C791.821 408.279 702.525 449.631 631.997 505.354C552.194 568.406 510.492 673.969 389.811 679.728C268.192 685.531 185.869 597.35 111.837 530.175C49.7191 473.811 21.3111 408.06 12.5165 337.378C2.57197 257.453 -25.5528 162.655 59.3282 108.161C143.505 54.119 276.538 107.679 389.811 95.1534Z" fill="#00265C"/>
                                </svg>
                            </Box>
                            <Box top={"186px"} left={"166px"} position={"absolute"} width={"590px"}>
                                <Box textAlign={"left"} 
                                    marginTop={10}
                                    marginBottom={10}
                                    fontSize={{lg:'40px', md:'36px', base:'24px', sm:'30px'}}
                                    fontWeight={600}
                                    lineHeight="30px"
                                    letterSpacing="-0.3px"
                                     color={"#fff"}>
                                    МИ ЄДИНІ          
                                </Box>
                                <Box textAlign={"left"} 
                                    marginTop={10}
                                    marginBottom={10}
                                    fontSize={{lg:'20px', md:'20px', base:'12px', sm:'16px'}}
                                    fontWeight={500}
                                    lineHeight="35px"
                                     color={"#fff"}>
                                    Команда активних українців, які мають спільну мету -
                                    допомога українському народу у відбудові українських
                                    поселень та осель сімей, які втратили дах над головою
                                    від рук російського агресора. 
                                </Box>
                                <Box textAlign={"left" }>
                                    <Button backgroundColor="orange" alignItems="center" borderRadius={0}>
                                        <Box fontSize="20px" fontWeight={600} lineHeight="30px">
                                            допомогти  
                                        </Box>
                                    </Button>
                                </Box>
                                
                        </Box>
                        </Box>
                        
                        <Box color={"#FFE76A"} position={"absolute"}  right={0} bottom={0} zIndex={1}>
                            <Box  >
                                <svg xmlns="http://www.w3.org/2000/svg" width="715" height="705" viewBox="0 0 715 705" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M627.56 44.4517C725.871 115.1 717.543 257.655 711.596 366.702C706.57 458.867 658.647 530.394 597.753 590.996C537.28 651.18 465.822 698.643 373.964 702.717C267.774 707.427 132.892 708.262 61.4943 614.78C-9.18209 522.243 82.7339 418.911 75.5174 311.956C68.7068 211.02 -45.3461 82.4898 21.2839 18.8352C88.2063 -45.0988 214.681 78.0542 315.877 82.33C427.726 87.0559 528.631 -26.641 627.56 44.4517Z" fill="#FFE76A"/>
                                </svg>
                            </Box>
                            <Box  position={"absolute"} right={"50px"} bottom={"150px"} alignItems={"center"} textAlign={"center"} zIndex={1}>
                                <Image src="../../assets/item1.png" alt='item1' />
                            </Box>
                        </Box>
                        
                    </Box>
                </Box> */}
                {/* <BannerItem /> */}
                {/* <BannerItem2 /> */}
                {/* <ContactItem /> */}
                {/* <ContactForm /> */} 
                {/* <ContactFund /> */}
                
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
                        >
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
                                >
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
                        >
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
                        >
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
  