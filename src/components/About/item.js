import React from "react";
import {
    Container,
    Box,
    VStack,
  } from "@chakra-ui/react";
import {useTranslation} from "react-i18next";
import TextItem from "components/textItem";

function AboutItem1() {
    const {t, i18n} = useTranslation('common');
   const font20 = {lg:'20px', md:'16px', sm:'12px', base:'8px'};
   const font32 = {lg:'32px', md:'28px', base:'24px', sm:'24px'};
    const about1 = 
    "The war came to Ukraine back in 2014 - the Russian army entered the Crimean peninsula. In the form of an artificial referendum and by the method of intimidation, murder and torture, part of the Ukrainian state was stolen. It is the Crimean peninsula that is part of a free country that was recognized by international law. The Crimean Tatars, who are the indigenous people of this part of Ukraine, also had to leave the Crimean peninsula. The Kremlin's Rashists managed to artificially sway a part of the population of Donetsk and Luhansk regions to the side of evil. But Putin's slaves did not stop there and on February 24, 2022, they started a full-scale war (in the form of a special military operation) with the people of Ukraine.";
    const about2 ="The long-suffering people of Ukraine fight for their freedom every day at the cost of their lives, the blood of both civilians and defenders of Ukraine is spilled. Many cities have been completely destroyed by Kremlin raiders. The Russian military has no mercy - they rape women and children; they kill almost everyone they meet on their way, and those who are not killed are mocked and subjected to various tortures; other Ukrainians are stolen and taken in an unknown direction. They leave behind looted buildings, destroyed homes and mass graves of Ukrainians who were raped, tortured and killed.";
    const about3= "Destroyed villages and cities, uninhabitable buildings - all this is a consequence of Russian aggression. A humanitarian crisis is taking place in many regions of Ukraine, in some places people have nothing to eat. It is at this time that many people in Ukraine are waiting for our joint help with you. Unity is our strength !";
    const about4= "We call on every caring Ukrainian and the world community of peoples with a big heart to join in helping Ukrainian families, women, children and men who have found themselves without a roof over their heads, without the means to create, without food for every day - all this because of Russia's military aggression '. on Ukrainian territory.";
    const about5= "Join, Help, Save!";
   return (
    <Container maxW="1512px" px={"171px"} py={"30px"}>
    <Box py={"70px"} textAlign={"left"} fontSize={font32} fontWeight={"bold"}>
        {t('Humanitarian aid to the Ukrainian people')}
    </Box>
    <Box>
        <VStack spacing={10}>
            <TextItem about1={about1}  wei={600} />
            <TextItem about1={about2}  wei={600} />
            <TextItem about1={about3}  wei={600} />
            <TextItem about1={about4}  wei={600} />
        </VStack>
        <Box pt={10}>    
            <TextItem about1={about5} wei={600} />
        </Box>
    </Box>
    </Container>
  );
}

export default AboutItem1;
