import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HeroSlider from '../components/HeroSlider/HeroSlider'
import ShopCategories from '../components/ShopCategories/ShopCategories'
import Products from '../components/Products/Products'
import Blogs from '../components/Blogs/Blogs'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <ShopCategories />
      <Products />
      <Blogs />
    </>
  )
}
