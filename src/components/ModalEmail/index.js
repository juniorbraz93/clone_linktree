import React, { useState } from 'react';
import Modal from 'react-modal';

import './style.css'

import {  SiGmail } from "react-icons/si";

import Email from '../Email';

Modal.setAppElement('#root');

export default function ModalEmail() {
  
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

 return (
   <div>
    <div className="container-email" onClick={openModal} >
      <a href="#contact" className="content">
        <SiGmail style={{marginRight: 10}} color="#db4a39" />
                  Gmail
      </a>
    </div>
    <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
          >
            <Email />
          </Modal>
   </div>
 );
}