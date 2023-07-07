'use client'
import Image from 'next/image';
import styles from './page.module.css';
import { DefaultContext } from 'react-icons';
import HeroBanner from '@/features/Home/Components/HeroBanner';
import DefaultLayout from '@/features/Layouts/DefaultLayout';
import { useProperties } from '@/props/index.jsx';
import FeaturedProperties from '@/features/Home/Components/FeaturedProperties';

export default function Home() {

  const properties = useProperties();
  console.log(properties);

  return (
    <>
      <DefaultLayout>
        <HeroBanner />
        <FeaturedProperties properties={properties} />
      </DefaultLayout>
    </>
  );
}