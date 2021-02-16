import React, {Text} from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import Layout from '../../components/layouts'
import BlogPosts from '../../components/BlogPosts'
import { withPreview } from 'gatsby-source-prismic'

// Query for the Blog Home content in Prismic
export const query = graphql`
  query {
    prismicPress {
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
    allPrismicPost(
      sort: { fields: data___date, order: DESC }
      filter: {data: {categories: {elemMatch: {category: {tags: {eq: "imprensa"}}}}}}
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
  const avatar = { backgroundImage: `url(${page.image.url})` }
  return (
    <div className="home-header" data-wio-id={page.id}>
      <div className="blog-avatar" style={avatar} />
      <h1>{page.headline.text}</h1>
      <p className="blog-description">{page.description.text}</p>
    </div>
  )
}

export const PressPage = ({ data }) => {
  if (!data) return null
  // Define the Blog Home & Blog Post content returned from Prismic
  const press = data.prismicPress.data
  const posts = data.allPrismicPost.edges

  return (
    <Layout>
      <BlogHomeHead page={press} />
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export default withPreview(PressPage)
