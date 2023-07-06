'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Navigation from 'features/data/common/modules/Navigation/Navigation.js'
import Footer from 'features/data/common/modules/Footer/Footer.jsx'

export default function Home() {
  return (
    <>
      <Navigation />
      <Footer />
    </>
  )
}
