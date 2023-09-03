import Image from 'next/image'
import styles from './page.module.css'
import { About, Experience, Header, HeroSection, Intro } from '@/components'
import { Main } from '@/components'

export default function Home() {
  return (
    <>
    <Header/>
    <Main>
      {/* <HeroSection/>
      <Experience /> */}
      <Intro />
      <About />
    </Main>
    </>
  )
}
