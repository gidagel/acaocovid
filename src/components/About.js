import React from 'react'
import SEO from './SEO'

const About = ({ about }) => {
  const aboutSectionTitle = (about) => {
    const textSlice = about.body.find(
      (slice) => slice.id === '9aadd03b-bae8-5cd6-abc0-254b183f16ea'
    )
    if (textSlice != null) {
      const sectionTitle = textSlice.primary.section_title.text
      return sectionTitle
    }
  }

  const aboutSectionDescription = (about) => {
    const textSlice = about.body.find(
      (slice) => slice.id === '9aadd03b-bae8-5cd6-abc0-254b183f16ea'
    )
    if (textSlice != null) {
      const sectionTitle = textSlice.primary.text.text
      return sectionTitle
    }
  }

  const aboutSEOTitle = (about) => {
    const textSlice = about.body.find(
      (slice) => slice.id === '9aadd03b-bae8-5cd6-abc0-254b183f16ea'
    )
    if (textSlice != null) {
      const sectionTitle = textSlice.primary.section_title.raw
      return sectionTitle
    }
  }

  const aboutSEODescription = (about) => {
    const textSlice = about.body.find(
      (slice) => slice.id === '9aadd03b-bae8-5cd6-abc0-254b183f16ea'
    )
    if (textSlice != null) {
      const sectionTitle = textSlice.primary.text.raw
      return sectionTitle
    }
  }

  const aboutSectionImg = (about) => {
    const textSlice = about.body.find(
      (slice) => slice.id === '9aadd03b-bae8-5cd6-abc0-254b183f16ea'
    )
    if (textSlice != null) {
      const sectionTitle = textSlice.primary.featured_image.url
      return sectionTitle
    }
  }

  return (
    <>
      <div className="homePage">
        <SEO
          post={{
            image: aboutSectionImg(about),
            title: aboutSEOTitle(about),
            url: '/sobre',
            description: aboutSEODescription(about)
          }}
        />
        <div className="intro">
          <div className="call">
            <h1>{aboutSectionTitle(about)}</h1>
            <p style={{ marginBottom: 0 }}>{aboutSectionDescription(about)}</p>
          </div>
          <div
            className="intro-img"
            style={{ backgroundImage: 'url(' + aboutSectionImg(about) + ')'}}
          />
        </div>
      </div>
      <div className="container">
        <div className="about-us">
          <h2>Equipe de Modelagem</h2>
          <div className="team">
            {about.body.map((person) => {
              if (person.primary.team === 'Modelagem') {
                return (
                  <div className="people-container" key={person.primary.id}>
                    <div
                      className="people-img"
                      style={{
                        backgroundImage:
                          'url(' + person.primary.featured_image.url + ')',
                        backgroundSize: 'cover',
                      }}
                    />
                    <a href={person.primary.cvlink.url} target="_blank">
                      <h4>{person.primary.section_title.text}</h4>
                    </a>
                    <p>{person.primary.text.text}</p>
                  </div>
                )
              }
            })}
          </div>

          <h2>Equipe de Conjuntura</h2>
          <div className="team">
            {about.body.map((person) => {
              if (person.primary.team === 'Conjuntura') {
                return (
                  <div className="people-container" key={person.primary.id}>
                    <div
                      className="people-img"
                      style={{
                        backgroundImage:
                          'url(' + person.primary.featured_image.url + ')',
                        backgroundSize: 'cover',
                      }}
                    />
                    <a href={person.primary.cvlink.url} target="_blank">
                      <h4>{person.primary.section_title.text}</h4>
                    </a>
                    <p>{person.primary.text.text}</p>
                  </div>
                )
              }
            })}
          </div>

          <h2>Equipe de Estatística</h2>
          <div className="team">
            {about.body.map((person) => {
              if (person.primary.team === 'Estatistica') {
                return (
                  <div className="people-container" key={person.primary.id}>
                    <div
                      className="people-img"
                      style={{
                        backgroundImage:
                          'url(' + person.primary.featured_image.url + ')',
                        backgroundSize: 'cover',
                      }}
                    />
                    <a href={person.primary.cvlink.url} target="_blank">
                      <h4>{person.primary.section_title.text}</h4>
                    </a>
                    <p>{person.primary.text.text}</p>
                  </div>
                )
              }
            })}
          </div>

          <h2>Equipe de Comunicação</h2>
          <div className="team">
            {about.body.map((person) => {
              if (person.primary.team === 'Comunicacao') {
                return (
                  <div className="people-container" key={person.primary.id}>
                    <div
                      className="people-img"
                      style={{
                        backgroundImage:
                          'url(' + person.primary.featured_image.url + ')',
                        backgroundSize: 'cover',
                      }}
                    />
                    <a href={person.primary.cvlink.url} target="_blank">
                      <h4>{person.primary.section_title.text}</h4>
                    </a>
                    <p>{person.primary.text.text}</p>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default About
