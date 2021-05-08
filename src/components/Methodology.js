import React from 'react';
import { graphql, Link } from 'gatsby'

export const Methodology = ({ simulator }) => {

  const imgSimulator = (simulator) => {
    const imgSlice = simulator.body.find(
      (slice) => slice.id === "6895452b-4c23-5ca8-92a2-2d7bb0825857"
    )
    if (imgSlice != null) {
      const mainImg = imgSlice.primary.featured_image.url
      return mainImg
    }
  }
  const imgAltSimulator = (simulator) => {
    const imgSlice = simulator.body.find(
      (slice) => slice.id === "6895452b-4c23-5ca8-92a2-2d7bb0825857"
    )
    if (imgSlice != null) {
      const mainImg = imgSlice.primary.featured_image.alt
      return mainImg
    }
  }
  const sectionTitle = (simulator) => {
    const textSlice = simulator.body.find(
      (slice) => slice.id === "6895452b-4c23-5ca8-92a2-2d7bb0825857"
    )
    if (textSlice != null) {
      const sectionTitle = textSlice.primary.section_title.text      
      return sectionTitle
    }
  }

  const infoText = (simulator) => {
    const textSlice = simulator.body.find(
      (slice) => slice.id === "6895452b-4c23-5ca8-92a2-2d7bb0825857"
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
              <img src={imgSimulator(simulator)} alt={imgAltSimulator(simulator)} />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Methodology
