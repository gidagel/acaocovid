import React from 'react'
import { Link } from 'gatsby'

export default () => (
  <footer>
    <div className="container">
      <div className="partners">
        
      </div>
      <div className="footer_container">
        <div className="footer_about">
          <h3>Quem Somos</h3>
          <p>Somos um grupo de pesquisadores dedicados a estudar a evolução do Covid-19 no Brasil. Com nossos estudos propomos diversas medidas de combate à pandemia no cenário de desigualdade do país.</p>
        </div>
        <div className="footer_contact">
          <h3>Contato</h3>
          <li><strong>Dúvidas</strong></li>
          <li><a href="mailto:mosaicovid19@gmail.com">mosaicovid19@gmail.com</a></li>
          <br/>
          <li><strong>Imprensa</strong></li>
          <li><a href="mailto:comunicamosaico@gmail.com">comunicamosaico@gmail.com</a></li>
        </div>
        <div className="footer_links">
          <ul className="footer_links_left">
            <h3>Nosso Projeto</h3>
            <li><Link to="/simulador">Simulador</Link></li>
            <li><Link to="/estudos">Estudos</Link></li>
            <li><Link to="/publicacoes">Publicações</Link></li>
            <li><Link to="/estatisticas">Estatísticas</Link></li>
          </ul>
          <ul className="footer_links_right">
            <h3>Informações</h3>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/imprensa">Imprensa</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/parceiros">Parceiros</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)
