import React, { useState } from 'react';
import './style.css'

import emailjs from '@emailjs/browser';

export default function Email() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  function sendEmail(e) {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos")
      return
    }
    const  templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send('service_oszqo5n', 'template_yxt5f6p', templateParams, 'bU5CUl8Y91mmdDrr0')
      .then((result) => {
        console.log('Email enviado', result.status, result.text)
        setName('')
        setEmail('')
        setMessage('')
      }, (error) => {
          console.log(error.text);
      });

  }

 return (
    <div className="container">

      <div className="form-container">
          
        <h1 className="title">Contato</h1>

        <form className='form' onSubmit={sendEmail} >
          <input 
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
            
          <input 
            className="input"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          
          <textarea 
            className="textarea"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className="button" type="submit" value="Enviar" />

        </form>
        
      </div>

    </div>
 );
}