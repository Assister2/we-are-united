import React ,{ useEffect, useState } from "react";
import axios from "axios";
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
} from "@chakra-ui/react";
// import PayItem from "components/payItem";
// import fullItem from "./fullItem";
// import DirectionItem from "./item";
import { HashLink, NavHashLink } from 'react-router-hash-link';

const YOUR_PAT = 'pattgeELcYcjvzwSG.a95aa8b9b1ec83e15e67f5bdaea6edf9d96c024618f60391a1347de366acc10c';
const BASE_ID = 'applgD9CzrAvFqdsw';
const TABLE_NAME = 'directions';
const directionItem = [];
const ongoingItem = [];
const completeItem = [];

function Direction() {
    const bg = useColorModeValue("white.50 ", "white.900");
    const cardBg = useColorModeValue("gray.50", "gray.900");
    const [itemData, setItemData] = useState([]);
    const {t, i18n} = useTranslation('common');
    const [directionItem, setDirectionItem ] = useState([]);
    const [ongoingItem, setOngoingItem] = useState([]);
    const [completeItem, setCompletedItem] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, {
            headers: {
              'Authorization': `Bearer ${YOUR_PAT}`
            }
          });
            console.log(response.data);
            const tempCompleteItem = []; const tempDirectionItem = []; const tempOngoingItem = [];22222
            response.data.records.map((val)=>{
                if (val.fields.Notes == 'completed projects') {
                    tempCompleteItem.push(val);
                }
                else if (val.fields.Notes == "directions") {
                    tempDirectionItem.push(val)
                }
                else if (val.fields.Notes == "actual projects" ) {
                    tempOngoingItem.push(val);
                }
            })
            setItemData(response.data);
            setDirectionItem(tempDirectionItem);
            setCompletedItem(tempCompleteItem);
            setOngoingItem(tempOngoingItem);
            console.log("ITEM",tempDirectionItem,"COMPLETED",tempCompleteItem,"ONGOING",tempOngoingItem)
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

    return (
        
        <chakra.body bg={bg}  maxWidth="1512px" fontFamily={"Montserrat"} color="#001430">
            <Container maxW="1170px"
                        py={5}
                        align="center">
                <Box  textAlign={"left"} 
                        marginTop={5}
                        marginBottom={3}
                        w="100%"
                        id="direction"
                        textTransform={"capitalize"}
                        fontSize={{lg:'24px', md:'22px', sm:'18px', base:'16px'}}>
                        {t('Directions')}
                </Box>
                <Box w="100%">
                     <SimpleGrid columns={2} spacing={8}>
                        <Box bg={cardBg}>
                            <Box width={"100%"} height={"320px"}>
                                <Image src="../../assets/direction001.png" alt='item1' />
                            </Box>
                            <Box pl={16} pr={16}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'32px', md:'28px', base:'24px', sm:'24px'}}>
                                    {t("Drones, 'Eyes in the Sky'")}
                                </Box>
                                <Flex justify={"space-between"} marginTop={4} marginBottom={4}>
                                <Link as={RouterLink} to="/payment">
                                    <Button backgroundColor="orange" fontSize={{lg:'20px', md:'12px', sm:'8px', base:'6px'}} alignItems="center" borderRadius={0}>
                                        {t('Help')}
                                    </Button>
                                </Link>
                                <Link as={RouterLink} to="/detail/2">
                                    <Button backgroundColor="white"  fontSize={{lg:'20px', md:'12px', sm:'8px', base:'6px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                        {t('In detail')}
                                    </Button>
                                </Link>
                                </Flex>
                            </Box>
                        </Box>
                        <Box bg={cardBg}>
                            <Box width={"100%"} height={"320px"}>
                            <Image src="../../assets/direction003.png" alt='item3' />
                            </Box>
                            <Box pl={16} pr={16}>   
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'32px', md:'28px', base:'24px', sm:'24px'}}>
                                    {t("Drones, 'Light'")}
                                </Box>
                                <Flex justify={"space-between"} marginTop={4} marginBottom={4}>
                                <Link as={RouterLink} to="/payment">
                                <Button backgroundColor="orange" fontSize={{lg:'20px', md:'12px', sm:'8px', base:'6px'}} alignItems="center" borderRadius={0}>
                                    {t('Help')}
                                </Button>
                                </Link>
                                <Link as={RouterLink} to="/detail/8">
                                <Button backgroundColor="white"  fontSize={{lg:'20px', md:'12px', sm:'8px', base:'6px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                    {t('In detail')}
                                </Button>
                                </Link>
                                </Flex>
                            </Box>
                            
                        </Box>
                        <Box bg={cardBg}>
                            <Box width={"100%"} height={"320px"}>
                                <Image src="../../assets/direction002.png" alt='item2' />
                            </Box>
                            <Box pl={16} pr={16}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'32px', md:'28px', base:'24px', sm:'24px'}}>
                                    {t("'CPU' planes")}
                                </Box>
                                <Flex justify={"space-between"} marginTop={4} marginBottom={4}>
                                <Link as={RouterLink} to="/payment">
                                <Button backgroundColor="orange" fontSize={{lg:'20px', md:'12px', sm:'8px', base:'6px'}} alignItems="center" borderRadius={0}>
                                    {t('Help')}
                                </Button>
                                </Link>
                                <Link as={RouterLink} to="/detail/9">
                                <Button backgroundColor="white"  fontSize={{lg:'20px', md:'12px', sm:'8px', base:'6px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                    {t('In detail')}
                                </Button>
                                </Link>
                                </Flex>
                            </Box>
                            
                        </Box>
                        <Box bg={cardBg}>
                            <Box width={"100%"} height={"320px"}>
                                <Image src="../../assets/direction004.png" alt='item4' />
                            </Box>
                            <Box pl={16} pr={16}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'32px', md:'28px', base:'24px', sm:'24px'}}>
                                    {t("'Night'thermal imagers")}
                                </Box>
                                <Flex justify={"space-between"} marginTop={4} marginBottom={4}>
                                <Link as={RouterLink} to="/payment">
                                
                                <Button backgroundColor="orange" fontSize={{lg:'20px', md:'12px', sm:'8px', base:'6px'}} alignItems="center" borderRadius={0}>
                                    {t('Help')}
                                </Button>
                                </Link>
                                <Link as={RouterLink} to="/detail/1">
                                
                                <Button backgroundColor="white"  fontSize={{lg:'20px', md:'12px', sm:'8px', base:'6px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                    {t('In detail')}
                                </Button>
                                </Link>
                                </Flex>
                            </Box>
                        </Box>
                     </SimpleGrid>
                </Box>
                <Box  textAlign={"left"} 
                        marginTop={5}
                        marginBottom={3}
                        w="100%"
                        fontSize="18px"
                        textTransform={"capitalize"}
                        id="meeting">
                        {t('current projects')}
                    <SimpleGrid columns={3} spacing="30px">
                        <Box bg={cardBg}>
                            <Box width={"100%"} py={5} textAlign={"-webkit-center"} height={"240px"} alignItems={"center"} >
                                <Image src="../../assets/direction005.png" alt='item5' />
                            </Box>
                            <Box pl={12} pr={12}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'20px', md:'12px', sm:'12px', base:'10px'}}>
                                    {t('Radio Installation')}
                                </Box>
                                <Flex justify={"space-between"} marginTop={4} marginBottom={4}>
                                    <Link as={RouterLink} to="/detail/0">
                                        <Button backgroundColor="orange" fontSize={{lg:'12px', md:'8px', sm:'6px', base:'6px'}} alignItems="center" borderRadius={0}>
                                            {t('Help')}
                                        </Button>
                                    </Link>
                                    <Link as={RouterLink} to="/detail/0">
                                        <Button backgroundColor="white" fontSize={{lg:'12px', md:'8px', sm:'6px', base:'6px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                            {t('In detail')}
                                        </Button>
                                    </Link>
                                </Flex>
                            </Box>
                            
                        </Box>
                        <Box bg={cardBg} >
                            <Box width={"100%"} height={"240px"} py={5} textAlign={"-webkit-center"}>
                                <Image src="../../assets/direction006.png" alt='item6' />
                            </Box>
                            <Box pl={12} pr={12}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'20px', md:'12px', sm:'12px', base:'10px'}}>
                                    {t('Cars')}
                                </Box>
                                <Flex justify={"space-between"} marginTop={4} marginBottom={4}>
                                    <Link as={RouterLink} to="/detail/7">
                                        <Button backgroundColor="orange" fontSize={{lg:'12px', md:'8px', sm:'6px', base:'6px'}} alignItems="center" borderRadius={0}>
                                            {t('Help')}
                                        </Button>
                                    </Link>
                                    <Link as={RouterLink} to="/detail/7">
                                        <Button backgroundColor="white" fontSize={{lg:'12px', md:'8px', sm:'6px', base:'6px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                            {t('In detail')}
                                        </Button>
                                    </Link>
                                </Flex>
                            </Box>
                            
                        </Box>
                        <Box bg={cardBg}>
                            <Box width={"100%"} height={"240px"} py={5} textAlign={"-webkit-center"}>
                                <Image src="../../assets/direction007.png" alt='item7' />
                            </Box>
                            <Box pl={12} pr={12}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'20px', md:'12px', sm:'12px', base:'10px'}}>
                                    {t('Drones')}
                                </Box>
                                <Flex justify={"space-between"} marginTop={4} marginBottom={4}>
                                    <Link as={RouterLink} to="/detail/3">
                                        <Button backgroundColor="orange" fontSize={{lg:'12px', md:'8px', sm:'6px', base:'6px'}} alignItems="center" borderRadius={0}>
                                            {t('Help')}
                                        </Button>
                                    </Link>
                                    <Link as={RouterLink} to="/detail/3">
                                        <Button backgroundColor="white" fontSize={{lg:'12px', md:'8px', sm:'6px', base:'6px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                            {t('In detail')}
                                        </Button>
                                    </Link>
                                </Flex>
                            </Box>
                            
                        </Box>
                    </SimpleGrid>
                </Box>
                <Box  textAlign={"left"} 
                        marginTop={5}
                        marginBottom={3}
                        textTransform={"capitalize"}
                        w="100%"
                        fontSize="18px">
                        {t('completed projects')}
                    <SimpleGrid columns={3} spacing="30px">
                        <Box bg={cardBg}>
                            <Box width={"100%"} height={"240px"} py={5} textAlign={"-webkit-center"}>
                                <Image src="../../assets/direction008.png" alt='item8' />
                            </Box>
                            <Box pl={12} pr={12}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'20px', md:'12px', sm:'12px', base:'10px'}}>
                                    {t('Walkie-Talkies')}
                                </Box>
                                <Link as={RouterLink} to="/detail/4"> 
                                <Box textAlign={"right"}>
                                    <Button backgroundColor="white" marginBottom={4} fontSize={{lg:'14px', md:'14px', sm:'12px', base:'10px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                    {t('Review')}
                                    </Button>
                                </Box>
                                </Link>
                            </Box>
                        </Box>
                        <Box bg={cardBg}>
                            <Box width={"100%"} height={"240px"} py={5} textAlign={"-webkit-center"}>
                                <Image src="../../assets/direction009.png" alt='item9' />
                            </Box>
                            <Box pl={12} pr={12}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'20px', md:'12px', sm:'12px', base:'10px'}}>
                                    {t('Tactical First Aid Kits')}
                                </Box>
                                <Link as={RouterLink} to="/detail/5"> 
                                <Box textAlign={"right"}>
                                    <Button backgroundColor="white" marginBottom={4} fontSize={{lg:'14px', md:'14px', sm:'12px', base:'10px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                    {t('Review')}
                                    </Button>
                                </Box>
                                </Link>
                            </Box>
                        </Box>
                        <Box bg={cardBg}>
                            <Box width={"100%"} height={"240px"} py={5} textAlign={"-webkit-center"}>
                                <Image src="../../assets/direction010.png" alt='item10' />
                            </Box>
                            <Box pl={12} pr={12}>
                                <Box textAlign={"left"}
                                    marginBottom={3}
                                    fontSize={{lg:'20px', md:'12px', sm:'12px', base:'10px'}}>
                                    {t('UAV')}
                                </Box>
                                <Link as={RouterLink} to="/detail/6"> 
                                <Box textAlign={"right"}>
                                    <Button backgroundColor="white" marginBottom={4} fontSize={{lg:'14px', md:'14px', sm:'12px', base:'10px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                                    {t('Review')}
                                    </Button>
                                </Box>
                                </Link>
                            </Box>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Container>
        </chakra.body>
    );
}

export default Direction;