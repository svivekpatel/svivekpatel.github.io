import { Box, SimpleGrid, Icon, Text, Stack, Flex, Image, GridItem } from '@chakra-ui/react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiReact, DiMongodb } from 'react-icons/di';
import { SiJavascript, SiRedux, SiChakraui, SiTypescript, SiExpress, SiVisualstudiocode, SiNetlify } from 'react-icons/si';
import { FaNodeJs, FaGithub } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandVercel } from 'react-icons/tb';


const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        _hover={{w:"20",h:"20"}}
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.200'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
}

function Skills() {
return <Box id="skills" pb={{ base: "20px", md: "30px", lg: "100px" }} >

   <Box fontSize={{ base: "30px", md: "40px", lg: "50px" }} fontWeight={"bold"} mb={"30px"} color={"gray.600"}><u>Skills</u></Box>

     <Box p={4} w={"90%"} margin={"auto"} mb={{ base: "20px", md: "30px", lg: "100px" }}>

      <SimpleGrid columns={{ base: 2, md: 4, }} spacing={"60px"}>

        <GridItem className="skills-card" backgroundColor={"lightgray"} _hover={{ bgColor: "white" }} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 604, 60, .2) 20px 20px 20px 10px"}  border={"4px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Image className="skills-card-img" as={AiFillHtml5} color={"orange.500"} w={10} h={10} />}/>
          <Text className="skills-card-name" fontWeight={"medium"}>HTML</Text>
        </GridItem>

        <GridItem className="skills-card" backgroundColor={"lightgray"} _hover={{ bgColor: "white" }} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 604, 60, .2) 20px 20px 20px 10px"} border={"2px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Icon className="skills-card-img" as={DiCss3} color={"blue.500"} w={10} h={10} />}/>
          <Text className="skills-card-name" fontWeight={"medium"}>CSS</Text>
        </GridItem>

        <GridItem className="skills-card" backgroundColor={"lightgray"} _hover={{ bgColor: "white" }} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 604, 60, .2) 20px 20px 20px 10px"} border={"4px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Icon className="skills-card-img" as={SiJavascript} color={"yellow.500"} bg={"black"} w={8} h={8} />}/>
          <Text className="skills-card-name" fontWeight={"medium"}>JavaScript</Text>
        </GridItem>

        <GridItem className="skills-card" backgroundColor={"lightgray"} _hover={{ bgColor: "white" }} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 604, 60, .2) 20px 20px 20px 10px"} border={"2px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Icon className="skills-card-img" as={DiReact} color={"blue.500"} w={10} h={10} />}/>
          <Text className="skills-card-name" fontWeight={"medium"}>React</Text>
        </GridItem>

        <GridItem className="skills-card" backgroundColor={"lightgray"} _hover={{ bgColor: "white" }} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 604, 60, .2) 20px 20px 20px 10px"} border={"2px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Icon className="skills-card-img" as={SiRedux} color={"purple.500"} w={8} h={8} />}/>
          <Text className="skills-card-name" fontWeight={"medium"}>Redux</Text>
        </GridItem>

        <GridItem className="skills-card" backgroundColor={"lightgray"} _hover={{ bgColor: "white" }} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 604, 60, .2) 20px 20px 20px 10px"} border={"4px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Icon className="skills-card-img" as={SiChakraui} color={"skyblue"} w={9} h={9} />} />
          <Text className="skills-card-name" fontWeight={"medium"}>Chakra UI</Text>
        </GridItem>

        <GridItem className="skills-card" backgroundColor={"lightgray"} _hover={{ bgColor: "white" }} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 604, 60, .2) 20px 20px 20px 10px"} border={"2px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Icon className="skills-card-img" as={DiMongodb} color={"green.500"} w={10} h={10} />} />
          <Text className="skills-card-name" fontWeight={"medium"}>MondoDB</Text>
        </GridItem>

        <GridItem className="skills-card" backgroundColor={"lightgray"} _hover={{ bgColor: "white" }} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 604, 60, .2) 20px 20px 20px 10px"} border={"4px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Icon className="skills-card-img" as={FaNodeJs} color={"green.500"} w={10} h={10} />} />
          <Text className="skills-card-name" fontWeight={"medium"}>NodeJS</Text>
        </GridItem>

        <GridItem className="skills-card" backgroundColor={"lightgray"} _hover={{ bgColor: "white" }} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 604, 60, .2) 20px 20px 20px 10px"} border={"4px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Icon className="skills-card-img" as={SiTypescript} color={"blue.500"} w={8} h={8} />}/>
          <Text className="skills-card-name" fontWeight={"medium"}>TypeScript</Text>
        </GridItem>

        <GridItem className="skills-card" backgroundColor={"lightgray"} _hover={{ bgColor: "white" }} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 604, 60, .2) 20px 20px 20px 10px"} border={"2px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Icon className="skills-card-img" as={SiExpress} color={"black"} w={9} h={9} />}/>
          <Text className="skills-card-name" fontWeight={"medium"}>Express JS</Text>
        </GridItem>

        <GridItem className="skills-card" backgroundColor={"lightgray"} _hover={{ bgColor: "white" }} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 604, 60, .2) 20px 20px 20px 10px"} border={"4px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Icon className="skills-card-img" as={TbBrandNextjs} color={"black"} w={10} h={10} />}/>
          <Text className="skills-card-name" fontWeight={"medium"}>Next JS</Text>
        </GridItem>

        <GridItem className="skills-card" backgroundColor={"lightgray"} _hover={{ bgColor: "white" }} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 604, 60, .2) 20px 20px 20px 10px"} border={"2px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Icon className="skills-card-img" as={FaGithub} color={"black"} w={9} h={9} />}/>
          <Text className="skills-card-name" fontWeight={"medium"}>GitHub</Text>
        </GridItem>

      </SimpleGrid>

    </Box>






    <Box fontSize={{ base: "30px", md: "40px", lg: "50px" }} fontWeight={"bold"} mb={"30px"} color={"gray.600"}><u>Tools</u></Box>

    <Box p={4} w={"90%"} margin={"auto"}>

      <SimpleGrid columns={{ base: 2, md: 4, }} spacing={"60px"}>

        <GridItem className="skills-card" backgroundColor={"lightgray"} _hover={{ bgColor: "white" }} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 604, 60, .2) 20px 20px 20px 10px"} border={"1px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Image as={SiVisualstudiocode} className="skills-card-img" color={"blue.600"} w={8} h={8} />} />
          <Text className="skills-card-name" fontWeight={"medium"}>VS Code</Text>
        </GridItem>

        <GridItem className="skills-card" backgroundColor={"lightgray"} _hover={{ bgColor: "white" }} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 604, 60, .2) 20px 20px 20px 10px"} border={"4px solid #98FB98"} p={"30px"} borderRadius={"8px"} >
          <Feature icon={<Icon as={FaGithub} className="skills-card-img" color={"black"} w={9} h={9} />} />
          <Text className="skills-card-name" fontWeight={"medium"}>GitHub</Text>
        </GridItem>

        <GridItem className="skills-card" backgroundColor={"lightgray"} _hover={{ bgColor: "white" }} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 604, 60, .2) 20px 20px 20px 10px"} border={"1px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Icon as={SiNetlify} className="skills-card-img" color={"blue.500"} w={9} h={9} />} />
          <Text className="skills-card-name" fontWeight={"medium"}>Netlify</Text>
        </GridItem>

        <GridItem className="skills-card" backgroundColor={"lightgray"} _hover={{ bgColor: "white" }} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 604, 60, .2) 20px 20px 20px 10px"} border={"4px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Icon as={TbBrandVercel} className="skills-card-img" color={"black"} w={10} h={10} />} />
          <Text className="skills-card-name" fontWeight={"medium"}>Vercel</Text>
        </GridItem>

      </SimpleGrid>

    </Box>

</Box>
}

export default Skills;