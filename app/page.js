'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { DefaultContext } from 'react-icons'
import HeroBanner from '@/features/Home/Components/HeroBanner'
import DefaultLayout from '@/features/Layouts/DefaultLayout'

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <HeroBanner />
      </DefaultLayout>
    </>
  )
}
