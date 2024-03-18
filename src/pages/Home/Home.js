import styles from './Home.module.css'
import {NavLink} from 'react-router-dom'

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//img
import ImgProfile from '../../assets/imgprofile.PNG'

//icons
import { FaDollarSign } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiCoffeeCup } from "react-icons/gi";
import { IoFolderOpen } from "react-icons/io5";

const Home = () => {
  const handleOnClick = () => {
    navigator.clipboard.writeText('victorhenriquenbas@gmail.com')
    .then(() => {
      toast.success('E-mail copiado!');
    });
  }

  return (
    <div className={styles.home}>
      <img src={ImgProfile} alt='Imagem de perfil'/>
        <h1 className='fs-4 fw-bold mb-2'>Victor Henrique</h1>
        <h2 className='fs-6 fw-semibold mb-4'>Front-end Developer</h2>
        <NavLink style={{
          width:'100%',
          textDecoration:'none',
          marginBottom:'3%',
        }} to="/Contact"><button className={styles.buttonsHome}>Orçamento <FaDollarSign /></button></NavLink>
      <button style={{
        marginBottom:'3%',
      }} className={styles.buttonsHome} onClick={handleOnClick}>E-mail <MdEmail /></button>
      <button style={{
        marginBottom:'3%',
      }} className={styles.buttonsHome} data-bs-toggle="modal" data-bs-target="#exampleModal">Habilidades <GiCoffeeCup/> </button>
      <button style={{
        marginBottom:'3%',
      }} className={styles.buttonsHome} data-bs-toggle="modal" data-bs-target="#exampleModal2">Projetos <IoFolderOpen /> </button>
      <a style={{
          width:'100%',
          textDecoration:'none',
          marginBottom:'3%',
        }} href='https://github.com/vitinhohnbas' target='blank'><button className={styles.buttonsHome}>GitHub <FaGithub /></button></a>
        <a style={{
          width:'100%',
          textDecoration:'none',
        }} href='https://www.linkedin.com/in/victor-henrique-405618284/' target='blank'><button className={styles.buttonsHome}>Linkedin <FaLinkedin /></button></a>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">Minhas habilidades</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className={styles.divAbout}>
                <h1>Tecnologias: <span>HTML</span> / <span>CSS</span> / <span>SASS</span> / <span>Bootstrap</span> / <span>JavaScript</span> / <span>React</span></h1>
              </div>
              <div className={styles.divAbout}>
                <h1>Ferramentas: <span>Figma</span> / <span>Visual Studio Code</span> / <span>GitHub</span></h1>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 fw-bold" id="exampleModalLabel">Meus projetos</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <a style={{
                textDecoration:'none',
              }}q href='https://github.com/vitinhohnbas/projeto_blog_react' target='blank'>
                <div className={styles.divProjects}>
                  <h1 style={{
                    color:'black',
                  }} className='fs-5'>Blog</h1>
                  <div className={styles.divTags}>
                    <p className={styles.tags}>React</p>
                    <p className={styles.tags}>JavaScript</p>
                    <p className={styles.tags}>CSS</p>
                  </div>
                  <p style={{
                    color:'black',
                  }}>Blog simples que desenvolvi com Hooks em React</p>
                </div>
              </a>
              <a style={{
                textDecoration:'none',
              }} href='https://github.com/vitinhohnbas/VH-Dev-Website' target='blank'>
                <div className={styles.divProjects}>
                  <h1 style={{
                    color:'black',
                  }} className='fs-5'>Portfólio</h1>
                  <div className={styles.divTags}>
                    <p className={styles.tags}>React</p>
                    <p className={styles.tags}>JavaScript</p>
                    <p className={styles.tags}>CSS</p>
                    <p className={styles.tags}>Bootstrap</p>
                  </div>
                  <p style={{
                    color:'black',
                  }}>Este portfólio básico foi feito para mostrar que estou oferecendo meus serviços.</p>
                </div>
              </a>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default Home