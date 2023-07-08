import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import PropertySlider from './Components/PropertySlider/PropertySlider'

const FeaturedProperties = ({ properties }) => {
    return (
        <Box backgroundColor="blue.50" >
            <Box
                maxWidth="1280px"
                margin="0 auto"
                color="gray.600"
                paddingY={{ base: '3rem', sm: '6rem' }}
            >
                <Text
                    fontSize={{ base: '4xl', sm: '5xl' }}
                    lineHeight="shorter"
                    fontWeight="light"
                    paddingX="2rem"
                    textAlign="center"
                >
                    Discover Our Handpicked Properties
                </Text>
                <Text
                    fontSize="2xl"
                    fontWeight="light"
                    marginTop="1rem"
                    marginBottom="3rem"
                    paddingX="2rem"
                    textAlign="center"
                >
                    Select from our curated list of properties.
                </Text>
                <PropertySlider properties={properties} />
            </Box>
        </Box>
    )
}

export default FeaturedProperties
