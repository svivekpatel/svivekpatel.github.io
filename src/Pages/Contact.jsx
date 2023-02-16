import React from 'react'
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Link,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
    MdInsertComment,
    Md10K,
  } from 'react-icons/md';
  import { BsGithub, BsPerson, BsLinkedin } from 'react-icons/bs';
const Contact = () => {
  return (
    <Box id="contact">
      
    <Box fontSize={{ base: "30px", md: "40px", lg: "50px" }} pb={"20px"} fontWeight={"bold"} mb={"30px"}><u>Contact</u></Box>

    <Container maxW="full" mt={0} centerContent>
      <Flex>
        <Box
        border={"4px solid #98FB98"}
        boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.20) 20px 20px 40px 2px"}
          bg="white"
          color="black"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Get in touch</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Have a feedback? Fill the form.
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3}>
                      <Button
                        id="contact-phone"
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="gray.600"
                        _hover={{ border: '2px solid green' }}
                        leftIcon={<MdPhone color="green" size="20px" />}>
                        +91-6261405449
                      </Button>
                      <Button
                        id="contact-email"
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="gray.600"
                        _hover={{ border: '2px solid green' }}
                        leftIcon={<MdEmail color="green" size="20px" />}>
                        vp133202@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="gray.600"
                        _hover={{ border: '2px solid green' }}
                        leftIcon={<MdLocationOn color="green" size="20px" />}>
                        Madhya Pradesh, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">
                    
                    <Link href={"https://github.com/svivekpatel"} id="contact-github">
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#98FB98' }}
                      icon={<BsGithub size="28px" />}
                    />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/svivekpatel/"}  id="contact-linkedin">
                         <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#98FB98' }}
                      icon={<BsLinkedin size="28px" />}
                    />
                  </Link>
                    <Link href={"https://github.com/svivekpatel"}>
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#98FB98' }}
                      icon={<MdFacebook size="28px" />}
                    />
                    </Link>
                    
                   </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="lightgray" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="gray">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="gray">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray"
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#98FB75"
                          color="black">
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>



    <Box mt={"20px"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"} p={"15px"} bg={"#98FB98"}>Designed with ❤ by Vivek Patel</Box>
    </Box>
  )
}

export default Contact;