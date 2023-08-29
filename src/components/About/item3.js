import React from "react";
import {
    Container,
    Box,
    VStack,
    OrderedList,
    ListItem,
  } from "@chakra-ui/react";
import {useTranslation} from "react-i18next";
import TextItem from "components/textItem";
import TextItem3 from "components/textItem3";

function AboutItem3 () {
    const {t, i18n} = useTranslation('common')
   const font20 = {lg:'20px', md:'16px', sm:'12px', base:'8px'};
   const font32 = {lg:'32px', md:'28px', base:'24px', sm:'24px'};
    const about1 ="The invasion of the Russian occupation forces on the territory of the free state of Ukraine leaves great scars, which are reflected in the hearts, eyes and lives of many Ukrainians.";
    const about2 ="On February 24, 2022, many Ukrainian families in many cities of Ukraine woke up to the terrible rocket and air bombardment of the Russian army. Many Ukrainians will never see the Dnipro River again, will never walk through the beautiful streets of their cities, will never see the sun again - their lives have been interrupted by Russian killers This Russian peace brought to Ukraine the destruction of cities and settlements, destroyed high-rise buildings, destroyed urban infrastructure, destroyed private buildings of peasants, destroyed entire cottage towns such as Bucha, Gostomel, Moshchun and many other properties of Ukrainians.";
    const about3= "Many Ukrainians were forced to leave their homes and flee to other cities and countries. About 6 million people of Ukraine became refugees in European countries, but also many Ukrainians did not get a chance to live, as they were brutally killed by the hands of the Russians. Torture of people, rape young and adult girls, killing Ukrainian children, even burying them alive under the depths of destroyed cities and settlements - this is what the Russian people brought to Ukrainians!";
    const about4= "At this moment, the Ukrainian military is protecting and liberating cities and villages from the Russian invaders step by step, but after the Russian troops visited there, nothing remained of the Ukrainian homes except a pile of construction debris.";
    const about5= "We want to help!";
    const about6= "Therefore, one of the directions of assistance to the population of Ukraine in the reconstruction of the lost housing, which suffered at the hands of the racist invasion, has been launched.";
    const about7= "We aim to help rebuild lost housing for Ukrainians in many cities of Ukraine visited by the Rashists, but now it is more rational and faster to install temporary structures for living because winter is very close.";
    const about8= "How is reconstruction aid designed and created?";
    const about9= "We verify all applications of people who come with a request for housing.";
    const about10= "After checking the application, we create a project and highlight it on social networks such as Facebook, YouTube, Instagram, Telegram and others.";
    const about11= "We are conducting a public financial collection for the reconstruction of lost or temporary housing. We also accept other assistance that is appropriate for the reconstruction of lost housing of Ukrainians.";
    const about12= "We are starting the project, we are conducting constant photo and video reporting on the state of the project in different periods of reconstruction.";
    const about13= "We are finishing the project, we are covering the full report on the project from the beginning to the end: photos, video, stages of reconstruction.";
    const about14= "We report on the completion of the project";
    return (
    <Container maxW="1512px" px={"171px"} py={"30px"}>
    <Box py={"70px"} textAlign={"left"} fontSize={font32} fontWeight={"bold"}>
        {t('Assistance in rebuilding lost housing for Ukrainian families')}
    </Box>
    <Box>
        <VStack spacing={10}>
            <TextItem about1={about1}  wei={600} />
            <TextItem about1={about2}  wei={600} />
            <TextItem about1={about3}  wei={600} />
            <TextItem about1={about4}  wei={600} />
        </VStack>
        <Box py={10}>    
            <TextItem3 about1={about5} 
            about2={about6} about3={about7} />
        </Box>
        <Box>
            <TextItem about1={about8} wei={700}/>
        </Box>
        <OrderedList>
            <ListItem><TextItem about1={about9} wei={600}/></ListItem>
            <ListItem><TextItem about1={about10} wei={600}/></ListItem>
            <ListItem><TextItem about1={about11} wei={600}/></ListItem>
            <ListItem><TextItem about1={about12} wei={600}/></ListItem>
            <ListItem><TextItem about1={about13} wei={600}/></ListItem>
            <ListItem><TextItem about1={about14} wei={600}/></ListItem>
        
        </OrderedList>
    </Box>
    </Container>
  );
}

export default AboutItem3;
