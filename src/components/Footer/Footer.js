import styles from './Footer.module.css'

//icons
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  const handleGithub = () =>{
    window.location.href = 'https://github.com/vhnb'
  }

  const handleLinkedin = () =>{
    window.location.href = 'https://www.linkedin.com/in/victor-henrique-405618284/'
  }

  return (
    <footer>
        <h1>© 2024 Victor H.</h1>
        <div className={styles.divIconsFooter}>
            <FaLinkedin onClick={handleLinkedin} style={{
                color:'#e3e3e3',
                fontSize:'1.2em',
                marginRight:'3%',
                marginLeft:'3%',
                cursor:'pointer',
            }} />
            <FaGithub onClick={handleGithub} style={{
                color:'#e3e3e3',
                fontSize:'1.2em',
                marginRight:'3%',
                marginLeft:'3%',
                cursor:'pointer',
            }} />
        </div>
    </footer>
  )
}

export default Footer
