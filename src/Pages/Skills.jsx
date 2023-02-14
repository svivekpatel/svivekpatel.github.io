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
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
}

function Skills() {
  return <Box pb={{ base: "20px", md: "30px", lg: "100px" }} backgroundImage={"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"}>
    <Box color={"gray.300"} _hover={{color:"white"}} fontSize={"50px"} fontWeight={"bold"} mb={"30px"}><u>Skills</u></Box>
    <Box p={4} w={"90%"} margin={"auto"} mb={{ base: "20px", md: "30px", lg: "100px" }}>
      <SimpleGrid columns={{ base: 2, md: 4, }} spacing={"60px"}>
        <GridItem backgroundColor={"lightgray"} _hover={{bgColor:"white"}} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}  border={"4px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature
            icon={<Image as={AiFillHtml5} color={"orange.500"} w={10} h={10} />}
          />
          <Text fontWeight={"medium"}>HTML</Text>
        </GridItem>
        <GridItem backgroundColor={"lightgray"} _hover={{bgColor:"white"}} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}  border={"2px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature
            icon={<Icon as={DiCss3} color={"blue.500"} w={10} h={10} />}
          />
          <Text fontWeight={"medium"}>CSS</Text>
        </GridItem>
        <GridItem backgroundColor={"lightgray"} _hover={{bgColor:"white"}} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}  border={"4px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature
            icon={<Icon as={SiJavascript} color={"yellow.500"} bg={"black"} w={8} h={8} />}
          />
          <Text fontWeight={"medium"}>JavaScript</Text>
        </GridItem>
        <GridItem backgroundColor={"lightgray"} _hover={{bgColor:"white"}} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}  border={"2px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature
            icon={<Icon as={DiReact} color={"blue.500"} w={10} h={10} />}
          />
          <Text fontWeight={"medium"}>React</Text>
        </GridItem>
        <GridItem backgroundColor={"lightgray"} _hover={{bgColor:"white"}} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}  border={"2px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature
            icon={<Icon as={SiRedux} color={"purple.500"} w={8} h={8} />}
          />
          <Text fontWeight={"medium"}>Redux</Text>
        </GridItem>

        <GridItem backgroundColor={"lightgray"} _hover={{bgColor:"white"}} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}  border={"4px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Icon as={SiChakraui} color={"skyblue"} w={9} h={9} />}/>
          <Text fontWeight={"medium"}>Chakra UI</Text>
        </GridItem>

        <GridItem backgroundColor={"lightgray"} _hover={{bgColor:"white"}} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}  border={"2px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Icon as={DiMongodb} color={"green.500"} w={10} h={10} />}/>
          <Text fontWeight={"medium"}>MondoDB</Text>
        </GridItem>

        <GridItem backgroundColor={"lightgray"} _hover={{bgColor:"white"}} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}  border={"4px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Icon as={FaNodeJs} color={"green.500"} w={10} h={10} />}/>
          <Text fontWeight={"medium"}>NodeJS</Text>
        </GridItem>

        <GridItem backgroundColor={"lightgray"} _hover={{bgColor:"white"}} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}  border={"4px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature
            icon={<Icon as={SiTypescript} color={"blue.500"} w={8} h={8} />}
          />
          <Text fontWeight={"medium"}>TypeScript</Text>
        </GridItem>
        <GridItem backgroundColor={"lightgray"} _hover={{bgColor:"white"}} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}  border={"2px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature
            icon={<Icon as={SiExpress} color={"black"} w={9} h={9} />}
          />
          <Text fontWeight={"medium"}>Express JS</Text>
        </GridItem>
        <GridItem backgroundColor={"lightgray"} _hover={{bgColor:"white"}} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}  border={"4px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature
            icon={<Icon as={TbBrandNextjs} color={"black"} w={10} h={10} />}
          />
          <Text fontWeight={"medium"}>Next JS</Text>
        </GridItem>
        <GridItem backgroundColor={"lightgray"} _hover={{bgColor:"white"}} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}  border={"2px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature
            icon={<Icon as={FaGithub} color={"black"} w={9} h={9} />}
          />
          <Text fontWeight={"medium"}>GitHub</Text>
        </GridItem>
      </SimpleGrid>
    </Box>






    <Box fontSize={"50px"} color={"gray.300"} _hover={{color:"white"}} fontWeight={"bold"} mb={"30px"}><u>Tools</u></Box>
    <Box p={4} w={"90%"} margin={"auto"}>
      <SimpleGrid columns={{ base: 2, md: 4, }}  spacing={"60px"}>

        <GridItem backgroundColor={"lightgray"} _hover={{bgColor:"white"}} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}  border={"1px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Image as={SiVisualstudiocode} color={"blue.600"} w={8} h={8} />} />
          <Text fontWeight={"medium"}>VS Code</Text>
        </GridItem>

        <GridItem backgroundColor={"lightgray"} _hover={{bgColor:"white"}} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}  border={"4px solid #98FB98"} p={"30px"} borderRadius={"8px"} >
          <Feature icon={<Icon as={FaGithub} color={"black"} w={9} h={9} />} />
          <Text fontWeight={"medium"}>GitHub</Text>
        </GridItem>

        <GridItem backgroundColor={"lightgray"} _hover={{bgColor:"white"}} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}  border={"1px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Icon as={SiNetlify} color={"blue.500"} w={9} h={9} />} />
          <Text fontWeight={"medium"}>Netlify</Text>
        </GridItem>

        <GridItem backgroundColor={"lightgray"} _hover={{bgColor:"white"}} margin={"auto"} justifyContent={"center"} alignItems={"center"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}  border={"4px solid #98FB98"} p={"30px"} borderRadius={"8px"}>
          <Feature icon={<Icon as={TbBrandVercel} color={"black"} w={10} h={10} />} />
          <Text fontWeight={"medium"}>Vercel</Text>
        </GridItem>

      </SimpleGrid>

    </Box>
  </Box>
}

export default Skills;