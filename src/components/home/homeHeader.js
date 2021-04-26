import React from 'react'
import { RichText } from 'prismic-reactjs'

export const HomeHeader = ({ homeHeader }) => {
  const imgHeader = (homeHeader) => {
    const imgSlice = homeHeader.body.find(
      (slice) => slice.slice_type === 'full_width_image'
    )
    if (imgSlice != null) {
      const mainImg = imgSlice.primary.image.url
      return mainImg
    }
  }
  const headerSectionTextInfo = (homeHeader) => {
    const textSlice = homeHeader.body.find(
      (slice) => slice.slice_type === 'text_info'
    )
    if (textSlice != null) {
      const sectionTitle = textSlice.primary.section_title.text      
      return sectionTitle
    }
  }

  const headerLeftText = (homeHeader) => {
    const textSlice = homeHeader.body.find(
      (slice) => slice.slice_type === 'text_info'
    )
    if (textSlice != null) {
      const leftColumn = textSlice.primary.left_column_text.text
      return leftColumn
    }
  }
  return (
      <div className="intro">
        <div className="call">
            <h1>{headerSectionTextInfo(homeHeader)}</h1>
            <p>
              {headerLeftText(homeHeader)}
            </p>
            <a href="/publicacoes/quao-lenta-a-vacinacao-no-brasil">Saiba mais</a>
        </div>
        <div className="intro-img" style={{backgroundImage:  "url(" + imgHeader(homeHeader) + ")"}} />
      </div>
  )
}
