import React from 'react'
import { usePropertyFormat } from 'features/common/hooks/usePropertyFormat.js'

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
        <>
            {price}
        </>
    )
}

export default PropertyCard
