import { Box, Flex, Grid } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar';


const Github = () => {
  return (
    <Box  margin={"auto"} gap={"5px"} pb={{ base: "20px", md: "30px", lg: "100px" }}>
        <Box fontSize={{ base: "30px", md: "40px", lg: "50px" }} pb={"20px"} fontWeight={"bold"} mb={"30px"}><u>Github</u></Box>



<Flex align={"center"} w={{ base: '100%', md: '80%', lg: '30%' }} margin={"auto"} bg={"black"} boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px" marginBottom={"40px"} border={"10px solid #98FB98"} justifyContent={"center"} p={"20px"}>
<img  align="center" id="github-stats-card" src="https://github-readme-stats.vercel.app/api/top-langs?username=svivekpatel&show_icons=true&locale=en&layout=compact" alt="svivekpatel"  />
</Flex>

<Flex align={"center"} w={{ base: '100%', md: '80%', lg: '36%' }} margin={"auto"} bg={"black"} boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px" marginBottom={"40px"} border={"10px solid #98FB98"}  justifyContent={"center"} p={"20px"}>
<img  align="center" id="github-top-langs" src="https://github-readme-stats.vercel.app/api?username=svivekpatel&show_icons=true&locale=en" alt="svivekpatel"/>
</Flex>

<Flex align={"center"} w={{ base: '100%', md: '80%', lg: '38%' }} margin={"auto"} bg={"black"} boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px" marginBottom={"40px"} border={"10px solid #98FB98"}  justifyContent={"center"} p={"20px"}>
 <img id="github-streak-stats" align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=svivekpatel" alt="svivekpatel"/>
</Flex>

<Flex align={"center"} w={{ base: '100%', md: '80%', lg: '66%' }} margin={"auto"} bg={"black"} color={"white"} boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px" marginBottom={"40px"} border={"10px solid #98FB98"}  justifyContent={"center"} p={"20px"}>
<GitHubCalendar className="react-activity-calendar" username="svivekpatel" />
</Flex>

    </Box>
  )
}

export default Github