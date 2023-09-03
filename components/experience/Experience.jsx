import React from 'react'
import styles from './experience.module.css'
import Image from 'next/image'

function Experience() {
  return (
    <section className={styles.experience}>
        <div className={styles.container_experience}>
            <div className={styles.container_imgs}>
                <div className={styles.lazyload_wrapper}>
                    <div className={styles.container_backs}>
                        <div className={styles.experience_linear_top}>
                            <svg width="1440" height="699" viewBox="0 0 1440 699" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <clipPath id="wave1">
                                        <path d="M779 21C682.673 -34.6485 598 40.7563 508 21.0002C418 1.24407 348 58.0011 220 36.0005C92 14 17 29.0005 9.99191e-08 44.9611C9.98018e-08 131.031 1.2729e-06 571.443 1.2729e-06 571.443L1611.5 571.443L1611.5 55C1611.5 55 1484 55.0005 1417 36.0005C1350 17.0005 1323.29 56.1967 1117 36.0005C910.71 15.8043 828.959 49.8618 779 21Z" fill="url(#paint0_linear)">
                                        </path>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className={styles.experience_linear_top}></div>
                        <div className={styles.experience_linear_buttom}></div>
                        <div className={styles.experience_linear_buttom_buttom}></div>
                        <div className={styles.experience_img}></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience