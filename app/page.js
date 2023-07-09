'use client'
import Image from 'next/image';
import styles from './page.module.css';
import { DefaultContext } from 'react-icons';
import HeroBanner from '@/features/Home/Components/HeroBanner';
import DefaultLayout from '@/features/Layouts/DefaultLayout';
import FeaturedProperties from '@/features/Home/Components/FeaturedProperties/FeaturedProperties.jsx';
import MeetTheTeam from 'features/Home/Components/MeetTheTeam';
import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

async function fetchHits() {
  try {
    const { hits } = require('features/data/Properties.json');
    return { properties: hits.slice(0, 5) };
  } catch (error) {
    console.error('Error fetching properties:', error);
    return { properties: [] };
  }
}

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { properties } = await fetchHits();
      setProperties(properties);
    };

    fetchData();
  }, []);

  return (
    <Box>
      <DefaultLayout>
        <HeroBanner />
        <FeaturedProperties properties={properties} />
        <MeetTheTeam />
      </DefaultLayout>
    </Box>
  );
}
