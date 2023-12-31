import { Box, Flex, Text, Button } from "@chakra-ui/react"
import { HiHomeModern } from 'react-icons/hi2'
import Link from 'next/link'
import { navigationLinks } from './navigationConsts.js'

const NavigationDesktop = () => {
    return (
        <Box color="#896991" paddingY='2rem' backgroundColor="" display={{ base: "none", md: "block" }}>
            <Box maxWidth="1280px" margin="0 auto">
                <Flex alignItems="center" justifyContent="space-between" >
                    <Link href="/ ">
                        <Box display="flex" alignItems="center" gap="2">
                            <HiHomeModern />
                            <Text fontSize="2xl" fontWeight="black">
                                MyPlace
                            </Text>
                        </Box>
                    </Link> 
                    <Flex gap="12" alignItems="center" fontWeight="medium">
                        {navigationLinks.map((item) => (
                            <NavigationLink {...item} />
                        ))}
                        <Button padding="1.5rem" backgroundColor="#896991" color="#fff" fontSize="0.8rem" fontWeight="medium">
                            Create Listing
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}

export default NavigationDesktop

const NavigationLink = ({ title, link, icon }) => {
    return (
        <Link href={link}>
            <Flex alignItems="center" gap="0.5rem">
                {icon}
                {title}
            </Flex>
        </Link>
    )
}