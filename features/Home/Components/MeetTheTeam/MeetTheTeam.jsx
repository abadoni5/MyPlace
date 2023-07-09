import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'
import { agents } from './agentConsts.js'
import AgentCard from './components/AgentCard/AgentCard.jsx'

const MeetTheTeam = () => {
    return (
        <Box maxWidth='1280px' margin='0 auto' >
            <Text fontSize={{ base: "4xl", sm: "5xl" }}
                lineHeight="shorter"
                fontWeight="light"
                paddingX="2rem"
                textAlign="center"
            >
                Meet The Team
            </Text>
            <Text fontSize="2xl"
                fontWeight="light"
                marginTop="1rem"
                marginBottom="3rem"
                paddingX="2rem"
                textAlign="center"
            >
                The best experts in the industry, at your service 24/7.
            </Text>
            <Flex direction={{ base: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems="center"
                gap='1.5rem'
            >
                {agents.map((agent) => (
                    <div key={agent.name} {...agent}>
                        <AgentCard key={agent.name} {...agent} />
                    </div>
                ))}
            </Flex>
        </Box>
    )
}

export default MeetTheTeam
 