import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.nf}>
      <h1>404</h1>
      <p>Esta página não foi encontrada.</p>
      <a href='/'>⬅️ Voltar</a>
    </div>
  )
}

export default NotFound
