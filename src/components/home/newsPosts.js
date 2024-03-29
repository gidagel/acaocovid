import React from 'react';
import { Link } from 'gatsby'
import { RichText, Date } from 'prismic-reactjs'

export const NewsPosts = ({ press }) => {
  if (!press) return null

  const firstParagraph = (press) => {
    // // Find the first text slice of post's body
    const firstTextSlice = press.body.find((slice) => slice.slice_type === 'text')
    if (firstTextSlice != null) {
      // Set the character limit for the text we'll show in the homepage
      const textLimit = 200
      const text = RichText.asText(firstTextSlice.primary.text.raw)
      const limitedText = text.substring(0, textLimit)
  
      if (text.length > textLimit) {
        // Cut only up to the last word and attach '...' for readability
        return (
          <p>{`${limitedText.substring(0, limitedText.lastIndexOf(' '))}...`}</p>
        )
      }
      // If it's shorter than the limit, just show it normally
      return <p>{text}</p>
    }
    // If there are no slices of type 'text', return nothing
    return null
  }

  const formatDate = (props) => {
    let postDate = Date(props)
    postDate = postDate
      ? new Intl.DateTimeFormat('pt', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      }).format(postDate)
      : ''
      return postDate
    }

  return (
    <div className='home-blog-featured'>
        <div className='section-title'>
          <h2>Imprensa</h2>
          <p>
            Notícias de diversos veículos que nossos estudos saíram, contribuindo para informar a população com dados científicos e fortalecer o isolamento social na comunidade!
          </p>
        </div>
        <div className='home-blogposts'>
          {press.map((news) => (
          <div className='featured-news' key={news.node.id}>
            <p>
              <time>{formatDate(news.node.data.date)}</time>
            </p>
            <a href={news.node.data.external_link.url} rel="noopener" target="_blank">
              <h3>{RichText.asText(news.node.data.title.raw)}</h3>
            </a>
            {firstParagraph(news.node.data)}
            <button><a href={news.node.data.external_link.url} rel="noopener" target="_blank">Ver notícia</a></button>
          </div>
          ))}
        </div>
    </div>
  )
}
