import React from 'react'
import styles from './intro.module.css'
import Image from 'next/image'
import start from '@/public/img/img_intro/star-2.svg'

function Intro() {
  return (
    <section>
        <div className={styles.container_fonts}>
            <div className={styles.container_img1}></div>
            <div className={styles.container_img2}></div>
            <div className={styles.container_img3}></div>
            <div className={styles.container_img4}></div>
            <div className={styles.container_img5}></div>
            <div className={styles.container_img6}></div>
            <div className={styles.container_img8}>
                <svg style={{position: 'absolute'}}>
                    <clipPath id="wave6">
                        <path d="M752 111.068C649 86.0677 615 80.0679 507 71.0676C399 62.0674 436 65.0675 307 31.0674C178 -2.93263 1.50294e-10 0.0675119 1.50294e-10 0.0675119L2.09888e-06 942.068L1440 942.068L1440 250.068C1440 250.068 1358.49 228.063 1250 218.068C1141.51 208.072 1098 163.068 1017 157.068C936 151.068 855 136.068 752 111.068Z" fill="url(#paint0_linear)"></path>
                    </clipPath>
                </svg>
            </div>
            <div className={styles.container_img9}></div>
        </div>
        <div className={styles.main_tittle}>
            <h1 className={styles.tittle}>
                <span slot="title">
                    <span className={styles.container_tittle}>
                        <span className={styles.text_tittle}>
                            Hi. I´m Marco.
                            <span className={styles.start_left}>
                                <Image src={start} width={50} height={50}/> 
                            </span>
                        </span>
                    </span> 
                    <span className={styles.container_tittle}>
                        <span className={styles.text_tittle}>
                            Full Stack <span className={styles.text_tittle_change}>Web</span>  Development.
                        </span>
                    </span>
                </span>
            </h1>
            <div className={styles.main_subtittle}>
                <span className={styles.subtittle}>
                I´m passionate about crafting experiences and solutions that are engaging,<br/> accessible, and user-centric.
                </span>
            </div>
        </div>
        
    </section>
  )
}

export default Intro