import React, {Text} from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import Layout from '../../components/layouts'
import NewsPosts from '../../components/NewsPosts'
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
          localFile {
            publicURL
          }
        }
      }
      id
      type
    }
    allPrismicNews(
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
            external_link {
              url
            }
            body {
              ... on PrismicNewsBodyText {
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
          <h1>{page.headline.text}</h1>
          <p className="blog-description">{page.description.text}</p>
        </div>
      </div>
    </div>
  )
}

export const PressPage = ({ data }) => {
  if (!data) return null
  // Define the Blog Home & Blog Post content returned from Prismic
  const press = data.prismicPress.data
  const posts = data.allPrismicNews.edges

  return (
    <Layout>
      <BlogHomeHead page={press} />
      <NewsPosts posts={posts} />
    </Layout>
  )
}

export default withPreview(PressPage)
