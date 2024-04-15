import styles from './PageBlog.module.css'
import jsonPublications from '../../publication.json'
import { useParams } from 'react-router-dom'

import { FaArrowLeft } from "react-icons/fa6";

const PageBlog = () => {
    const { publicationID } = useParams()

    const publication = jsonPublications.publications.find(publication => publication.id === parseInt(publicationID))

    if (!publication) {
        return <div>Produto não encontrado.</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerPost}>
                <div className={styles.headerPost}>
                    <div>
                        <a href='/blog'><FaArrowLeft className={styles.iconBack} /> Voltar</a>
                        <h1>{publication.titulo}</h1>
                    </div>
                    <h2>{publication.data}</h2>
                </div>
                <div className={styles.tagsPost}>
                    <ul>
                        {publication.tags.map((tag, index) => (
                            <li key={index}>#{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles.bodyPost}>
                    <p>{publication.extendedDesc}</p>
                </div>
            </div>
        </div>
    )
}

export default PageBlog
