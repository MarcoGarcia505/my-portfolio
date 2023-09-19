import Image from 'next/image'
import styles from './page.module.css'
import { About, Contact, Experience, Footer, Header, HeroSection, Intro, Projects } from '@/components'
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
      <Experience />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </Main>
    </>
  )
}
