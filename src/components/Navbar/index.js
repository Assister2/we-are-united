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
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
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
  space,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import "./navbar.css";
import ColorModeToggle from "components/ColorModeToggle";
import Logo from "assets/react-logo.svg";

function Navbar() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <chakra.header bg="#f2f6fa" w="100%" maxW="1512px" fontFamily="Montserrat">
      <Container maxW="1512px" minW="320px" py={5} align="center">
        <Flex justify={"space-between"}  maxW="1170px">
          <Center> 
            <Image height="58px" w="64px" src="../../assets/site_logo.png" alt='site logo' />
          </Center>
          <Flex justify={"space-between"}>
            <Center marginRight="30px">
                { isMobile ? (
                <Center>
                  <Menu bg="#f2f6fa">
                    {/* <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" /> */}
                    <MenuButton as={IconButton} icon={<HamburgerIcon />} />
                    <MenuList>
                      <MenuItem>
                        <Link as={RouterLink} to="/">
                          <Box fontSize="16px" fontWeight={600} lineHeight="10px" textTransform={"uppercase"} letterSpacing="0.2px">
                            напрямки
                          </Box>
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link as={RouterLink} to="/">
                          <Box fontSize="16px" fontWeight={600} lineHeight="10px" textTransform={"uppercase"} letterSpacing="0.2px">
                            збори
                          </Box>
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link as={RouterLink} to="/">
                          <Box fontSize="16px" fontWeight={600} lineHeight="10px" textTransform={"uppercase"} letterSpacing="0.2px">
                            про нас
                          </Box>
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link as={RouterLink} to="/">
                          <Box fontSize="16px" fontWeight={600} lineHeight="10px" textTransform={"uppercase"} letterSpacing="0.2px">
                            контакти
                          </Box>
                        </Link>
                      </MenuItem>
                    </MenuList>
                </Menu>
              </Center>
              ):(
              <HStack marginRight="61px" spacing='20px' verticalAlign="middle">
                <Link as={RouterLink} to="/">
                  <Box fontSize="16px" fontWeight={600} lineHeight="10px" textTransform={"uppercase"} letterSpacing="0.2px">
                    напрямки
                  </Box>
                </Link>
                <Link as={RouterLink} to="/meeting">
                  <Box fontSize="16px" fontWeight={600} lineHeight="10px" textTransform={"uppercase"} letterSpacing="0.2px">
                    збори
                  </Box>
                </Link>
                <Link as={RouterLink} to="/about">
                  <Box fontSize="16px" fontWeight={600} lineHeight="10px" textTransform={"uppercase"} letterSpacing="0.2px">
                    пронас
                  </Box>
                </Link>
                <Link as={RouterLink} to="/contacts">
                  <Box fontSize="16px" fontWeight={600} lineHeight="10px" textTransform={"uppercase"} letterSpacing="0.2px">
                    контакти
                  </Box>
                </Link>
              </HStack>) } 
            </Center>
            {isMobile ?(<Flex gap={5}>
              <Center>
                <Button backgroundColor="orange" alignItems="center" borderRadius={0}>
                  <Box fontSize="20px" fontWeight={600} lineHeight="30px">
                    допомогти  
                  </Box>
                </Button>
              </Center> 
              <Flex justify="center" align="center" class="language-icon" > 
                <Menu>
                  <MenuButton as={Text}>
                    <Flex>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.657 6.76146 15.1936 5.5659 14.59 4.44C16.4141 5.068 17.9512 6.33172 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.58397 18.9354 6.04583 17.6708 5.08 16ZM8.03 8H5.08C6.04583 6.32918 7.58397 5.06457 9.41 4.44C8.80643 5.5659 8.34298 6.76146 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.9512 17.6683 16.4141 18.932 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" fill="#001430"/>
                      </svg>
                      UA
                    </Flex>
                  </MenuButton>
                  <MenuList maxW={5}>
                    <MenuItem>UA</MenuItem>
                    <MenuItem>UA</MenuItem>
                    <MenuItem>UA</MenuItem>
                    <MenuItem>UA</MenuItem>
                    <MenuItem>UA</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Flex>):(<Flex gap={10}>
              <Center>
                <Button backgroundColor="orange" alignItems="center" borderRadius={0}>
                  <Box fontSize="20px" fontWeight={600} lineHeight="30px">
                    допомогти  
                  </Box>
                </Button>
              </Center> 
              <Flex justify="center" align="center" class="language-icon" > 
                <Menu>
                  <MenuButton as={Text}>
                    <Flex>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.657 6.76146 15.1936 5.5659 14.59 4.44C16.4141 5.068 17.9512 6.33172 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.58397 18.9354 6.04583 17.6708 5.08 16ZM8.03 8H5.08C6.04583 6.32918 7.58397 5.06457 9.41 4.44C8.80643 5.5659 8.34298 6.76146 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.9512 17.6683 16.4141 18.932 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" fill="#001430"/>
                      </svg>
                      UA
                    </Flex>
                  </MenuButton>
                  <MenuList maxW={5}>
                    <MenuItem>UA</MenuItem>
                    <MenuItem>UA</MenuItem>
                    <MenuItem>UA</MenuItem>
                    <MenuItem>UA</MenuItem>
                    <MenuItem>UA</MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Flex>)}
            
          </Flex>
          {/* <ColorModeToggle /> */}
        </Flex>
        
      </Container>
    </chakra.header>
  );
}

export default Navbar;
