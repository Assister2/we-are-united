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
  Icon,
  Text,
  space,
  extendTheme,
  useBreakpointValue,
} from "@chakra-ui/react";



function BannerItem(){
    const {t, i18n} = useTranslation('common');
    return(
        <Box w="100%" height={'800px'} pl={"116px"} pr={"53px"} bg={"white"} >
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
                                    {t('WE ARE THE ONLY ONE')}
                                </Box>
                                <Box textAlign={"left"} 
                                    marginTop={10}
                                    marginBottom={10}
                                    fontSize={{lg:'20px', md:'20px', base:'12px', sm:'16px'}}
                                    fontWeight={500}
                                    lineHeight="35px"
                                     color={"#fff"}>
                                    {t('A team of active Ukrainians who have a common goal - to help the Ukrainian people in the reconstruction of Ukrainian settlements and homes of families who lost their roofs over their heads at the hands of the Russian aggressor.')}
                                </Box>
                                <Link as={RouterLink} to="/payment">
                                    <Box textAlign={"left" }>
                                        <Button backgroundColor="orange" alignItems="center" borderRadius={0}>
                                            <Box fontSize="20px" fontWeight={600} lineHeight="30px">
                                                {t('HELP')}
                                            </Box>
                                        </Button>
                                    </Box>
                                </Link>
                                
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
                </Box>
    )   
}
export default BannerItem;