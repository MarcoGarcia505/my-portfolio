import React from 'react'
import styles from './about.module.css'
import {BsGithub, BsInstagram, BsLinkedin, BsFillFileEarmarkArrowDownFill} from 'react-icons/bs'
import me from '../../public/img/me.jpeg'
import Image from 'next/image'
import Link from 'next/link'

function About() {
  return (
    <section className={styles.section_about} id='about'>
        <div className={styles.about_container}>
            <h2 className={styles.about_container_tittle}>Hi. I´m Marco.</h2>
            <div className={styles.container_about_info}>
                <div className={styles.container_about_info_img}>
                    <div>
                        <Image width={350} height={350} src={me} onBlur="blur" className={styles.section_about_img} alt='markopolo404'/>
                        <div className={styles.container_about_info_redes}>
                            <a href="https://github.com/MarcoGarcia505" target="_blank" rel="GitHub">
                                <BsGithub href="#" className={styles.about_icon}></BsGithub> 
                            </a>
                            <a href="https://www.instagram.com/markopolo_ga/" target="_blank" rel="Instagram">
                                <BsInstagram href="#" className={styles.about_icon}></BsInstagram> 
                            </a>
                            <a href="https://www.linkedin.com/in/marco-garcia-071836270/"  target="_blank" rel="Linkedin">
                                <BsLinkedin href="#" className={styles.about_icon}></BsLinkedin> 
                            </a>
                            <a href="/files/CV-Marco-Aurelio.pdf"  download="CV - Marco.pdf" rel="Resume">
                                <BsFillFileEarmarkArrowDownFill href="#"  className={styles.about_icon}></BsFillFileEarmarkArrowDownFill> 
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.container_about_info_descriptions}>
                    <h3 className={styles.about_tittle}>
                    I´m a Full Stack Web Developer working remotely from 23°C Actopan, Mexico.
                    </h3>
                    <p className={styles.about_description}>Over the past 3+ years, I´ve worked in various areas of software developer, including front-end developer, Cloud, back-end, and app UI/UX. I´m proud to have worn many hats.</p>
                    <p className={styles.about_description}>
                    My determination drives me to delivering innovative solutions fuels my passion for building extraordinary software. Always seeking new challenges and knowledge to stay ahead in this fast growing industry.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About