import {
  Box,
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
  } from '@chakra-ui/react';
  import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

function About(){
    return (
      <Box id="about" className="about section" pt={"20px"}>
        <Box fontSize={{ base: "30px", md: "40px", lg: "50px" }} color={"gray.600"} fontWeight={"bold"} ><u>About</u></Box>
<Stack mt={{lg:"-80px"}} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>       
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} ml={"50px"} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                id="user-detail-name"
                position={'relative'} color={"gray.600"}>
                Hey, I'm Vivek Patel
              </Text>{' '}
              <Text color={'#70956E'} mt={"20px"}>
                A Full Stack Web Developer
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} p={"20px"} bgColor={"white"} id="user-detail-intro">
            A highly skilled and solution-oriented full-stack web developer with expertise in the MERN stack, strong analytical and creative skills, and a willingness to learn new technologies. Proven ability to work collaboratively in a team environment, seeking opportunities to contribute to the success of startups.
            </Text>
            <Flex alignItems={'center'} >
          <a id="resume-link-2" href="Vivek-Patel-Resume.pdf" target="_blank" download>
              <Button id="resume-button-2" mr={"20px"}>Resume</Button>
            </a>  
            <a id="resume-link-2" p={"0px"} href="https://www.linkedin.com/in/svivekpatel/" target="_blank">
              <Button id="resume-button-2" mr={"20px"}><AiFillLinkedin size={"30"}/></Button>
            </a> 
            <a id="resume-link-2" href="https://github.com/svivekpatel" target="_blank">
              <Button id="resume-button-2"><AiFillGithub size={"30"}/></Button>
            </a>
          </Flex>
          </Stack>
        </Flex>
        <Flex flex={1}  justify={"center"} align={"center"}>
          <Image
          border={"10px solid gray"}
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
          w={"55%"}
          h={"60%"}
            alt={'Profile Image'}
            className="home-img"
            src={
              'pic4.png'
            }
          />
        </Flex>
      </Stack>
      </Box>
        
    )
}
export default About;