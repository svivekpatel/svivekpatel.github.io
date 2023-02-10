import {
    Button,
    Flex,
    Heading,
    Image,
    Spacer,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';

function About(){
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: '#98FB98',
                  zIndex: -1,
                }}>
                Hey, I'm Vivek Patel
              </Text>
              <br />{' '}
              <Text color={'#98FB98'} mt={"20px"}>
                A Full Stack Web Developer
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} >
            A highly skilled and solution-oriented full-stack web developer with expertise in the MERN stack, strong analytical and creative skills, and a willingness to learn new technologies. Proven ability to work collaboratively in a team environment, seeking opportunities to contribute to the success of startups.
            </Text>
          </Stack>
        </Flex>
        <Flex flex={1}  justify={"center"} align={"center"}>
          <Image
          borderRadius={"10px"}
          border={"10px solid #98FB98"}
          w={"65%"}
          h={"70%"}
          boxShadow={"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}
            alt={'Login Image'}
            src={
              'pic3.jpg'
            }
          />
        </Flex>
      </Stack>
    )
}
export default About;