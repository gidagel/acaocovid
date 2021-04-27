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
            <h3>Atualização do estudo entre o período de 19/03 a 19/04/21</h3>
            <p>
              {headerLeftText(homeHeader)}
            </p>
            <a href="/publicacoes/atualizacao-sob-que-condicoes-a-vacina-conteria-a-pandemia-no-brasil">Saiba mais</a>
          </div>
          <div className="intro-img" style={{backgroundImage:  "url(" + imgHeader(homeHeader) + ")"}} />
      </div>
  )
}
