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

function fullItem() {
    
    const cardBg = useColorModeValue("gray.50", "gray.900");

    return (
        <Box width={"100%"} px={"171px"} color={"#001430"}>
            <Center py={"101px"} position={"relative"}>
                <Box fontSize={{lg:'32px', md:'24px', sm:'20px', base:'16px'}}
                    fontWeight={700} lineHeight={"21px"} letterSpacing={"0.2px"}
                    textTransform={"uppercase"}>Автомобілі</Box>
                <Button bgColor="FFE76A" position={"absolute"} right={"0px"}>
                    у процесі
                </Button>
            </Center>
            <Box position={"relative"}>
                <Text textAlign={"left"} font-size={{lg:'24px', md:'20px', sm:'16px', base:'12px'}}
                    fontWeight={700} lineHeight={"21px"} letterSpacing={"0.2px"}
                    textTransform={"uppercase"} mb={"18px"}>Опис проєкту</Text>
                <Box w={"631px"} color={"#000"}>
                Наша мета — зібрати кошти на придбання транспортних
                 засобів для військових, які можна використовувати в
                  різних ситуаціях. Ми сподіваємося змінити ситуацію,
                   забезпечивши покращену мобільність і безпеку для
                    наших військ.
                </Box>
                <Box position={"absolute"} top={"10px"} right={"0px"}>
                    <Image src="../../assets/car.png" alt='safari' />
                </Box>
            </Box>
        </Box>
    );
}

export default fullItem;