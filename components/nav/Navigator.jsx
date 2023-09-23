'use client'
import { useState } from 'react'
import styles from './navigator.module.css'
import {BiMenu} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'

function Navigator() {
    const [activate, setActivate] = useState(false);

    const handleChange = (item) => {
        setActivate(!activate);
    }
    return (
    <nav className={styles.header_container}>
        <div>
            <span className={styles.header_container_tittle}>MarKoPolo404</span>
        </div>
        <div className={styles.header_container_liks}>
            <ul>
                <li>
                    <a href="#about" className={styles.nav_liks}>About Me</a>
                </li>
                <li>
                    <a href="#experience" className={styles.nav_liks}>Experience</a>
                </li>
                <li>
                    <a href="#projects" className={styles.nav_liks}>Projects</a>
                </li>
                <li>
                    <a href="#contact" className={styles.nav_liks}>Contact</a>
                </li>
            </ul>
        </div>
        <div className={ `${activate ? styles.header_container_liks_movil_activate : styles.header_container_liks_movil}`}>
            <ul className={styles.container_links}>
                <li>
                    <a href="#about" onClick={handleChange} className={styles.nav_liks}>About Me</a>
                </li>
                <li>
                    <a href="#experience" onClick={handleChange} className={styles.nav_liks}>Experience</a>
                </li>
                <li>
                    <a href="#projects" onClick={handleChange} className={styles.nav_liks}>Projects</a>
                </li>
                <li>
                    <a href="#contact" onClick={handleChange} className={styles.nav_liks}>Contact</a>
                </li>
            </ul>
            <div className={styles.container_button_close}>
            <button onClick={handleChange} className={styles.container_link_button}><IoMdClose className={styles.container_link_button_iocon}/></button>
            </div>
        </div>
        <div className={styles.container_buttons}>
            <button onClick={handleChange} className={styles.container_link_button}><BiMenu className={styles.container_link_button_iocon}/></button>
        </div>
    </nav>
  )
}

export default Navigator