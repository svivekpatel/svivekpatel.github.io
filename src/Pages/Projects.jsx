import React from 'react'
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { SiChakraui } from 'react-icons/si';
import { DiHtml5 } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';


import {
    Container,
    Button,
    Image,
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  

function Projects() {
    const Feature = ({ text, icon, iconBg }) => {
        return (
          <Stack direction={'row'} align={'center'}> 
            <Flex
              w={8}
              h={8}
              align={'center'}
              justify={'center'}
              rounded={'full'}
              bg={iconBg}>
              {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
          </Stack>
        );
      };
  return (
    <Box pb={{ base: "20px", md: "30px", lg: "100px" }} backgroundImage={"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"}>  
        <Box fontSize={"50px"} color={"gray.300"} fontWeight={"bold"} mb={"30px"}><u>Projects</u></Box>
 <Container maxW={'95%'} py={10}>
    <Flex  gap={"15px"} columns={{ base: 1, md: 2 }}>
    <Flex boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px" >
        <Image
          p={"15px"}
          bgColor={"black"}
          border={"10px solid #98FB98"}
          alt={'Image'} 
          src={
            'myntra.jpg'
          }
        />
      </Flex>
      <Stack spacing={5} rounded={'md'} p={"15px"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} backgroundColor={"white"} >
       
        <Heading>Myntra Clone</Heading>
        <Text color={'gray.500'} fontSize={'lg'}>
        Myntra is an online fashion and lifestyle products store. Best online shopping site in India for fashion.
        </Text>
        <Stack
          spacing={4}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            />
          }>
          <Feature
            icon={
              <Icon as={FaReact} color={'yellow.500'} w={5} h={5} />
            }
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={'React'}
          />
          <Feature
            icon={<Icon as={SiRedux} color={'green.500'} w={5} h={5} />}
            iconBg={useColorModeValue('green.100', 'green.900')}
            text={'Redux'}
          />
          <Feature
            icon={
              <Icon as={SiChakraui} color={'purple.500'} w={5} h={5} />
            }
            iconBg={useColorModeValue('purple.100', 'purple.900')}
            text={'Chakra UI'}
          />
        
       
        </Stack>
        <Flex w={"100%"} justifyContent={"end"}  >
        <Button color={'black'}
          fontWeight={600}
          fontSize={'sm'}
          bg={"#98FB98"}
          mr={"20px"}
          p={5}
          rounded={'5px'}>LIVE</Button>
        <Button color={'black'}
          fontWeight={600}
          fontSize={'sm'}
          bg={"#98FB98"}
          mr={"20px"}
          p={5}
          rounded={'5px'}>GITHUB</Button>
        </Flex>
       
      </Stack>
     
    </Flex>
  </Container>
{/* toggl */}
  <Container  maxW={'90%'} py={10}>
    <Flex  gap={"15px"} columns={{ base: 1, md: 2 }}>
      <Stack spacing={5} rounded={'md'} p={"15px"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} backgroundColor={"white"} >
       
        <Heading>Toggl-Track Clone</Heading>
        <Text color={'gray.500'} fontSize={'lg'}>
        Toggl Track is a time tracking app that allows you to track your daily activities across different platforms.
        </Text>
        <Stack
          spacing={4}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            />
          }>
          <Feature
            icon={
              <Icon as={DiHtml5} color={'yellow.500'} w={5} h={5} />
            }
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={'HTML'}
          />
          <Feature
            icon={<Icon as={DiCss3} color={'green.500'} w={5} h={5} />}
            iconBg={useColorModeValue('green.100', 'green.900')}
            text={'CSS'}
          />
          <Feature
            icon={
              <Icon as={SiJavascript} color={'purple.500'} w={5} h={5} />
            }
            iconBg={useColorModeValue('purple.100', 'purple.900')}
            text={'JavaScript'}
          />
        
       
        </Stack>
        <Flex w={"100%"} justifyContent={"end"} >
        <Button color={'black'}
          fontWeight={600}
          fontSize={'sm'}
          bg={"#98FB98"}
          mr={"20px"}
          p={5}
          rounded={'5px'}>LIVE</Button>
        <Button color={'black'}
          fontWeight={600}
          fontSize={'sm'}
          bg={"#98FB98"}
          mr={"20px"}
          p={5}
          rounded={'5px'}>GITHUB</Button>
        </Flex>
       
      </Stack>
      <Flex boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px" >
        <Image
          p={"15px"}
          bgColor={"black"}
          border={"10px solid #98FB98"}
          alt={'Image'} 
          src={
            'toggl2.jpg'
          }
        />
      </Flex>
    </Flex>
  </Container>
{/* shine */}
  <Container  maxW={'95%'} py={10}>
    <Flex  gap={"15px"} columns={{ base: 1, md: 2 }}>
    <Flex boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px" >
        <Image
          p={"15px"}
          bgColor={"black"}
          border={"10px solid #98FB98"}
          alt={'Image'} 
          src={
            'shine2.jpg'
          }
        />
      </Flex>
      <Stack spacing={5} rounded={'md'} p={"15px"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} backgroundColor={"white"} >
       
        <Heading>Shine.com Clone</Heading>
        <Text color={'gray.500'} fontSize={'lg'}>
        Shine.com is an innovative and 2nd-largest, fastest growing online job and recruitment portal in India.
        </Text>
        <Stack
          spacing={4}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            />
          }>
          <Feature
            icon={
              <Icon as={DiHtml5} color={'yellow.500'} w={5} h={5} />
            }
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={'HTML'}
          />
          <Feature
            icon={<Icon as={DiCss3} color={'green.500'} w={5} h={5} />}
            iconBg={useColorModeValue('green.100', 'green.900')}
            text={'CSS'}
          />
          <Feature
            icon={
              <Icon as={SiJavascript} color={'purple.500'} w={5} h={5} />
            }
            iconBg={useColorModeValue('purple.100', 'purple.900')}
            text={'JavaScript'}
          />
        
       
        </Stack>
        <Flex w={"100%"} justifyContent={"end"} >
        <Button color={'black'}
          fontWeight={600}
          fontSize={'sm'}
          bg={"#98FB98"}
          mr={"20px"}
          p={5}
          rounded={'5px'}>LIVE</Button>
        <Button color={'black'}
          fontWeight={600}
          fontSize={'sm'}
          bg={"#98FB98"}
          mr={"20px"}
          p={5}
          rounded={'5px'}>GITHUB</Button>
        </Flex>
       
      </Stack>
    
    </Flex>
  </Container>
{/* trips */}
<Container  maxW={'90%'} py={10}>
    <Flex  gap={"15px"} columns={{ base: 1, md: 2 }}>
      <Stack spacing={5} rounded={'md'} p={"15px"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} backgroundColor={"white"} >
       
        <Heading>TripVillas Clone</Heading>
        <Text color={'gray.500'} fontSize={'lg'}>
        TripVillas is the Largest holiday home rental portal in Asia. with over 100000 holiday home destinations.
        </Text>
        <Stack
          spacing={4}
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.100', 'gray.700')}
            />
          }>
          <Feature
            icon={
              <Icon as={FaReact} color={'yellow.500'} w={5} h={5} />
            }
            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
            text={'React'}
          />
          <Feature
            icon={<Icon as={SiRedux} color={'green.500'} w={5} h={5} />}
            iconBg={useColorModeValue('green.100', 'green.900')}
            text={'Redux'}
          />
          <Feature
            icon={
              <Icon as={SiChakraui} color={'purple.500'} w={5} h={5} />
            }
            iconBg={useColorModeValue('purple.100', 'purple.900')}
            text={'Chakra UI'}
          />
        
       
        </Stack>
        <Flex w={"100%"} justifyContent={"end"} >
        <Button color={'black'}
          fontWeight={600}
          fontSize={'sm'}
          bg={"#98FB98"}
          mll={"20px"}
          p={5}
          rounded={'5px'}>LIVE</Button>
        <Button color={'black'}
          fontWeight={600}
          fontSize={'sm'}
          bg={"#98FB98"}
          ml={"20px"}
          p={5}
          rounded={'5px'}>GITHUB</Button>
        </Flex>
       
      </Stack>
      <Flex boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px" >
        <Image
        border={"10px solid #98FB98"}
          p={"15px"}
          bgColor={"black"}
          alt={'Image'} 
          src={
            'trips.jpg'
          }
        />
      </Flex>
    </Flex>
  </Container>
    </Box>
   
  )
}

export default Projects;