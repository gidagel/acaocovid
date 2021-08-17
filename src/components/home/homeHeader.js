import React from 'react'
import SEO from '../SEO'

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

  const headerRightText = (homeHeader) => {
    const textSlice = homeHeader.body.find(
      (slice) => slice.slice_type === 'text_info'
    )
    if (textSlice != null) {
      const leftColumn = textSlice.primary.right_column_text.text
      return leftColumn
    }
  }
  return (
    <div className="intro">
      <SEO
        post={{
          image: imgHeader(homeHeader) || false,
          url: '/',
          title: headerSectionTextInfo(homeHeader),
          description: headerLeftText(homeHeader)
        }}
      />
      <div className="call">
        <h1>{headerSectionTextInfo(homeHeader)}</h1>
        <h3>{headerLeftText(homeHeader)}</h3>
        <p>{headerRightText(homeHeader)}</p>
        <a href="/publicacoes/possiveis-cenarios-da-pandemia-no-brasil-sob-diferentes">
          Saiba mais
        </a>
      </div>
      <div
        className="intro-img"
        style={{ backgroundImage: 'url(' + imgHeader(homeHeader) + ')' }}
      />
    </div>
  )
}
