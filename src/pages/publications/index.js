import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import Layout from '../../components/layouts'
import BlogPosts from '../../components/BlogPosts'
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
          url
        }
      }
      id
      type
    }
    allPrismicPost(sort: { fields: data___date, order: DESC }
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
            date
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
            }
          }
        }
      }
    }
  }
`

// Using the queried Blog Home document data, we render the top section
const ArticleHead = ({ page }) => {
  const avatar = { backgroundImage: `url(${page.image.url})` }
  return (
    <div className="home-header container" data-wio-id={page.id}>
      <div className="blog-avatar" style={avatar} />
      <h1>{RichText.asText(page.headline)}</h1>
      <p className="blog-description">{RichText.asText(page.description)}</p>
    </div>
  )
}

export const PublicationsPage = ({ data }) => {
  if (!data) return null
  // Define the Blog Home & Blog Post content returned from Prismic
  const article = data.prismicPublications.data
  const posts = data.allPrismicPost.edges

  return (
    <Layout>
      <ArticleHead page={article} />
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export default withPreview(PublicationsPage)
