import { useState } from 'react';
import styles from './Contact.module.css'
import {NavLink} from 'react-router-dom'

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//icon
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = async () => {
    if (name.trim() !== '' && email.trim() !== '' && message.trim() !== '' && selectedOption.trim() !== '') {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const webhookUrl = 'https://discordapp.com/api/webhooks/1078142872592850994/OoXWkMbOpknaPQ2u8bzrFf9hTG5HJLcr1ZZ6Jf-a3nhUlxEpVtwYsHZ2RNI0CCAZafI4';
        await fetch(webhookUrl, {
          method: "POST",
          body: JSON.stringify({ content: `**Nome:** ${name}\n**E-mail:** ${email}\n**Descrição:** ${message}\n**Tipo:** ${selectedOption}` }),
          headers: {
            "Content-Type": "application/json"
          }
        });
        toast.success("Mensagem enviada!");
      } catch (error) {
        toast.error("Erro ao enviar: " + error);
      }
    } else {
      toast.warning("Complete os campos.");
    }
  };

  return (
    <div className={styles.contact}>
      <h1 className='fs-5 fw-bold mb-3'>Orçamento</h1>
      <input type='text' placeholder='Nome completo:' value={name} onChange={(e) => setName(e.target.value)} />
      <input type='text' placeholder='E-mail ou Discord ID:' value={email} onChange={(e) => setEmail(e.target.value)} />
      <textarea type='text' placeholder='Descreva seu projeto...' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <select style={{
        backgroundColor:'transparent',
        border:'1px solid #c7c7c7',
        padding:'5%',
        borderRadius:'0.6rem',
        marginBottom:'3%',
      }} className="form-select" aria-label="Selecione o tipo" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="">Selecione o tipo:</option>
        <option value="Website">Website</option>
        <option value="Bots Discord">Bots Discord</option>
      </select>
      <button className={styles.buttonSend} onClick={handleSubmit}>Enviar <FaArrowRight /></button>
      <NavLink style={{
        width:'100%',
        textDecoration:'none',
        marginBottom:'3%',
      }} to="/Home"><button className={styles.buttonBack}>Voltar <FaArrowLeft /></button></NavLink>
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

export default Contact