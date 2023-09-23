import Image from 'next/image'
import styles from './page.module.css'
import { About, Experience, Footer, Header, Intro, Projects } from '../components'
import { Main } from '@/components'

export default function Home() {
  return (
    <>
    <Header/>
    <Main>
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </Main>
    </>
  )
}
