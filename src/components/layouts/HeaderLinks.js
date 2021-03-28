import React, { useState } from 'react';
import { Link } from 'gatsby'
import mainLogo from '../../images/main_logo.jpg'

const HeaderLinks = (props) => {
    const {handleToggle} = props
    const handleClick = (e) => {
        //close menu drop down
        handleToggle && handleToggle()
    }

    return (
      <div className='header_links'>
        <div className="links_left">
          <Link to='/simulador' activeClassName="active" key="simulator" onClick={handleClick}>Simulador</Link>
          <Link to='/estudos' activeClassName="active" key="studies" onClick={handleClick}>Estudos</Link>
          <Link to='/publicacoes' activeClassName="active" key="publications" onClick={handleClick}>Publicações</Link>
          <Link to='/estatisticas' activeClassName="active" key="statistics" onClick={handleClick}>Estatísticas</Link>
        </div>
        <div className="logo">
          <a href="/" aria-label="Ação Covid-19 Home">
            <div className="logo">
              <img src={mainLogo} alt="Ação Covid-19 Logo Principal"/>
            </div>
          </a>
        </div>
        <div className="links_right">  
          <Link to='/blog' activeClassName="active" key="blog" onClick={handleClick}>Blog</Link>
          <Link to='/imprensa' activeClassName="active" key="press" onClick={handleClick}>Imprensa</Link>
          <Link to='/sobre' activeClassName="active" key="about" onClick={handleClick}>Sobre Nós</Link>
          <Link to='/parceiros' activeClassName="active" key="partners" onClick={handleClick}>Parceiros</Link>          
        </div>
      </div>
    )
}

export default HeaderLinks