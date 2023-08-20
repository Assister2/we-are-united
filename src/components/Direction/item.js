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

function DirectionItem({item}) {
    
    const cardBg = useColorModeValue("gray.50", "gray.900");
    return (
        <Box bg={cardBg}>
            <Box width={"100%"} height={"300px"}>
                <Image src={item.Image} alt={item.Name} />
            </Box>
            <Box pl={16} pr={16}>
                <Box textAlign={"left"}
                    marginBottom={3}
                    fontSize={{lg:'32px', md:'28px', base:'24px', sm:'24px'}}>
                    {item.UkranianName}
                </Box>
                <Flex justify={"space-between"} marginTop={4} marginBottom={4}>
                <Link as={RouterLink} to="/payment">
                <Button backgroundColor="orange" fontSize={{lg:'20px', md:'12px', sm:'8px', base:'6px'}} alignItems="center" borderRadius={0}>
                    допомогти
                </Button>
                </Link>
                <Link as={RouterLink} to="/detail">
                <Button backgroundColor="white"  fontSize={{lg:'20px', md:'12px', sm:'8px', base:'6px'}} alignItems="center" borderWidth={1} borderColor={"black"} borderRadius={0}>
                    допомогти
                </Button>
                </Link>
                </Flex>
            </Box>
            
        </Box>
    );
}

export default DirectionItem;