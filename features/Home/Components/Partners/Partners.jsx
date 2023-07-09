import React from 'react'
import { partners } from "./partnersConsts"
import { Image, SimpleGrid } from "@chakra-ui/react"

const Partners = () => {
    return (
        <SimpleGrid columns={partners.length}
            margin="0 auto"
            minChildWidth="150px"
        >
            {partners.map((partner) => (
                <Image key={partner}
                    src={partner}
                    alignSelf="center"
                    padding={{ base: '2rem', sm: "3rem" }}
                />
            ))}
        </SimpleGrid>
    )
}

export default Partners
