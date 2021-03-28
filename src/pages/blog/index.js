import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
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
          localFile {
            publicURL
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
const BlogHomeHead = ({ page }) => {
  const bgImage = page.image.localFile.publicURL
  const avatar = { backgroundImage: `url(${bgImage})` }
  return (
    <div className="home-header" data-wio-id={page.id}>
      <div className="blog-avatar" style={avatar} />
      <div className="container">
        <div className="blog-container-descript">
          <h1>{RichText.asText(page.headline)}</h1>
          <p className="blog-description">{RichText.asText(page.description)}</p>
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
