import React from 'react'
import PortalCovid from '../images/Portal-Covid-Brasil-Acao.jpg'
import LASCOL from '../images/LASCOL-Acao-Covid.jpg'
import FundTide from '../images/Fundacao-Tide-Setubal-Acao-Covid.jpg'
import FundEg from '../images/Fundacao-Egydio-Setubal-Acao-Covid.jpg'
import UFABC from '../images/UFABC-Acao-Covid.jpg'
import ENAP from '../images/ENAP-Premio-Acao-Covid.jpg'
import BNDES from '../images/BNDES-Premio-Acao-Covid.jpg'

const Partners = () => {

  return (
    <div className="partners-background">
      <div className="container">
        <div className="partners-content">
          <div className="partners">
              <div className="partners-title">
                <h4>Parceiros</h4>
              </div>
              <div className="partners-list">
                <div className="partner">
                  <a href="https://ciis.fmrp.usp.br/covid19/" target="_blank"><img src={PortalCovid} alt="Portal Covid-19"/></a>
                </div>
                <div className="partner">
                  <a href="https://linktr.ee/opps_lascol"><img src={LASCOL} alt="LASCOL UNIFESP"/></a>
                </div>
              </div>
          </div>
          <div className="partners">
            <div className="partners-title">
              <h4>Apoio</h4>
            </div>
            <div className="partners-list">
              <div className="partner">
                <a href="https://fundacaotidesetubal.org.br/" target="_blank"><img src={FundTide} alt="Fundação Tide Setubal"/></a>
              </div>
              <div className="partner">
                <a href="https://fundacaojles.org.br/" target="_blank"><img src={FundEg} alt="Fundação Egydio Setubal"/></a>
              </div>
              <div className="partner">
                <a href="http://www.ufabc.edu.br/" target="_blank"><img src={UFABC} alt="UFABC"/></a>
              </div>
            </div>
          </div>
          <div className="partners">
              <h4>Prêmios</h4>
              <div className="partners-list">
                <img src={ENAP} alt="Prêmio ENAP Covid"/>
                <img src={BNDES} alt="Prêmio BNDES Covid"/>
              </div>
              <p>Concurso Desafios Covid-19 - 4º lugar</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners