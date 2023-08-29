import React ,{ useEffect, useState } from "react";
import axios from "axios";
import {useTranslation} from "react-i18next";
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
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CopyIcon, ChevronDownIcon } from "@chakra-ui/icons";

const YOUR_PAT = 'pattgeELcYcjvzwSG.a95aa8b9b1ec83e15e67f5bdaea6edf9d96c024618f60391a1347de366acc10c';
const BASE_ID = 'applgD9CzrAvFqdsw';
const TABLE_NAME = 'payment';


function PayItem( color, type) {
    const {t, i18n} = useTranslation('common');
    const [paymentData, setPaymentData] = useState([]);
    const cardBg = useColorModeValue("gray.50", "gray.900");
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, {
            headers: {
              'Authorization': `Bearer ${YOUR_PAT}`
            }
          });
            // console.log(response.data);
            setPaymentData(response.data);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);
    return (
        <Box color={"#001430"} width={"1170px"} textAlign={"left"} >
            <Box>
                <Box 
                    marginTop={10}
                    marginBottom={10}
                    fontSize={{lg:'32px', md:'28px', base:'24px', sm:'24px'}}
                    fontWeight={600}
                    lineHeight="21px"
                    letterSpacing="-0.3px">
                    {t('Payments from abroad and in Ukraine')}
                </Box>
                <Box width={"559px"} borderWidth={1} borderRadius={0} paddingTop={"18px"} paddingBottom={"18px"} paddingLeft={"24px"} paddingRight={"24px"}>
                    <Box color={"red"} pt={3} pb={3}>
                        {t('UAH')} 
                    </Box>
                    <Box pt={3} pb={3}>              
                    {t("BECAUSE 'MBF WE ARE THE ONLY ONE'")}
                    </Box>
                    <Box pt={3} pb={3}> 
                        {t('YEDRPOU')}: 44890538
                    </Box>
                    <Box pt={3} pb={3}>
                        {t('Purpose of payment «Charitable assistance»')}
                    </Box>
                    <Box pt={3} pb={3}>
                        IBAN: UA053052990000026009016219566
                        <CopyIcon  ml={3} ba={"feba02"}/>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box 
                    marginTop={10}
                    marginBottom={10}
                    fontSize={{lg:'32px', md:'28px', base:'24px', sm:'24px'}}
                    fontWeight={600}
                    lineHeight="21px"
                    letterSpacing="-0.3px"
                    >
                    {t('Swift transfers from abroad')} 
                </Box>
                <Box width={"559px"} borderWidth={1} borderRadius={0} paddingTop={"18px"} paddingBottom={"18px"} paddingLeft={"24px"} paddingRight={"24px"}>
                    <Box>
                        <Box color={"red"} pt={3} pb={3}>
                        {t('SWIFT in US dollars (USD)')} 
                        </Box>
                        <Box pt={3} pb={3}>              
                            {t('BENEFICIARY ICF “WE ARE UNITED”')} 
                        </Box>
                        <Box pt={3} pb={3}> 
                            IBAN UA933052990000026006016222352  <CopyIcon  ml={3} ba={"feba02"}/>
                        </Box>
                        <Box pt={3} pb={3}>
                            {t('purpose of payment “charity aid”')}
                        </Box>
                    </Box>
                    <Box>
                        <Box color={"red"} pt={3} pb={3}>
                        {t('SWIFT in euros (EUR)')} 
                        </Box>
                        <Box pt={3} pb={3}>              
                            {t('BENEFICIARY ICF “WE ARE UNITED”')} 
                        </Box>
                        <Box pt={3} pb={3}> 
                            IBAN UA623052990000026008016226334  <CopyIcon  ml={3} ba={"feba02"}/>
                        </Box>
                        <Box pt={3} pb={3}>
                            {t('purpose of payment "charity aid"')}
                        </Box>
                    </Box>
                    <Box>
                        <Box color={"red"} pt={3} pb={3}>
                        {t('SWIFT in Polish zloty (PLN)')} 
                        </Box>
                        <Box pt={3} pb={3}>              
                            {t('BENEFICIARY ICF “WE ARE UNITED”')} 
                        </Box>
                        <Box pt={3} pb={3}> 
                            IBAN UA083052990000026005046230575  <CopyIcon  ml={3} ba={"feba02"}/>
                        </Box>
                        <Box pt={3} pb={3}>
                            {t('purpose of payment "charity aid"')}
                        </Box>
                    </Box>
                    <Box>
                        <Box color={"red"} pt={3} pb={3}>
                        {t('SWIFT in Pound Sterling (GBP)')}
                        </Box>
                        <Box pt={3} pb={3}>              
                            {t('BENEFICIARY ICF “WE ARE UNITED”')}
                        </Box>
                        <Box pt={3} pb={3}> 
                            IBAN UA433052990000026008046225963   <CopyIcon  ml={3} ba={"feba02"}/>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box 
                    marginTop={10}
                    marginBottom={10}
                    fontSize={{lg:'32px', md:'28px', base:'24px', sm:'24px'}}
                    fontWeight={600}
                    lineHeight="21px"
                    letterSpacing="-0.3px"
                    >
                    {t('Cryptocurrency')}
                </Box>
                <Box width={"559px"} borderWidth={1} borderRadius={0} paddingTop={"18px"} paddingBottom={"18px"} paddingLeft={"24px"} paddingRight={"24px"}>
                    <Box>
                        <Box color={"red"} pt={3} pb={3}>
                            Bitcoin 
                        </Box>
                        <Box pt={3} pb={3}>              
                            1BWZTwYwrXn7MihyTNwK2FA66AcAFJ9KFs <CopyIcon  ml={3} ba={"feba02"}/>       
                        </Box>
                    </Box>
                    <Box>
                        <Box color={"red"} pt={3} pb={3}>
                        {t('Etherium')} 
                        </Box>
                        <Box pt={3} pb={3}>              
                            0xaFdf0c37005437592A210a29b312fED552Dc3E3C <CopyIcon  ml={3} ba={"feba02"}/>       
                        </Box>
                    </Box>
                    <Box>
                        <Box color={"red"} pt={3} pb={3}>
                        {t('Tether USD (USDT) - only ERC-20 ')}  
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M26.25 4.6875V21.5625C26.25 21.8111 26.1512 22.0496 25.9754 22.2254C25.7996 22.4012 25.5611 22.5 25.3125 22.5C25.0639 22.5 24.8254 22.4012 24.6496 22.2254C24.4738 22.0496 24.375 21.8111 24.375 21.5625V5.625H8.4375C8.18886 5.625 7.9504 5.52623 7.77459 5.35041C7.59877 5.1746 7.5 4.93614 7.5 4.6875C7.5 4.43886 7.59877 4.2004 7.77459 4.02459C7.9504 3.84877 8.18886 3.75 8.4375 3.75H25.3125C25.5611 3.75 25.7996 3.84877 25.9754 4.02459C26.1512 4.2004 26.25 4.43886 26.25 4.6875ZM22.5 8.4375V25.3125C22.5 25.5611 22.4012 25.7996 22.2254 25.9754C22.0496 26.1512 21.8111 26.25 21.5625 26.25H4.6875C4.43886 26.25 4.2004 26.1512 4.02459 25.9754C3.84877 25.7996 3.75 25.5611 3.75 25.3125V8.4375C3.75 8.18886 3.84877 7.9504 4.02459 7.77459C4.2004 7.59877 4.43886 7.5 4.6875 7.5H21.5625C21.8111 7.5 22.0496 7.59877 22.2254 7.77459C22.4012 7.9504 22.5 8.18886 22.5 8.4375ZM20.625 9.375H5.625V24.375H20.625V9.375Z" fill="#FEBA02"/>
                            </svg> */}
                            
                        </Box>
                        <Box pt={3} pb={3}>              
                            0xaFdf0c37005437592A210a29b312fED552Dc3E3C <CopyIcon  ml={3} ba={"feba02"}/>       
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box 
                    marginTop={10}
                    marginBottom={10}
                    fontSize={{lg:'32px', md:'28px', base:'24px', sm:'24px'}}
                    fontWeight={600}
                    lineHeight="21px"
                    letterSpacing="-0.3px"
                    >
                    {t("Recipient's bank information")} 
                </Box>
                <Box width={"559px"} fontSize={"20px"} fontWeight={600} lineHeight={"40px"} letterSpacing={"0.2px"} borderWidth={0} borderRadius={0} paddingTop={"18px"} paddingBottom={"18px"} paddingLeft={"24px"} paddingRight={"24px"}>
                    <Box  pt={3} pb={3}>
                    {t('Beneficiary Bank Address')}
                    </Box>
                    <Box  pt={3} pb={3}>'01001, Ukraine, c. Kyiv, st. Onore de Balzaka,</Box> 
                    <Box  pt={3} pb={3}>build. 4A, fl. 308</Box> 
                    <Box  pt={3} pb={3}>{t('Beneficiary bank')}</Box> 
                    <Box  pt={3} pb={3}>{t('JSC CB PRIVATBANK')}</Box> 
                    <Box  pt={3} pb={3}>{t('Bank Address')}</Box> 
                    <Box  pt={3} pb={3}>{t('PRIVATBANK, 1D HRUSHEVSKOGO STR.,')}</Box> 
                    <Box  pt={3} pb={3}>KYIV, 01001, UKRAINE</Box> 
                    <Box  pt={3} pb={3}>{t('SWIFT CODE')}</Box> 
                    <Box  pt={3} pb={3}>{t('PBANUA2X')}</Box> 
                    
                </Box>
            </Box>
        </Box>
    );
}

export default PayItem;