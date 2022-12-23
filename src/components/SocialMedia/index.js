import React, { Component } from "react";

import './style.css'

class SocialMedia extends Component {
  render() {
    const listMediaSocial = [
      { id: 1, nameUrl: 'LinkedIn', url: 'https://www.linkedin.com/in/jose-braz-junior/'},
      { id: 2, nameUrl: 'GitHub', url: 'https://github.com/juniorbraz93'},
      { id: 3, nameUrl: 'Portfolio', url: 'https://github.com/juniorbraz93'},
      { id: 4, nameUrl: 'Gmail', url: 'https://wa.me/5527999040472'},
      { id: 5, nameUrl: 'Whatsapp', url: 'https://wa.me/5527999040472'},
      { id: 6, nameUrl: 'Youtube', url: 'https://www.youtube.com/channel/UCHEFiaSgYcR6BFrtjSqV5qA'},
    ]

    const linksSocialMedia = listMediaSocial.map((index) =>
      <div key={index.id} className="conteudo_links" >
        
        <a href={index.url}>
          {index.nameUrl}
        </a>
      </div>
    )

    return (
      <div>
        {linksSocialMedia}
      </div>
    )
  }
}

export default SocialMedia