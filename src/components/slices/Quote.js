import React from 'react'
import { RichText } from 'prismic-reactjs'

export default ({ slice }) => (
  <div className="container">
    <div className="post-quote">
      <blockquote>{RichText.asText(slice.primary.quote.raw)}</blockquote>
    </div>
  </div>
)
