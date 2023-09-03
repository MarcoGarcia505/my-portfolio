import { Navigator } from '..'
import styles from './header.module.css'

function Header() {
  return (
    <header className={styles.header}>
        <Navigator></Navigator>
    </header>
  )
}

export default Header