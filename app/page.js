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
import Partners from '@/features/Home/Components/Partners/Partners';
import Testimonials from '@/features/Home/Components/Testimonials/Testimonials';
import { get } from 'react-hook-form';
import { getProperties } from '@/features/Home/Components/api/getProperties';

async function fetchHits() {
  const properties = await getProperties(5);
  return { properties };
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
        <Partners />
        <Testimonials />
      </DefaultLayout>
    </Box>
  );
}
