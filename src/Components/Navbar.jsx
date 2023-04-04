import navStyles from "./navbar.module.css";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = [{title:"Home",className:"nav-link home"},{title:"About",className:"nav-link about"},{title:"Skills",className:"nav-link skills"},{title:"Projects",className:"nav-link projects"},{title:"Contact",className:"nav-link contact"}]

// const Links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const NavLink = ({ children, href }) => (
  <a
    href={href}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    >
    {children}
  </a>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleResume = () => {
    window.open("https://drive.google.com/file/d/1jmx75Emk5SPGbWYykgeXXDgTlXQglI4I/view?usp=sharing","_blank")
  }

  return (
    <div className={navStyles.nav} id="nav-menu" >
      <Box bg={"#017278"} px={4} color={"gray.300"} boxShadow={"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box border={"1px solid gray"} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"} pl={"8px"} pr={"8px"} fontSize={20} fontWeight={"bold"}> VIVEK </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.title} href={`#${link.title.split(" ").join("").toLowerCase()}`} className={link.className}>{link.title}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <a id="resume-link-1" href="Vivek-Patel-Resume.pdf" target="_blank" download>
              <Button id="resume-button-1" color={"black"} onClick={handleResume}>Resume</Button>
            </a>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.title} href={`#${link.title.split(" ").join("").toLowerCase()}`} className={link.className}>{link.title}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}