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
        <Link to='/simulador' key="simulator" onClick={handleClick}>Simulador</Link>
        <Link to='/estudos' key="studies" onClick={handleClick}>Estudos</Link>
        <Link to='/publicacoes' key="publications" onClick={handleClick}>Publicações</Link>
        <a href="/">
          <div className="logo">
            <img src={mainLogo} />
          </div>
        </a>
        <Link to='/blog' key="blog" onClick={handleClick}>Blog</Link>
        <Link to='/imprensa' key="press" onClick={handleClick}>Imprensa</Link>
        <Link to='/sobre' key="about" onClick={handleClick}>Sobre</Link>
      </div>
    )
}

export default HeaderLinks