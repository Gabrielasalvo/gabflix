import React from 'react'

import './styles.css'
import Logo from './../../assets/img/logo.png'
import Button from '../../components/Button'

export default function Header (){
  return(
    <header className="menu">
      <nav className="Menu">
        <a href="/">
          <img src={Logo} alt="Gabflix" className="logo" />
        </a>

        <Button as="a" _label="Novo vídeo" href="#">
          Novo vídeo
        </Button>
      </nav>
    </header>
  )
}
