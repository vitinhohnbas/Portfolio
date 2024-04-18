import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav>
        <a href='/' className={styles.titleNav}>Victor H.</a>
        <a href='/blog'>Blog 🔗</a>
    </nav>
  )
}

export default NavBar
