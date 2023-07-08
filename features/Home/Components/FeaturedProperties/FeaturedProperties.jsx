import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import PropertySlider from './Components/PropertySlider/PropertySlider'

const FeaturedProperties = ({ properties }) => {
    return (
        <Box backgroundColor="">
            <Box 
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
                    marginTop="3rem"
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
                <PropertySlider properties={properties} />
            </Box>
        </Box>
    )
}

export default FeaturedProperties
