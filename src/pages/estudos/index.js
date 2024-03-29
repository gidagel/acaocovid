import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../../components/layouts'
import StudiesPosts from '../../components/StudiesPosts'
import { withPreview } from 'gatsby-source-prismic'
import SEO from '../../components/SEO'

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
          raw
        }
        image {
          alt
          fluid {
            ...GatsbyPrismicImageFluid
          }
          url
        }
      }
      id
      type
    }
    allPrismicStudy(
      sort: { fields: data___date, order: DESC }
      filter: {data: {categories: {elemMatch: {category: {tags: {eq: "estudos"}}}}}}
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
              ... on PrismicStudyBodyText {
                id
                slice_label
                slice_type
                primary {
                  text {
                    raw
                  }
                }
              }
              ... on PrismicStudyBodyImageWithCaption {
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
const StudiesHead = ({ study }) => {
  return (
    <div className="home-header" data-wio-id={study.id}>
       <SEO
        post={{
          image: study.image.url,
          title: study.headline.raw,
          url: '/estudos',
          description: study.description.text
        }}
      />
      <div className="blog-header">
      <Img fluid={study.image.fluid} className="blog-avatar" imgStyle={{maxHeight: '100%', objectFit: 'cover', width: '100%', opacity: '0.5', objectPosition: '50% 30%'}} alt={study.image.alt} />
      </div>
      <div className="container">
        <div className="blog-container-descript">
          <h1>{study.headline.text}</h1>
          <p className="blog-description">{study.description.text}</p>
        </div>
      </div>
    </div>
  )
}

export const StudiesPage = ({ data }) => {
  if (!data) return null
  // Define the Blog Home & Blog Post content returned from Prismic
  const studies = data.prismicStudies.data
  const posts = data.allPrismicStudy.edges

  return (
    <Layout>
      <StudiesHead study={studies} />
      <StudiesPosts posts={posts} />
    </Layout>
  )
}

export default withPreview(StudiesPage)
