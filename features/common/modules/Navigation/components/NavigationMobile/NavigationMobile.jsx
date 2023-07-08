import { Box, Flex, Text, Button, Menu, MenuList, MenuButton, MenuItem, IconButton } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import { HiHomeModern } from 'react-icons/hi2'
import Link from 'next/link'
import { navigationLinks } from '../NavigationDesktop/navigationConsts.js'

const NavigationMobile = () => {
    return (
        <div>
            <Box color="#896991" padding='2rem' backgroundColor="blue.50" display={{ base: "block", md: "none" }}>
                <Flex alignItems="center" justifyContent="space-between"  >
                    <Link href="/ ">
                        <Box display="flex" alignItems="center" gap="2">
                            <HiHomeModern />
                            <Text fontSize="2xl" fontWeight="black">
                                MyPlace
                            </Text>
                        </Box>
                    </Link>
                    <Menu>
                        <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" />
                        <MenuList>
                            {navigationLinks.map((item) => (
                                <NavigationLink {...item} />
                            ))}
                        </MenuList>
                    </Menu>
                </Flex>
            </Box>
        </div>
    )
}

export default NavigationMobile

const NavigationLink = ({ title, link, icon }) => {
    return (
        <Link href={link}>
            <MenuItem alignItems="center" gap="0.5rem">
                {icon}
                {title}
            </MenuItem>
        </Link>
    )
}