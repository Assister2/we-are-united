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

function BannerItem2( color, type) {
    
    const cardBg = useColorModeValue("gray.50", "gray.900");
    return(
        <Box w="100%" height={'800px'} bg={"white"} >
            <Box position={"relative"} height={'800px'}>
                <Box color={"#001430"} position={"absolute"} zIndex={2} bottom={0} left={0}>
                    <Box>
                        <svg xmlns="http://www.w3.org/2000/svg" width="905" height="680" viewBox="0 0 905 680" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M389.811 95.1534C550.012 77.4383 719.355 -49.3998 845.661 21.2082C968.799 90.0449 869.402 232.488 823.111 337.378C791.821 408.279 702.525 449.631 631.997 505.354C552.194 568.406 510.492 673.969 389.811 679.728C268.192 685.531 185.869 597.35 111.837 530.175C49.7191 473.81 21.3111 408.06 12.5165 337.378C2.57197 257.453 -25.5528 162.655 59.3282 108.161C143.505 54.119 276.538 107.679 389.811 95.1534Z" fill="#001430"/>
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
                            WE ARE THE ONLY ONE          
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
                
                <Box color={"#FFE76A"} position={"absolute"}  right={0} top={0} zIndex={1}>
                    <Box  >
                        <svg xmlns="http://www.w3.org/2000/svg" width="760" height="735" viewBox="0 0 760 735" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M168.801 48.4282C259.476 -32.2773 396.787 6.32516 501.916 35.4416C590.77 60.0502 650.003 122.052 695.707 194.359C741.096 266.168 771.642 345.961 755.329 436.357C736.471 540.858 707.494 672.493 600.474 722.086C494.536 771.178 413.975 659.498 307.981 643.659C207.951 628.71 57.2992 712.38 9.88219 633.829C-37.7429 554.934 110.404 458.009 136.93 360.297C166.248 252.299 77.5549 129.641 168.801 48.4282Z" fill="#FFE76A"/>
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

export default BannerItem2;