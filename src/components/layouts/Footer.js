import React from 'react'
import { Link } from 'gatsby'
import { FacebookIcon, InstagramIcon, SpotifyIcon, TwitterIcon, YouTubeIcon } from '../Icons'

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
          <ul>
            <li><strong>Dúvidas</strong></li>
            <li><a href="mailto:mosaicovid19@gmail.com">mosaicovid19@gmail.com</a></li>
          </ul>
          <br/>
          <ul>
            <li><strong>Imprensa</strong></li>
            <li><a href="mailto:comunicamosaico@gmail.com">comunicamosaico@gmail.com</a></li>
          </ul>
          <div className="social-icons">
            <a href=""><SpotifyIcon /></a>
            <a href=""><InstagramIcon /></a>
            <a href=""><FacebookIcon /></a>
            <a href=""><TwitterIcon /></a>
            <a href=""><YouTubeIcon /></a>
          </div>
        </div>
        <div className="footer_links">
          <div className="footer_links_left">
            <h3>Nosso Projeto</h3>
            <ul>
              <li><Link to="/simulador">Simulador</Link></li>
              <li><Link to="/estudos">Estudos</Link></li>
              <li><Link to="/publicacoes">Publicações</Link></li>
              <li><Link to="/estatisticas">Estatísticas</Link></li>
            </ul>
          </div>
          <div className="footer_links_right">
            <h3>Informações</h3>
            <ul>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/imprensa">Imprensa</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/parceiros">Parceiros</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="copyright">Ação Covid-19. 2021 (C). Todos os direitos reservados.</p>
    </div>
  </footer>
)
