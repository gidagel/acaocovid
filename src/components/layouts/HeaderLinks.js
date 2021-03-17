import React, {useState} from 'react';
import { Link } from 'gatsby'
import mainLogo from '../../images/main_logo.jpg'

const HeaderLinks = (props) => {
    const {handleToggle} = props

    const handleClick = (e) => {
        //close menu drop down
        handleToggle && handleToggle()
    }

    return (
      <div className="header_links">
        <Link to='/simulator' key="simulator" onClick={handleClick}>Simulador</Link>
        <Link to='/estudos' key="studies" onClick={handleClick}>Estudos</Link>
        <a href='/publicacoes'>Publicações</a>
        <a href="/">
          <div className="logo">
            <img src={mainLogo} />
          </div>
        </a>
        <a href='/blog'>Blog</a>
        <Link to='/press' key="press" onClick={handleClick}>Imprensa</Link>
        <a href='/press'>Sobre</a>
      </div>
    )
}

export default HeaderLinks