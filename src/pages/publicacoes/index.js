import React from 'react'
import { graphql } from 'gatsby'
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
          localFile {
            publicURL
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
            }
          }
        }
      }
    }
  }
`

// Using the queried Blog Home document data, we render the top section
const ArticleHead = ({ page }) => {
  const bgImage = page.image.localFile.publicURL
  const avatar = { backgroundImage: `url(${bgImage})`, backgroundPosition: '70% 70%' }
  return (
    <div className="home-header" data-wio-id={page.id}>
      <div className="blog-avatar" style={avatar} />
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
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export default withPreview(PublicationsPage)
