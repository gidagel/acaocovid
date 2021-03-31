import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../../components/layouts'
import Partners from '../../components/Partners'
import { withPreview } from 'gatsby-source-prismic'

// Using the queried Blog Home document data, we render the top section
const ArticleHead = ({ page }) => {
  return (
    <div className="home-header" data-wio-id={page.id}>
      <div className="blog-header">
        <Img 
          fluid={page.image.fluid} 
          className="blog-avatar" 
          imgStyle={{
            maxHeight: '100%', 
            objectFit: 'cover', 
            width: '100%', 
            opacity: '0.3', 
            objectPosition: 'top'
          }} 
          alt={page.image.alt} 
        />
      </div>
      <div className="container">
        <div className="blog-container-descript">
          <h1>{page.headline.text}</h1>
          <p className="blog-description">{page.description.text}</p>
        </div>
      </div>
    </div>
  )
}

export const AboutPage = () => {
  

  return (
    <Layout>
      <Partners />
    </Layout>
  )
}

export default withPreview(AboutPage)
