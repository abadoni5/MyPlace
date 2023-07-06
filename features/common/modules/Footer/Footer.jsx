import React from 'react'
import { services, about, workWithUs, ourOffices } from './footerConsts'
import { SimpleGrid, Text, Link, Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { HiHomeModern } from 'react-icons/hi2'

const Footer = () => {
    return (
        <Box backgroundColor="#896991">
            <Box
                maxWidth="1280px" margin="0 auto" paddingY="3rem" paddingX={{ base: "2rem", sm: "0" }}
            >
                <SimpleGrid
                    columns='4'
                    color="whiteAlpha.700"
                    gap='1.7rem'
                    minChildWidth="150px"
                >
                    <Flex flexDirection="column">
                        <FooterHeader title="Services" />
                        {services.map((item) => (
                            <FooterLink {...item} />
                        ))}
                    </Flex>


                    <Flex flexDirection="column">
                        <FooterHeader title="About" />
                        {about.map((item) => (
                            <FooterLink {...item} />
                        ))}
                    </Flex>


                    <Flex flexDirection="column">
                        <FooterHeader title="Work With Us" />
                        {workWithUs.map((item) => (
                            <FooterLink {...item} />
                        ))}
                    </Flex>


                    <Flex flexDirection="column">
                        <FooterHeader title="Our Offices" />
                        {ourOffices.map((item) => (
                            <FooterLink {...item} />
                        ))}
                    </Flex>
                </SimpleGrid>
            </Box>
            <Box backgroundColor="#6a5170"
                display="flex"
                padding="2rem"
                alignItems="center"
                flexDirection="column"
                justifyContent="center"
                color="white"
            >
                <Box
                    display="flex"
                    gap="2"
                    alignItems="center"
                >
                    <HiHomeModern />
                    <Text
                        fontSize="lg"
                        fontWeight="black"
                    >
                        MySpace
                    </Text>
                </Box>
                <Text
                    marginTop="1rem"
                    fontSize="xs"
                >
                    © 2023 MySpace. All rights reserved.
                </Text>
            </Box>
        </Box>
    )
}

export default Footer

const FooterLink = ({ name, link }) => {
    return (
        <Text>
            <Link href={link}>
                {name}
            </Link>
        </Text>
    )
}

const FooterHeader = ({ title }) => {
    return (
        <Text as="h4" fontWeight="light" fontSize="xl" marginBottom="1rem">{title}</Text>
    )
}