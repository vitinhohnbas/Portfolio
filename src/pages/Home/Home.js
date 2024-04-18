import styles from './Home.module.css'

import { useEffect } from 'react';

//img
import user from '../../assets/images.PNG'
import cycle from '../../assets/cycle.png'
import miniblog from '../../assets/miniblog.png'

const Home = () => {
  const handleCycle = () =>{
    window.location.href = 'https://www.cycleutilities.store/'
  }

  const handleBlog = () =>{
    window.location.href = 'https://github.com/vitinhohnbas/projeto_blog_react'
  }

  useEffect(() => {
    const container = document.querySelector(`.${styles.containerUser}`)
    container.style.transition = "opacity 0.5s ease-in-out"

    const projects = document.querySelector(`.${styles.divProjects}`)
    projects.style.transition = "opacity 0.5s ease-in-out"

    function showProjects() {
      projects.style.opacity = "1"
    }

    function showContainer() {
        container.style.opacity = "1";
    }

    setTimeout(showContainer, 400)
    setTimeout(showProjects, 800)

    return () => {
      clearTimeout(showContainer, showProjects)
    };
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.containerUser}>
        <div className={styles.divTextUser}>
          <h1>👋 Olá, meu nome é</h1>
          <h2>Victor Henrique</h2>
          <h3>Sou um programador front-end em constante busca por evolução. Com uma sólida experiência nesse campo, meu objetivo é sempre entregar projetos com qualidade e eficiência.</h3>
          <p>Me encontre no <a href='https://www.linkedin.com/in/victor-henrique-405618284/' target='blank'>Linkedin 🔗</a> ou no <a href='https://github.com/vitinhohnbas' target='blank'>GitHub 🔗</a></p>
        </div>
        <img src={user} alt='Minha foto'/>
      </main>
      <section className={styles.divProjects}>
        <h1>Projetos 📂</h1>
        <p>Uma coleção de meus projetos</p>
        <div onClick={handleCycle} className={styles.containerProjects}>
          <img src={cycle}  alt='Cycle Utilities'/>
          <div className={styles.divTextProjects}>
            <h1>Meu projeto para vendas 🔗</h1>
            <p>Cansado de websites genéricos? A Cycle Utilities é a solução completa para você personalizar sua experiência a outro nível.</p>
            <ul>
              <li>React.js</li>
              <li>Bootstrap</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
        <div onClick={handleBlog} className={styles.containerProjects}>
          <img src={miniblog}  alt='Cycle Utilities'/>
          <div className={styles.divTextProjects}>
            <h1>Mini blog para estudo 🔗</h1>
            <p>Um simples mini blog que desenvolvi durante minhas aulas em React.js.</p>
            <ul>
              <li>React.js</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
