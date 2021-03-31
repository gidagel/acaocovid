import React from 'react';
import { graphql, Link } from 'gatsby'
import AboutImg from '../../images/Covid-Desigualdade-Pandemia.jpeg'

export const About = (props) => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='about-content'>
            <div className='about-img'>
              <img src={AboutImg} alt='Desigualdade na Pandemia do Covid-19' />
              <figcaption className="image-label">
                <small>Foto: Pedro Conforte para Agência Pública</small>
              </figcaption>
            </div>
            <div className='about-text'>
              <h2>Sobre Nós</h2>
              <p>O Ação Covid-19 é um grupo interdisciplinar de pesquisadores dedicados a entender como a desigualdade afeta a evolução da pandemia no Brasil. Dependendo das condições de vida no seu bairro ou território, você pode estar mais exposto ou mais protegido ao vírus.</p>
              <p>Utilizamos o simulador de dispersão de vírus da Netlogo, que aplica um indicador criado pelo nosso grupo: o Índice de Proteção à Covid-19 (IPC), estimando o quanto um bairro ou território está protegido, segundo uma série de dados: densidade demográfica, mobilidade, IDH e outros.</p>
              <Link to="/publicacoes">
                Ver todas as publicações
              </Link>
            </div>
          </div>
      </div>
    </div>
  )
}
