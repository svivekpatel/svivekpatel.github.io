import {
  Box,
    Button,
    Flex,
    Heading,
    Image,
    ScaleFade,
    Spacer,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';

function About(){
    return (
        <Stack id="about" className="about section" backgroundImage={"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
          <Box fontSize={"50px"} pb={"20px"} fontWeight={"bold"} mb={"30px"}><u>About</u></Box>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                id="user-detail-name"
                position={'relative'} color={"white"}>
                Hey, I'm Vivek Patel
              </Text>{' '}
              <Text color={'#98FB98'} mt={"20px"}>
                A Full Stack Web Developer
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} p={"20px"} bgColor={"white"} id="user-detail-intro">
            A highly skilled and solution-oriented full-stack web developer with expertise in the MERN stack, strong analytical and creative skills, and a willingness to learn new technologies. Proven ability to work collaboratively in a team environment, seeking opportunities to contribute to the success of startups.
            </Text>
            <Flex alignItems={'center'}>
          <a id="resume-link-2" href="Vivek-Patel-Resume.pdf" target="_blank" download>
              <Button id="resume-button-2">Resume</Button>
            </a>     
          </Flex>
          </Stack>
        </Flex>
        <Flex flex={1}  justify={"center"} align={"center"}>
          <Image
         
          borderRadius={"10px"}
          border={"10px solid #98FB98"}
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
          w={"60%"}
          h={"65%"}
            alt={'Profile Image'}
            className="home-img"
            src={
              'pic4.png'
            }
          />
        </Flex>
      </Stack>
    )
}
export default About;