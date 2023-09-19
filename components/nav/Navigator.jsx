import styles from './navigator.module.css'

function Navigator() {
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
    </nav>
  )
}

export default Navigator