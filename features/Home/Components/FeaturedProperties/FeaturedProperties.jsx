import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const FeaturedProperties = ({ properties }) => {
    return (
        <Box backgroundColor="#eee6f0">
            <Box display="flex"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
                maxWidth="1280px"
                gap="1rem"
                margin="0 auto"
                color="gray.600"
                paddingY={{ base: '3rem', small: '6rem' }}
                height="30vh"
            >
                <Text fontSize={{ base: '4xl', sm: '5xl' }}
                    lineHeight="shorter"
                    fontWeight="light"
                    paddingX='2rem'
                    textAlign="center"
                >
                    Discover Our Handpicked Properties
                </Text>
                <Text
                    fontSize="2xl"
                    fontWeight="light"
                    textAlign='center'

                >
                    Select from our curated list of properties.
                </Text>
                
            </Box>
        </Box>
    )
}

export default FeaturedProperties
