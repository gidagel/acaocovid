import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../../components/layouts'
import Partners from '../../components/Partners'
import About from '../../components/About'
import { withPreview } from 'gatsby-source-prismic'

export const query = graphql`
query {
  prismicAbout {
    data {
      body {
        ... on PrismicAboutBodyHeadlineWithButton {
          id
          slice_type  
          primary {
            button {
              url
            }
            description {
              text
            }
            headline {
              text
            }
          }
        }
        ... on PrismicAboutBodyFullWidthImage {
          id
          primary {
            image {
              url
            }
          }
          slice_type
        }
        ... on PrismicAboutBodyInfoWithImage {
          id
          primary {
            team
            text {
              text
            }
            section_title {
              text
            }
            featured_image {
              url
            }
            cvlink {
              url
            }
          }
          slice_type
        }
        ... on PrismicAboutBodyTextInfo {
          id
          primary {
            left_column_text {
              text
            }
            right_column_text {
              text
            }
            section_title {
              text
            }
          }
          slice_type
        }
      }
    }
  }
}
`


export const AboutPage = ({data}) => {
  const about = data.prismicAbout.data

  return (
    <Layout>
      <About about={about} />
      {/* <Partners /> */}
    </Layout>
  )
}

export default withPreview(AboutPage)
