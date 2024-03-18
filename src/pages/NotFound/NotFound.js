import styles from './NotFound.module.css'
import {NavLink} from 'react-router-dom'

//icon
import { FaArrowLeft } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <h1 className='fs-5 fw-bold mb-3'>Página não encontrada</h1>
      <NavLink style={{
          width:'100%',
          textDecoration:'none',
          marginBottom:'3%',
        }} to="/Home"><button className={styles.buttonsHome}>Voltar  ao início <FaArrowLeft /></button></NavLink>
    </div>
  )
}

export default NotFound
