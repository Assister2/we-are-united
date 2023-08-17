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
        <Box width={"100%"} px={"171px"} color={"#001430"} bgColor={"#fff"}>
            <Center py={"101px"} position={"relative"}>
                <Box fontSize={{lg:'32px', md:'24px', sm:'20px', base:'16px'}}
                    fontWeight={700} lineHeight={"21px"} letterSpacing={"0.2px"}
                    textTransform={"uppercase"}>Автомобілі</Box>
                <Button bgColor="#FFE76A" borderRadius={"0px"}
                 position={"absolute"} right={"0px"}
                 px={"17px"} py={"13px"}>
                    у процесі
                </Button>
            </Center>
            <Flex justify={"space-between"}>
                <Box w={"631px"}>
                    <Text textAlign={"left"} 
                    font-size={{lg:'24px', md:'20px', sm:'16px', base:'12px'}}
                    fontWeight={700} lineHeight={"21px"} letterSpacing={"0.2px"}
                    textTransform={"uppercase"} mb={"18px"}>Опис проєкту</Text>
                    <Box textAlign={"left"}  
                    color={"#000"} 
                    fontSize={{lg:'20px', md:'16px', sm:'12px', base:'10px'}}
                    fontWeight={600} lineHeight={"35px"}  letterSpacing={"0.2px"}>
                    Наша мета — зібрати кошти на придбання транспортних
                    засобів для військових, які можна використовувати в
                    різних ситуаціях. Ми сподіваємося змінити ситуацію,
                    забезпечивши покращену мобільність і безпеку для
                    наших військ.
                    </Box>
                    <Box py={"51px"}>
                        <HStack spacing='20px' verticalAlign="middle"
                            fontSize={{lg:'24px', md:'20px', sm:'16px', base:'12px'}}
                            fontWeight={600} lineHeight={"30px"} letterSpacing={"0.2px"}
                            textTransform={"capitalize"}>
                            <Box py={"20px"} px={"58px"} borderWidth={1} borderRadius={0}>
                                <Box textAlign={"center"}>зібрано</Box>
                                <Box color={"orange"}>
                                    5 500 грн
                                </Box>
                            </Box>
                            <Box py={"20px"} px={"58px"} borderWidth={1} borderRadius={0}>
                                <Box textAlign={"center"}>Потрібно</Box>
                                <Box color={"orange"}>
                                34 000 грн
                                </Box>
                            </Box>
                        </HStack>
                    </Box>
                    <Button backgroundColor="orange" fontSize={{lg:'20px', md:'12px', sm:'8px', base:'6px'}} alignItems="center" borderRadius={0}>
                        допомогти
                    </Button>
                </Box>
                <Box>
                    <Image src="../../assets/car.png" alt='safari' />
                </Box>
            </Flex>
            {/* <Text textAlign={"left"} 
                font-size={{lg:'24px', md:'20px', sm:'16px', base:'12px'}}
                fontWeight={700} lineHeight={"21px"} letterSpacing={"0.2px"}
                textTransform={"uppercase"} mb={"18px"}>Опис проєкту</Text>
            <Box position={"relative"} h={"460px"}>
                <Box textAlign={"left"} w={"631px"} 
                color={"#000"} left={"0px"} position={"absolute"}
                fontSize={{lg:'20px', md:'16px', sm:'12px', base:'10px'}}
                fontWeight={600} lineHeight={"35px"}  letterSpacing={"0.2px"}>
                Наша мета — зібрати кошти на придбання транспортних
                засобів для військових, які можна використовувати в
                різних ситуаціях. Ми сподіваємося змінити ситуацію,
                забезпечивши покращену мобільність і безпеку для
                наших військ.
                </Box>
                <Box  top={"10px"} right={"0px"} position={"absolute"}>
                    <Image src="../../assets/car.png" alt='safari' />
                </Box>
                <Box py={"51px"} position={"absolute"} top={"180px"} left={"0px"}>
                    <HStack spacing='20px' verticalAlign="middle"
                        fontSize={{lg:'24px', md:'20px', sm:'16px', base:'12px'}}
                        fontWeight={600} lineHeight={"30px"} letterSpacing={"0.2px"}
                        textTransform={"capitalize"}>
                        <Box py={"20px"} px={"58px"} borderWidth={1} borderRadius={0}>
                            <Box textAlign={"center"}>зібрано</Box>
                            <Box color={"orange"}>
                                5 500 грн
                            </Box>
                        </Box>
                        <Box py={"20px"} px={"58px"} borderWidth={1} borderRadius={0}>
                            <Box textAlign={"center"}>Потрібно</Box>
                            <Box color={"orange"}>
                            34 000 грн
                            </Box>
                        </Box>
                    </HStack>
                </Box>
                <Box position={"absolute"} bottom={0} left={0}>
                    <Button backgroundColor="orange" fontSize={{lg:'20px', md:'12px', sm:'8px', base:'6px'}} alignItems="center" borderRadius={0}>
                        допомогти
                    </Button>
                </Box>
            </Box> */}
             <Text textAlign={"left"} 
                font-size={{lg:'24px', md:'20px', sm:'16px', base:'12px'}}
                fontWeight={700} lineHeight={"21px"} letterSpacing={"0.2px"}
                textTransform={"uppercase"} mb={"18px"}>Наше звернення</Text>
            <Box position={"relative"}>
                <Image src="../../assets/safari1.png" alt="safari1" />
                <Box zIndex={1} position={"absolute"} top={"26%"} left={"44%"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="106" height="106" viewBox="0 0 106 106" fill="none">
                        <path d="M41.958 72.8752L72.8747 53.0002L41.958 33.1252V72.8752ZM52.9997 97.1668C46.89 97.1668 41.1483 96.0067 35.7747 93.6865C30.4011 91.3692 25.7268 88.2231 21.7518 84.2481C17.7768 80.2731 14.6306 75.5988 12.3133 70.2252C9.99312 64.8516 8.83301 59.1099 8.83301 53.0002C8.83301 46.8904 9.99312 41.1488 12.3133 35.7752C14.6306 30.4016 17.7768 25.7272 21.7518 21.7522C25.7268 17.7772 30.4011 14.6296 35.7747 12.3094C41.1483 9.99213 46.89 8.8335 52.9997 8.8335C59.1094 8.8335 64.8511 9.99213 70.2247 12.3094C75.5983 14.6296 80.2726 17.7772 84.2476 21.7522C88.2226 25.7272 91.3687 30.4016 93.686 35.7752C96.0062 41.1488 97.1664 46.8904 97.1664 53.0002C97.1664 59.1099 96.0062 64.8516 93.686 70.2252C91.3687 75.5988 88.2226 80.2731 84.2476 84.2481C80.2726 88.2231 75.5983 91.3692 70.2247 93.6865C64.8511 96.0067 59.1094 97.1668 52.9997 97.1668Z" fill="#001430"/>
                    </svg>
                </Box>
            </Box>
            <Text textAlign={"left"} 
                font-size={{lg:'24px', md:'20px', sm:'16px', base:'12px'}}
                fontWeight={700} lineHeight={"21px"} letterSpacing={"0.2px"}
                textTransform={"uppercase"} mb={"32px"} mt={"101px"}>фотозвіт</Text>
            <SimpleGrid columns={2} spacing={8}> 
                <Box><Image src="../../assets/image-4.png" alt='item1' />
                </Box>
                <Box><Image src="../../assets/image-5.png" alt='item2' />
                </Box>
                <Box><Image src="../../assets/image-6.png" alt='item3' />
                </Box>
                <Box><Image src="../../assets/image-7.png" alt='item4' />
                </Box>
            </SimpleGrid>
            <Text textAlign={"left"} 
                font-size={{lg:'24px', md:'20px', sm:'16px', base:'12px'}}
                fontWeight={700} lineHeight={"21px"} letterSpacing={"0.2px"}
                textTransform={"uppercase"} mb={"32px"} mt={"101px"}>Інформаційний звіт про виконану роботу</Text>       
            <Box textAlign={"justify"} fontSize={{lg:'20px', md:'16px', sm:'12px', base:'10px'}} 
            fontWeight={600} lineHeight={"40px"} variant={"small-caps"} mb={"278px"} letterSpacing={"0.2px"}>
                <Text mb={3}>
                    Важливу роль у зборі коштів на військову машину відіграють волонтери. Нижче наведено звіт про зусилля, докладені волонтерами для збору коштів на цю справу: Заходи зі збору коштів: волонтери організовують різноманітні заходи, такі як аукціони, гала-концерти та благодійні забіги, щоб зібрати кошти на військову машину. Ці заходи часто відкриті для громадськості, створюючи платформу для людей, щоб робити пожертви на справу.
                </Text>
                <Text mb={3}>
                    Онлайн-кампанії: волонтери також використовують онлайн-платформи, такі як соціальні мережі, веб-сайти краудфандингу та онлайн-аукціони, щоб охопити більшу аудиторію. Ці кампанії довели свою ефективність у зборі великих сум грошей за короткий проміжок часу.
                </Text> <Text mb={3}>
                    Залучення громади: волонтери також співпрацюють зі своїми місцевими громадами, щоб підвищити обізнаність і підтримати справу. Це включає звернення до місцевих підприємств і організацій з проханням про підтримку, а також участь у громадських заходах і виступи на місцевих зібраннях.
                </Text> <Text mb={3}>    
                    Корпоративне спонсорство: волонтери також шукаютькорпоративне спонсорство, яке може стати значним джерелом фінансування військової машини. Це включає в себе зв’язок з компаніями, які тісно пов’язані з армією та її місією, а також з тими, хто зацікавлений у підтримці благодійних цілей.
                </Text> <Text mb={3}>
                    Зусилля волонтерів виявилися ефективними і зібрали значні кошти на військову машину. Відданість і наполеглива праця цих волонтерів заслуговують похвали, і їхній внесок значною мірою допоможе армії та її місії.
                </Text>
            </Box>
                
        </Box>
    );
}

export default fullItem;          