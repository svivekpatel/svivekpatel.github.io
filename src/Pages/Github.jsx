import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar';



const Github = () => {
  return (
    <Box>
        <Box fontSize={"50px"}>Github</Box>



<Flex align={"center"}  justifyContent={"space-around"} p={"20px"}>
<img align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=svivekpatel&show_icons=true&locale=en&layout=compact" alt="svivekpatel"  />
</Flex>
 

<Flex align={"center"}  justifyContent={"space-around"} p={"20px"}>
<img align="center" src="https://github-readme-stats.vercel.app/api?username=svivekpatel&show_icons=true&locale=en" alt="svivekpatel"/>

 <img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=svivekpatel" alt="svivekpatel"/>
</Flex>
<Flex align={"center"}  justifyContent={"space-around"} p={"20px"}>
<GitHubCalendar username="svivekpatel" />
</Flex>

    </Box>
  )
}

export default Github