import React from 'react'
import styles from './footer.module.css'
import { Contact} from '@/components'

function Footer() {
  return (
    <footer className={styles.container_footer} id='contact'>
        <div className={styles.container_footer_img}>
            <div className={styles.footer_img1}></div>
            <div className="lazyload-wrapper">
                <div className={styles.container_svg_footer}>
                    <svg width="1440" height="699" viewBox="0 0 1440 699" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <clipPath id="wave111">
                                <path d="M1192 63.1469C979.197 -18.7459 969.021 -3.8326 747.038 15.147C525.055 34.1266 456.426 81.6931 291.038 63.147C125.65 44.6009 38.0215 68.2247 -41.1011 88.0053C-41.1011 175.938 -41.1013 376.556 -41.1013 376.556L1481 376.556L1481 63.1469C1481 63.1469 1405.19 145.19 1192 63.1469Z" fill="url(#paint0_linear)"></path>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className={styles.container_svg_footer_2}>
                <svg width="1440" height="699" viewBox="0 0 1440 699" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <clipPath id="wave222">
                            <path d="M1228.1 33.4482C1015.3 -48.4447 894.983 44.5668 673 63.5464C451.017 82.526 492.527 51.9944 327.139 33.4483C161.751 14.9022 74.123 38.5259 -4.99951 58.3066C-4.99951 146.239 -4.99975 516.857 -4.99975 516.857L1517.1 516.857L1517.1 33.4481C1517.1 33.4481 1441.29 115.491 1228.1 33.4482Z"></path>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
        <div className={styles.containe_information_footer}>
            <Contact />
        </div>
        <div className={styles.container_footer_build}>
            <p>Designed & Built by MarKoPolo404</p>
        </div>
    </footer>
  )
}

export default Footer