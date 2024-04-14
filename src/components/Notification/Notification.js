import styles from './Notification.module.css'

//icon
import { IoClose } from "react-icons/io5";

const Notification = () => {
    const handleCloseNotify = () => {
        const container = document.querySelector(`.${styles.divNotification}`);
        
        container.style.display = "none";
    }

    return (
        <div className={styles.divNotification}>
            <h1>Quer fazer um projeto comigo? Me contate em meu e-mail. <span>(victorhenriquenbas@gmail.com)</span></h1>
            <IoClose className={styles.iconCloseNotification} onClick={handleCloseNotify}/>
        </div>
    )
}

export default Notification
