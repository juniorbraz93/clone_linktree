import React, { Component } from "react";

import './style.css'

import {
  SiLinkedin,
  SiGithub,
  SiWhatsapp,
  SiYoutube
 } from "react-icons/si";

 import { FaUserTie } from "react-icons/fa"
// import ModalEmail from "../ModalEmail";

class SocialMedia extends Component {
  render() {
    const listMediaSocial = [
      { id: 1, icon: <SiGithub style={{marginRight: 10}} color="#171515" />, nameUrl: 'GitHub', url: 'https://github.com/juniorbraz93'},
      { id: 2, icon: <FaUserTie style={{marginRight: 10}} color="#171515" />, nameUrl: 'Portfolio', url: 'https://juniorbraz.netlify.app/'},
      { id: 3, icon: <SiYoutube style={{marginRight: 10}} color="#FF0000" />, nameUrl: 'Youtube', url: 'https://www.youtube.com/channel/UCHEFiaSgYcR6BFrtjSqV5qA'},
      { id: 4, icon: <SiLinkedin style={{marginRight: 10}} color="#0e76a8" />, nameUrl: 'LinkedIn', url: 'https://www.linkedin.com/in/jose-braz-junior/'},
      { id: 5, icon: <SiWhatsapp style={{marginRight: 10}} color="#25D366" />, nameUrl: 'Whatsapp', url: 'https://wa.me/5527999040472'},
    ]

    const linksSocialMedia = listMediaSocial.map((index) =>
      <div key={index.id} className="conteudo_links" >
        
        <a href={index.url}>
          {index.icon}
          {index.nameUrl}
        </a>
      </div>
    )

    return (
      <div>
        {linksSocialMedia}
        {/* <ModalEmail /> */}
      </div>
    )
  }
}

export default SocialMedia