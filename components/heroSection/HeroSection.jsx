import React from 'react'
import styles from './heroSection.module.css'
import Image from 'next/image'
import me from '../../public/img/me.jpeg'
function HeroSection() {
  return (
    <section className={styles.section_container}>
        <div>
            <div className={styles.section_container_img}></div>
            <div className={styles.section_container_blur}></div>
            <div className={styles.section_container_img_2}></div>
            <div className={styles.section_container_img_3}>
                <svg style={{position: 'absolute'}}>
                    <clipPath id="clip">
                        <path d="M1175.65 35.7644C962.846 -46.1285 865.751 35.6288 643.768 54.6084C421.786 73.588 391.68 33.0436 226.292 14.4975C60.9034 -4.0486 11.1228 90.8729 -67.9998 110.654C-67.9998 198.586 -67.9998 516 -67.9998 516L1508.19 516L1508.19 8.45359C1508.19 8.45359 1388.84 117.807 1175.65 35.7644Z"></path>
                    </clipPath>
                </svg>
            </div>
            <div className={styles.section_container_img_4}></div>
        </div>
        <div className={styles.section_information}>
            <div className={styles.section_description}>
                <h1 className={styles.section_description_tittle}>i´m <br/>Full Stack Developer</h1>
                <p className={styles.section_description_subDescription}>
                    Ya tres años creando soluciones digitales para un mercado tan cambiante, implementando tegnologias y metodologias de vanguardia  
                </p>
            </div>
            <div className={styles.section_information_container_img}>
                <Image width={300} height={300} src={me} onBlur='blur' className={styles.section_description_img} alt='markopolo404'/>
            </div>
        </div>
    </section>
  )
}

export default HeroSection