import React from 'react'
import styles from './about.module.css'
import {BsGithub} from 'react-icons/bs'
import me from '../../public/img/me.jpeg'
import Image from 'next/image'

function About() {
  return (
    <section className={styles.section_about}>
        <div className={styles.about_container}>
            <h2 className={styles.about_container_tittle}>Hi. I'm Marco.</h2>
            <div className={styles.container_about_info}>
                <div className={styles.container_about_info_img}>
                    <div>
                        <Image width={350} height={350} src={me} onBlur='blur' className={styles.section_about_img}/>
                        <div className={styles.container_about_info_redes}>
                           <BsGithub width={100} height={100}></BsGithub> 
                        </div>
                    </div>
                </div>
                <div className={styles.container_about_info_descriptions}>
                    <h3 className={styles.about_tittle}>
                    I'm a Full Stack Web Development working remotely from 23°C Actopan, Mexico.
                    </h3>
                    <p className={styles.about_description}>Over As an experienced front-end software developer and freelancer, my journey spans over 3 years in web development. Driven by curiosity, I thrive on exploring and mastering emerging technologies.</p>
                    <p className={styles.about_description}>My dedication to delivering innovative solutions fuels my passion for building extraordinary software. Always seeking new challenges and knowledge to stay ahead in this fast growing industry.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About