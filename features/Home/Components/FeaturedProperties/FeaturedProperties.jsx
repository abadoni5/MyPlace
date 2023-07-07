import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const FeaturedProperties = ({ properties }) => {
    return (
        <Box backgroundColor="blue50">
            <Box maxWidth="1280px" margin="0 auto" color="gray.600" paddingY={{ base: '3rem', small: '6rem' }}>
                <Text fontSize={{ base: '4xl', sm: '5xl' }}
                    lineHeight="shorter"
                    fontWeight="light"
                    paddingX='2rem'
                    textAlign="center"
                >
                    Discover our handpicked properties
                </Text>
                <Text
                    fontSize="2xl"
                    fontWeight="light"
                    textAlign="center"
                    marginTop="1rem"
                    marginBottom="3rem"
                    paddingX='2rem'
                >
                    A selection of exclusive homes designed by our experts
                </Text>
            </Box>
        </Box>
    )
}

export default FeaturedProperties
