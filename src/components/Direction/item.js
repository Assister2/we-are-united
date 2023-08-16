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

function item() {
    
    const cardBg = useColorModeValue("gray.50", "gray.900");
    return (
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
    );
}

export default item;