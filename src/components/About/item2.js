import React from "react";
import {
    Container,
    Box,
    VStack,
  } from "@chakra-ui/react";
  import {useTranslation} from "react-i18next";
import TextItem from "components/textItem";
import TextItem2 from "components/textItem2";
import TextItem3 from "components/textItem3";

function AboutItem2() {
    const {t, i18n} = useTranslation('common');
   const font20 = {lg:'20px', md:'16px', sm:'12px', base:'8px'};
   const font32 = {lg:'32px', md:'28px', base:'24px', sm:'24px'};
   const about = []; 
   const about1 = "Since the beginning of the Russian invasion of Ukraine, our IBF team 'WE ARE THE ONLY ONE', together with volunteers and caring citizens, have been helping our military at the front.";
    const about2 ="What exactly is included in aid to the military?";
    const about3= "We are purchasing the necessary tactical military equipment for mobility and improving the combat operations of the Armed Forces of Ukraine. We are also purchasing sanitary and medical aid kits for the military.";
    const about4= "Most often, the collection and purchase of equipment for mobility is carried out at the direct request of the military.";
    const about5= "Pick-up car";
    const about6= "Used for rapid military response; landing at points where combat missions are performed; evacuation of wounded and civilians; for covering military and civilian residents;";
    const about7= "Van type cars";
    const about8= "Most of all, they serve to evacuate the wounded; to deliver humanitarian aid to hot spots, to places where there is a humanitarian crisis, to cities and villages affected by the Russian invasion.";
    const about9= "Purchasing Bugs";
    const about10= "Thanks to this type of transport, Ukrainian defenders have a significant advantage over Russian opponents. By keeping mobile buggies in the units of the Armed Forces, our military is able to deliver ammunition to places inaccessible to other types of transport; forces effectively perform the assigned tasks, destroying the enemy once and for all.";
    const about11= "Purchase of electric bikes";
    const about12=  "Another type of transport, thanks to which the Ukrainian military can move silently and quickly towards the enemy, conducting successful maneuvers to destroy Russian killers and then disappear unnoticed. Electric bikes are another active advantage in the mobility of special military groups.";
    const about13= "Purchase of quadcopters and unmanned aerial vehicles";
    const about14= "At this moment, without this equipment, the tactics of any Ukrainian military unit is impossible, because for the sake of the security of the military, the territory of Ukraine is first checked for the presence of terrorists of the Russian army. Therefore, quadcopters and drones are of great importance in the direction of reconnaissance.";
    const about15= "Purchase of medical equipment";
    const about16= "Directly for conducting defensive or offensive combat operations, our defenders always need to have a first aid kit with them. Thanks to medical equipment, our soldiers are able to save the lives of their comrades or civilians in time. Lives can be saved thanks to the quick reaction of a paramedic and a first aid kit at hand. ";

   return (
    <Container maxW="1512px" px={"171px"} py={"30px"} textAlign={"left"}>
    <Box py={"70px"} textAlign={"left"} fontSize={font32} fontWeight={"bold"}>
        {t('Assistance to the army and military of Ukraine')}
    </Box>
    <Box>
        <VStack spacing={10}>
            <Box>
                <TextItem about1={about1} wei={600} />
            </Box>
            <Box><TextItem3 about1={about2} about2={about3} about3={about4} /></Box>
            <Box><TextItem2 about1={about5} about2={about6} /> </Box>
            <Box><TextItem2 about1={about7} about2={about8} /> </Box>
            <Box><TextItem2 about1={about9} about2={about10} /> </Box>
            <Box><TextItem2 about1={about11} about2={about12} /> </Box>
            <Box><TextItem2 about1={about13} about2={about14} /> </Box>
            <Box><TextItem2 about1={about15} about2={about16} /> </Box>
        </VStack>
    </Box>
    </Container>
  );
}

export default AboutItem2;
