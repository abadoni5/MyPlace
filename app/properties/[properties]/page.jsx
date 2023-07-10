'use client'
import React, { useEffect, useState } from 'react';
import { usePropertyFormat } from '@/features/common/hooks/usePropertyFormat';
import DefaultLayout from '@/features/Layouts/DefaultLayout';

const getData = () => {
    const property = require("features/data/Property.json")
    return property
}

const Page = () => {
    const [property, setProperty] = useState([]);

    useEffect(() => async {
        const fetchData = () => {
            const propertyData = await getData();
            setProperty(propertyData);
            console.log(propertyData);
        };
        fetchData();
    }, []);

    console.log(property);
    
    // const {
    //     address,
    //     propertyType,
    //     price,
    //     title,
    //     rooms,
    //     baths,
    //     purpose,
    //     sqSize,
    //     externalID,
    //     photos,
    //     description,
    //     coverVideo,
    //     panorama,
    //     amenities,
    // } = usePropertyFormat(property);

    return (
        <>
            <DefaultLayout>
                {/* Render your components here */}
            </DefaultLayout>
        </>
    );
};

export default Page;
