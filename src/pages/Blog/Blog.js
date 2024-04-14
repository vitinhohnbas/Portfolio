import styles from './Blog.module.css'

import { useEffect } from 'react';

import jsonPublications from '../../publication.json'

const Blog = () => {
  useEffect(() => {
    const container = document.querySelector(`.${styles.divApresentation}`)
    container.style.transition = "opacity 0.5s ease-in-out"

    const publications = document.querySelector(`.${styles.divPublications}`)
    publications.style.transition = "opacity 0.5s ease-in-out"

    function showPublications() {
      publications.style.opacity = "1"
    }

    function showContainer() {
        container.style.opacity = "1";
    }

    setTimeout(showContainer, 400)
    setTimeout(showPublications, 800)

    return () => {
      clearTimeout(showContainer, showPublications)
    };
  }, []);

  return (
    <main className={styles.container}>
        <section className={styles.divApresentation}>
            <h1>Bem-vindo (a) ao meu blog!</h1>
            <p>Apresento a coleção de publicações da minha jornada.</p>
        </section>
        <section className={styles.divPublications}>
            <h1>Minhas postagens 🔎</h1>
            {jsonPublications.publications.map((item) => (
              <div key={item.id} className={styles.containerPublications}>
                <h1>{item.titulo}</h1>
                <h2>{item.data}</h2>
                <p>{item.desc}</p>
                <ul>
                  {item.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
            ))}
        </section>
    </main>
  )
}

export default Blog
