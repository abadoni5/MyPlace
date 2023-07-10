import React from 'react'
import { usePropertyFormat } from 'features/common/hooks/usePropertyFormat.js'
import { Box, Badge, Text, HStack, Flex } from '@chakra-ui/react'
import { TbBed, TbBath, TbRuler } from 'react-icons/tb'
import Link from 'next/link'

const PropertyCard = (property) => {

    const {
        address,
        coverPhoto,
        propertyType,
        price,
        title,
        rooms,
        baths,
        purpose,
        sqSize,
        externalID,
    } = usePropertyFormat(property)

    return (
        <Box marginBottom="4rem"
            backgroundColor="blue.50"
        >
            <Link href={`/properties/${externalID}`}>
                <Box backgroundImage={`url("${coverPhoto}")`} height="250px"
                    backgroundPosition="center center"
                    backgroundSize="cover"
                    postition="realative"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <Box margin="1rem">
                        <Badge colorScheme="green">{purpose}</Badge>
                    </Box>
                    <Box height="50%"
                        bgGradient="linear(to-t, #0a0b1cd9, #ffffff00 100%)"
                        display="flex"
                        alignItems="Flex-end"
                        padding="1rem"
                    >
                        <Text fontSize="3xl" fontWeight="medium"
                            color="white"
                        >
                            {price}
                        </Text>
                    </Box>
                </Box>
                <Box padding="1.5rem">
                    <Text>
                        {propertyType}
                    </Text>
                    <Text fontWeight="light" fontSize="sm" isTruncated>
                        {address}
                    </Text>
                    <Text isTruncated>
                        {title}
                    </Text>
                    <HStack spacing="1.3rem" marginTop="1rem">
                        <Flex alignItems="center" gap="0.3rem"
                        >
                            <TbBed />
                            {rooms}
                        </Flex>

                        <Flex alignItems="center" gap="0.3rem"
                        >
                            <TbBath />
                            {baths}
                        </Flex>

                        <Flex alignItems="center" gap="0.3rem"
                        >
                            <TbRuler />
                            {sqSize}&nbsp;m<sup>2</sup>
                        </Flex>
                    </HStack>
                </Box>
            </Link>
        </Box>
    )
}

export default PropertyCard
