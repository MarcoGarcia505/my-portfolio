import React from 'react'
import styles from './experience.module.css'
import { CardExperience } from '../index'
function Experience() {
  return (
    <section className={styles.experience} id='experience'>
        <div className={styles.container_experience}>
            <div className={styles.container_imgs}>
                <div className={styles.lazyload_wrapper}>
                    <div className={styles.container_backs}>
                        <div className={styles.experience_linear_top}>
                            <svg width="1440" height="699" viewBox="0 0 1440 699" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="wave1"><path d="M779 21C682.673 -34.6485 598 40.7563 508 21.0002C418 1.24407 348 58.0011 220 36.0005C92 14 17 29.0005 9.99191e-08 44.9611C9.98018e-08 131.031 1.2729e-06 571.443 1.2729e-06 571.443L1611.5 571.443L1611.5 55C1611.5 55 1484 55.0005 1417 36.0005C1350 17.0005 1323.29 56.1967 1117 36.0005C910.71 15.8043 828.959 49.8618 779 21Z" fill="url(#paint0_linear)"></path></clipPath></defs></svg>
                        </div>
                        <div className={styles.experience_linear_top_top}>
                            
                            <svg width="1440" height="699" viewBox="0 0 1440 699" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="wave2"><path d="M1357.5 177.563C1261 203.563 1267.5 135.27 1086 122C904.5 108.73 834.5 159 714 112C593.5 65 315 -11.0002 -31 1.99983C-31 88.8218 -31 663.999 -31 663.999L1472.86 663.999L1472.86 177.563C1472.86 177.563 1454 151.563 1357.5 177.563Z" fill="url(#paint0_linear)"></path></clipPath></defs></svg>
                        </div>
                        <div className={styles.experience_linear_buttom}>
                        

                            <svg width="1440" height="699" viewBox="0 0 1440 699" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="wave3"><path d="M872.997 77.086C660.195 -4.80687 653.497 83.6068 489.997 97.5861C326.497 111.565 310.746 85.3511 145.358 66.805C-20.0297 48.2589 -65.6199 90.9733 -144.742 110.754C-144.742 198.686 -150 739 -150 739L1508.86 739L1508.86 0.403809C1508.86 0.403809 1086.19 159.129 872.997 77.086Z"></path></clipPath></defs></svg>
                        </div>
                        <div className={styles.experience_img}></div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.container_info}>
            <div className={styles.container_info_tittle}>
                <h1 className={styles.info_tittle}>Experience</h1>
            </div>
            <div className={styles.container_cards}>
                <CardExperience 
                    tittle="Free Lance"
                    date="2018 - 2019"
                    description="As a freelancer I´ve been learning how to manage deadlines and how to communicate with clients. This is a great opportunity to explore a lot of new ideas from different people, and see how their projects come to light."
                />
                <CardExperience 
                    tittle="CWA"
                    date="2020 - 2023"
                    description="Working on CWA has been one of the best experiences and opportunities I ever had. Here I´ve learned to work on teams and to manage tasks and the time I spend on them. It also was a great moment to make new friends and have fun."
                />
            </div>
        </div>
    </section>
  )
}

export default Experience