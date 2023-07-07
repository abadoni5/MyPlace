import React from 'react';
import { Box, Text, Fade } from '@chakra-ui/react';
import HeroForm from './HeroForm';

const HeroBanner = () => {
    const imageUrl = 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

    return (
        <>
            <Fade in>
                <Box
                    position="relative"
                    minHeight={{ base: '110vh', sm: '60vh' }}
                    background={`url(${imageUrl})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundAttachment="fixed"
                >
                    <Box position="absolute" width="100%" height="100%" opacity='0.7' backgroundColor="blue.900" />
                    <Box display='flex' flexDirection={{ base: 'column', sm: 'row' }} alignItems="center"
                        justifyContent={{ base: 'flex-start', sm: 'space-between' }}
                        maxWidth="1280px"
                        position="absolute"
                        color="white"
                        fontWeight="light"
                        left="0"
                        right="0"
                        bottom="0"
                        top="0"
                        padding="2rem"
                    >
                        <Box width={{ base: '100%', sm: '50%' }}>
                            <Text fontSize={{ base: '4xl', sm: '5xl' }}
                                lineHeight='shorter'
                                marginBottom='1.5rem'
                            >
                                Find your <strong style={{ color: 'black' }}>Perfect Place</strong> to stay today on <strong style={{ color: 'black' }}>MyPlace</strong>
                            </Text>
                            <Text fontSize={{ base: 'lg', sm: '2xl' }}
                                lineHeight='short'
                                marginBottom='1.5rem'
                            >
                                Find Your Dream Home. Discover Ideal Cities. Know the Cost of Living.
                            </Text>
                        </Box>
                        <Box width={{ base: '100%', sm: "auto" }} marginTop={{base: '2rem', sm: '0 '}}>
                            <HeroForm />
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </>
    );
};

export default HeroBanner;
