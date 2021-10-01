import React from 'react';
import { graphql, Link } from 'gatsby'

export const Methodology = ({ simulator }) => {

  const imgSimulator = (simulator) => {
    const imgSlice = simulator.body.find(
      (slice) => slice.id === "7f805f67-94d0-5850-a133-2c0b84a4f224"
    )
    if (imgSlice != null) {
      const mainImg = imgSlice.primary.featured_image.url
      return mainImg
    }
  }
  const sectionTitle = (simulator) => {
    const textSlice = simulator.body.find(
      (slice) => slice.id === "7f805f67-94d0-5850-a133-2c0b84a4f224"
    )
    if (textSlice != null) {
      const sectionTitle = textSlice.primary.section_title.text      
      return sectionTitle
    }
  }

  const infoText = (simulator) => {
    const textSlice = simulator.body.find(
      (slice) => slice.id === "7f805f67-94d0-5850-a133-2c0b84a4f224"
    )
    if (textSlice != null) {
      const leftColumn = textSlice.primary.text.text
      return leftColumn
    }
  }

  return (
    <div className='about'>
      <div className='container'>
        <div className='about-content'>
            <div className='simulator-text'>
              <h2>{sectionTitle(simulator)}</h2>
              <p>{infoText(simulator)}</p>
              <p>
                <Link to="/simulador/metodologia">Conheça a metodologia</Link>
              </p>
            </div>
            <div className='about-img' style={{ marginBottom: 0}}>
              <img src={imgSimulator(simulator)} alt={sectionTitle(simulator)} />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Methodology
