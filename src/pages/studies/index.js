import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import Layout from '../../components/layouts'
import BlogPosts from '../../components/BlogPosts'
import { withPreview } from 'gatsby-source-prismic'

// Query for the Blog Home content in Prismic
export const query = graphql`
  query {
    prismicStudies {
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
      filter: {data: {categories: {elemMatch: {category: {tags: {eq: "estudos"}}}}}}) {
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
const StudiesHead = ({ study }) => {
  const avatar = { backgroundImage: `url(${study.image.url})` }
  return (
    <div className="studies-header" data-wio-id={study.id}>
      <div className="studies-avatar" style={avatar} />
      <h1>{RichText.asText(study.headline)}</h1>
      <p className="studies-description">{RichText.asText(study.description)}</p>
    </div>
  )
}

export const StudiesPage = ({ data }) => {
  if (!data) return null
  // Define the Blog Home & Blog Post content returned from Prismic
  const studies = data.prismicStudies.data
  const posts = data.allPrismicPost.edges

  return (
    <Layout>
      <StudiesHead study={studies} />
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export default withPreview(StudiesPage)
