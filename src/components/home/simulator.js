import React from 'react';
import { graphql, Link } from 'gatsby'

export const Simulator = ({ about }) => {

  const imgAbout = (about) => {
    const imgSlice = about.body.find(
      (slice) => slice.id === "d01fc12c-d37c-5224-93fc-fb914ddae758"
    )
    if (imgSlice != null) {
      const mainImg = imgSlice.primary.featured_image.url
      return mainImg
    }
  }
  const sectionTitle = (about) => {
    const textSlice = about.body.find(
      (slice) => slice.id === "d01fc12c-d37c-5224-93fc-fb914ddae758"
    )
    if (textSlice != null) {
      const sectionTitle = textSlice.primary.section_title.text      
      return sectionTitle
    }
  }

  const infoText = (about) => {
    const textSlice = about.body.find(
      (slice) => slice.id === "d01fc12c-d37c-5224-93fc-fb914ddae758"
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
              <h2>{sectionTitle(about)}</h2>
              <h3>Nossos simuladores ajudam a prever e entender os efeitos das ondas de contaminação do Covid-19</h3>
              <p>{infoText(about)}</p>
              <p><Link to="/simulador">
                Faça uma simulação!
              </Link></p>
            </div>
            <div className='about-img' style={{ marginBottom: 0}}>
              <img src={imgAbout(about)} alt={sectionTitle(about)} />
            </div>
          </div>
      </div>
    </div>
  )
}
