import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../../components/layouts'
import PublicationsPosts from '../../components/PublicationsPosts'
import { withPreview } from 'gatsby-source-prismic'

// Query for the Blog Home content in Prismic
export const query = graphql`
  query {
    prismicPublications {
      data {
        description {
          text
        }
        headline {
          text
        }
        image {
          alt
          fluid {
            ...GatsbyPrismicImageFluid
          }
        }
      }
      id
      type
    }
    allPrismicPublication(sort: { fields: data___date, order: DESC }
      filter: {data: {categories: {elemMatch: {category: {tags: {eq: "publicacoes"}}}}}}) {
      edges {
        node {
          url
          id
          uid
          type
          data {
            title {
              raw
            }
            type
            date
            body {
              ... on PrismicPublicationBodyText {
                id
                slice_label
                slice_type
                primary {
                  text {
                    raw
                  }
                }
              }
              ... on PrismicPublicationBodyImageWithCaption {
                id
                slice_label
                slice_type
                primary {
                  image {
                    alt
                    url
                    fluid {
                      ...GatsbyPrismicImageFluid
                    }
                  }
                  caption {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

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

export const PublicationsPage = ({ data }) => {
  if (!data) return null
  // Define the Blog Home & Blog Post content returned from Prismic
  const article = data.prismicPublications.data
  const posts = data.allPrismicPublication.edges

  return (
    <Layout>
      <ArticleHead page={article} />
      <PublicationsPosts posts={posts} />
    </Layout>
  )
}

export default withPreview(PublicationsPage)
