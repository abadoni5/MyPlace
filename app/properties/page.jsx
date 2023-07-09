'use client'
import DefaultLayout from '@/features/Layouts/DefaultLayout/DefaultLayout';
import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import PropertyCard from 'features/common/modules/PropertyCard';

async function fetchHits() {
  try {
    const { hits } = require('features/data/Properties.json');
    return { properties: hits};
  } catch (error) {
    console.error('Error fetching properties:', error);
    return { properties: [] };
  }
}

const page = () => {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { properties } = await fetchHits();
      setProperties(properties);
    };

    fetchData();
  }, []);

  return (
    <DefaultLayout
      title="Properties"
      description='"Find your dream home with our real estate website. Browse through thousands of listings, connect with expert agents, and discover the perfect property for your lifestyle. Start your search today and make your homeownership dreams a reality.'
    >
      <Box backgroundColor="#f7f8f9" padding="3rem">
        <Box maxWidth="1280px" margin="0 auto">
          <SimpleGrid
            columns={{ base: 1, sm: 3 }}
            gap={{ base: '0', sm: '2rem' }}
          >
            {properties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </DefaultLayout>
  )
}

export default page
