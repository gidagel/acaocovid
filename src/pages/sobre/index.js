import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layouts'
import About from '../../components/About'
import Partners from '../../components/Partners'
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
              raw
            }
            section_title {
              text
              raw
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
              raw
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
      <Partners />
    </Layout>
  )
}

export default withPreview(AboutPage)
