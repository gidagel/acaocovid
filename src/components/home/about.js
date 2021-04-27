import React from 'react';
import { graphql, Link } from 'gatsby'

export const About = ({ about }) => {

  const imgAbout = (about) => {
    const imgSlice = about.body.find(
      (slice) => slice.slice_type === 'info_with_image'
    )
    if (imgSlice != null) {
      const mainImg = imgSlice.primary.featured_image.url
      return mainImg
    }
  }
  const imgAltAbout = (about) => {
    const imgSlice = about.body.find(
      (slice) => slice.slice_type === 'info_with_image'
    )
    if (imgSlice != null) {
      const mainImg = imgSlice.primary.section_title.text
      return mainImg
    }
  }
  const imgCopyAbout = (about) => {
    const imgSlice = about.body.find(
      (slice) => slice.slice_type === 'info_with_image'
    )
    if (imgSlice != null) {
      const mainImg = imgSlice.primary.featured_image.copyright
      return mainImg
    }
  }
  const sectionTitle = (about) => {
    const textSlice = about.body.find(
      (slice) => slice.slice_type === 'info_with_image'
    )
    if (textSlice != null) {
      const sectionTitle = textSlice.primary.section_title.text      
      return sectionTitle
    }
  }

  const infoText = (about) => {
    const textSlice = about.body.find(
      (slice) => slice.slice_type === 'info_with_image'
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
            <div className='about-img'>
              <img src={imgAbout(about)} alt={imgAltAbout(about)} />
              <figcaption className="image-label">
                <small>{imgCopyAbout(about)}</small>
              </figcaption>
            </div>
            <div className='about-text'>
              <h2>{sectionTitle(about)}</h2>
              <h4>Coletivo formado por 25 pesquisadores de diversas áreas do conhecimento associados a 13 instituições pelo mundo!</h4>
              <p>{infoText(about)}</p>
              <Link to="/sobre">
                Conheça a equipe
              </Link>
            </div>
          </div>
      </div>
    </div>
  )
}
