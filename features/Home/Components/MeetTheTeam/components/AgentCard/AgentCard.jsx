import React from 'react'
import { Box, Flex, Text, Image } from '@chakra-ui/react'

const AgentCard = ({ name, title, image, description }) => {
  return (
    <Box backgroundColor="#f1f1f14a" padding="2rem"
      display="flex" justifyContent="center" alignItems="center" marginBottom={{ base: '1rem', sm: '0 ' }}
      flexDirection="column"
    >
      <Image
        width="10rem"
        height="10rem"
        objectFit="cover"
        src={image}
        borderRadius="full"
        marginBottom="2rem"
        shadow="md"

      />
      <Text
        color="black"
        fontWeight="bold"
        fontSize="xl"
      >
        {name}
      </Text>
      <Text fontSize="lg">
        {title}
      </Text>
      <Text
        noOfLines="4"
        fontSize="md"
        textAlign="center"
        fontWeight="light"
        marginTop="1rem"
        color="gray.600"
      >
        {description}
      </Text>
    </Box>
  )
}

export default AgentCard
