import React from 'react'

export default () => (
  <footer>
    <div className="container">
      <div className="footer_container">
        <div className="footer_about">
          <h3>Quem somos</h3>
          <p>Pesquisadores dedicados a estudar a evolução do Covid-19 no Brasil, propondo medidas de combate à pandemia no cenário de desigualdade do país.</p>
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
          <div className="footer_links_left">
            <h3>Nosso projeto</h3>
            <li>Simulador</li>
            <li>Estudos</li>
            <li>Publicações</li>
            <li>Estatísticas</li>
          </div>
          <div className="footer_links_right">
            <h3>Informações</h3>
            <li>Blog</li>
            <li>Imprensa</li>
            <li>Sobre</li>
            <li>Parceiros</li>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
