import React from 'react'

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

  return (
      <div className="intro" style={{backgroundImage: imgHeader(homeHeader) || false }}>
          <div className="call">
            <h2>{homeHeader.display_title.text}</h2>
            <p>
              Estudo mostra o quanto é preciso imunizar em cada Estado para ver
              melhoras na pandemia
            </p>
            <a href="/publicacoes/quao-lenta-a-vacinacao-no-brasil">Saiba mais</a>
          </div>
      </div>
  )
}
