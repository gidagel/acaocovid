import React from 'react'

const About = ({about}) => {

  const aboutSectionTextInfo = (about) => {
    const textSlice = about.body.find(
      (slice) => slice.slice_type === 'info_with_image'
    )
    if (textSlice != null) {
      const sectionTitle = textSlice.primary.section_title.text      
      return sectionTitle
    }
  }


  return (
    <div className="container">
      <div className="about-us">
        <h1>{aboutSectionTextInfo(about)}</h1>
        <p className="description">O grupo de pesquisa interdisciplinar Ação Covid-19 conjuga pesquisa científica e ativismo social para o combate à disseminação do novo coronavírus nas cidades brasileiras, no cenário de múltiplas desigualdades que caracteriza o País. O grupo é formado por <strong>25 pesquisadores</strong> de diversas áreas do conhecimento associados a <strong>13 instituições</strong> (entre elas USP, Unicamp, UFABC, ITA, Paris Nord, Universidade de Bristol, Universidade de Liverpool).</p>
        <h3>Equipe de Modelagem</h3>
        <div className='team'>
        {about.body.map((person) => {
          if (person.primary.team === 'Modelagem') {
            return (  
              <div className="people-container" key={person.primary.id}>
                <div className="people-img" style={{backgroundImage:  "url(" + person.primary.featured_image.url + ")", backgroundSize: "cover"}} />
                <a href={person.primary.cvlink.url} ><h4>{person.primary.section_title.text}</h4></a>
                <p>{person.primary.text.text}</p>
              </div>
            )
          }
        })}
        </div>

        <h3>Equipe de Conjuntura</h3>
        <div className='team'>
        {about.body.map((person) => {
          if (person.primary.team === 'Conjuntura') {
            return (  
              <div className="people-container" key={person.primary.id}>
                <div className="people-img" style={{backgroundImage:  "url(" + person.primary.featured_image.url + ")", backgroundSize: "cover"}} />
                <a href={person.primary.cvlink.url} ><h4>{person.primary.section_title.text}</h4></a>
                <p>{person.primary.text.text}</p>
              </div>
            )
          }
        })}
        </div>

        <h3>Equipe de Estatistica</h3>
        <div className='team'>
        {about.body.map((person) => {
          if (person.primary.team === 'Estatistica') {
            return (  
              <div className="people-container" key={person.primary.id}>
                <div className="people-img" style={{backgroundImage:  "url(" + person.primary.featured_image.url + ")", backgroundSize: "cover"}} />
                <a href={person.primary.cvlink.url} ><h4>{person.primary.section_title.text}</h4></a>
                <p>{person.primary.text.text}</p>
              </div>
            )
          }
        })}
        </div>

        <h3>Equipe de Comunicação</h3>
        <div className='team'>
        {about.body.map((person) => {
          if (person.primary.team === 'Comunicacao') {
            return (  
              <div className="people-container" key={person.primary.id}>
                <div className="people-img" style={{backgroundImage:  "url(" + person.primary.featured_image.url + ")", backgroundSize: "cover"}} />
                <a href={person.primary.cvlink.url} ><h4>{person.primary.section_title.text}</h4></a>
                <p>{person.primary.text.text}</p>
              </div>
            )
          }
        })}
        </div>
      </div>
    </div>
  )
}

export default About