import React from "react";
import {
    Container,
    Box,
    VStack,
    OrderedList,
    ListItem
  } from "@chakra-ui/react";
  import {useTranslation} from "react-i18next";
import TextItem from "components/textItem";

function AboutItem4() {
    const {t, i18n} = useTranslation('common')
   const font20 = {lg:'20px', md:'16px', sm:'12px', base:'8px'};
   const font32 = {lg:'32px', md:'28px', base:'24px', sm:'24px'};
    const about1 = "At the beginning of the full-scale invasion of Russian troops on the territory of free and sovereign Ukraine, many entrepreneurs had to leave everything they had invested their time, health, money, and their lives in. They left their homes to help Ukrainians who were left without everything they had until the Russian invasion, But there are still many Ukrainians who continue to sacrifice all their businesses and even their property to help Ukraine defeat the Russian invaders. Also, many return to the front lines and help in any way they can. The war continues, destroying everything on your way and only the call of your heart can change ruins to buildings, sadness to joy, evil to good - it's all for victory.";
    const about2 = "Today, Ukrainians, returning to their buildings, see only ruins, and entrepreneurs - their barely breathing businesses. Investing in business development during the war became much more difficult than it was before the Russian invasion, but now the country and its people need support even greater, to preserve life and restore that which was destroyed.";
    const about3 = "We have the initiative to help small and medium-sized businesses in Ukraine, as well as conscientious citizens who constantly contribute to the development of Ukraine.";
    const about4 = "How is assistance to small and medium-sized businesses";
    const about5 = "A collection for financing the project is conducted";
    const about6 = "Receiving";

   return (
    <Container maxW="1512px" px={"171px"} py={"30px"}>
    <Box py={"70px"} textAlign={"left"} fontSize={font32} fontWeight={"bold"}>
        {t('Assistance, support and development of small and medium-sized businesses in Ukraine')}
    </Box>
    <Box>
        <VStack spacing={10}>
            <TextItem about1={about1}  wei={600} />
            <TextItem about1={about2}  wei={600} />
            <TextItem about1={about3}  wei={600} />
        </VStack>
        <Box pt={10}>    
            <TextItem about1={about4} wei={700} />
        </Box>
        <OrderedList>
            <ListItem><TextItem about1={about5} wei={600}/></ListItem>
            <ListItem><TextItem about1={about6} wei={600}/></ListItem>
        </OrderedList>
    </Box>
    </Container>
  );
}

export default AboutItem4;
