import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../../components/layouts'
import BlogPosts from '../../components/BlogPosts'
import { withPreview } from 'gatsby-source-prismic'

// Query for the Blog Home content in Prismic
export const query = graphql`
  query {
    prismicHomeblog {
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
    allPrismicPost(
      sort: { fields: data___date, order: DESC }
      filter: {data: {categories: {elemMatch: {category: {tags: {eq: "blog"}}}}}}
      ) {
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
            date
            main_image {
              url
              alt
              fluid {
                src
              }
            }
            body {
              ... on PrismicPostBodyText {
                id
                slice_label
                slice_type
                primary {
                  text {
                    raw
                  }
                }
              }
              ... on PrismicPostBodyImageWithCaption {
                id
                slice_label
                slice_type
                primary {
                  image {
                    alt
                    url
                    fluid {
                      base64 
                      aspectRatio 
                      src 
                      srcSet 
                      sizes 
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
const BlogHomeHead = ({ page }) => {
  return (
    <div className="home-header" data-wio-id={page.id}>
      <div className="blog-header">
      <Img fluid={page.image.fluid} className="blog-avatar" imgStyle={{maxHeight: '100%', objectFit: 'cover', width: '100%', opacity: '0.5', objectPosition: 'bottom'}} alt={page.image.alt} />
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

export const BlogHomePage = ({ data }) => {
  if (!data) return null
  // Define the Blog Home & Blog Post content returned from Prismic
  const homeblog = data.prismicHomeblog.data
  const posts = data.allPrismicPost.edges

  return (
    <Layout>
      <BlogHomeHead page={homeblog} />
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export default withPreview(BlogHomePage)
