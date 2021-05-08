import React from 'react'

const Simulator = ({ simulator }) => {
  const simulatorSectionTitle = (simulator) => {
    const textSlice = simulator.body.find(
      (slice) => slice.slice_type === 'text_info'
    )
    if (textSlice != null) {
      const sectionTitle = textSlice.primary.section_title.text
      return sectionTitle
    }
  }

  const simulatorSectionDescription = (simulator) => {
    const textSlice = simulator.body.find(
      (slice) => slice.slice_type === 'text_info'
    )
    if (textSlice != null) {
      const sectionDescription = textSlice.primary.left_column_text.text
      return sectionDescription
    }
  }

  const imgHeader = (simulator) => {
    const imgSlice = simulator.body.find(
      (slice) => slice.slice_type === 'full_width_image'
    )
    if (imgSlice != null) {
      const mainImg = imgSlice.primary.image.url
      return mainImg
    }
  }

  return (
    <div className="intro">
      <div className="call">
        <h1>{simulator.display_title.text}</h1>
        <h3>{simulatorSectionTitle(simulator)}</h3>
        <p style={{marginBottom: 0}}>{simulatorSectionDescription(simulator)}</p>
      </div>
      <div
        className="intro-img"
        style={{ backgroundImage: 'url(' + imgHeader(simulator) + ')' }}
      />
    </div>
  )
}

export default Simulator
