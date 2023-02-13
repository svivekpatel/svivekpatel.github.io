import { Box, SimpleGrid, Icon, Text, Stack, Flex, Image } from '@chakra-ui/react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3,DiReact,DiMongodb } from 'react-icons/di';
import { SiJavascript,SiRedux,SiChakraui,SiTypescript,SiExpress } from 'react-icons/si';
import { FaNodeJs,FaGithub } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';


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

function Skills(){
    return <Box>
        <Box fontSize={"50px"}>Skills</Box>
        <Box p={4} w={"90%"} margin={"auto"}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4, }} spacing={10}>
        <Feature
          icon={<Image as={AiFillHtml5} color={"orange.500"} w={10} h={10} />}
          title={'HTML'}
        />
        <Feature
          icon={<Icon as={DiCss3} color={"blue.500"} w={10} h={10} />}
          title={'CSS'} 
        />
        <Feature
          icon={<Icon as={SiJavascript} color={"yellow.500"} bg={"black"} w={8} h={8} />}
          title={'JavaScript'}
        />
        <Feature
          icon={<Icon as={DiReact} color={"blue.500"} w={10} h={10} />}
          title={'React'}
        />
        <Feature
          icon={<Icon as={SiRedux} color={"purple.500"} w={8} h={8} />}
          title={'Redux'} 
        />
        <Feature
          icon={<Icon as={SiChakraui} color={"skyblue"} w={9} h={9} />}
          title={'Chakra UI'}
        />
         <Feature
          icon={<Icon as={DiMongodb} color={"green.500"} w={10} h={10} />}
          title={'MongoDB'} 
        />
        <Feature
          icon={<Icon as={FaNodeJs} color={"green.500"} w={10} h={10} />}
          title={'Node JS'}
        />

        <Feature
          icon={<Icon as={SiTypescript} color={"blue.500"} w={8} h={8} />}
          title={'TypeScript'} 
        />
        <Feature
          icon={<Icon as={SiExpress} color={"black"} w={9} h={9} />}
          title={'Express JS'}
        /> 
         <Feature
          icon={<Icon as={TbBrandNextjs} color={"black"} w={10} h={10} />}
          title={'Next JS'} 
        />
        <Feature border={"1px solid black"}
          icon={<Icon as={FaGithub} color={"black"} w={9} h={9} />}
          title={"GitHub"}

          
        />
      </SimpleGrid>
    </Box>
    </Box>
}

export default Skills;