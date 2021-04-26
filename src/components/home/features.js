import React from 'react'
import { Link } from 'gatsby'
import { RichText, Date } from 'prismic-reactjs'

export const Features = ({ studies }) => {
  if (!studies) return null

  const formatDate = (props) => {
  let postDate = Date(props)
  postDate = postDate
    ? new Intl.DateTimeFormat('pt-BR', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    }).format(postDate)
    : ''
    return postDate
  }

  return (
    <div className="features">
        <h2>A Cidade e os Bairros</h2>
        <div className="featured-content">
        {studies.map((study) => (
          <div className="feature-study" key={study.node.id}>
            <p style={{color: '#9d9d9d'}}>{formatDate(study.node.data.date)}</p>
            <Link to={study.node.url}>
                <h3>{RichText.asText(study.node.data.title.raw)}</h3>
            </Link>
          </div>
        ))}
        </div>
    </div>
  )
}
