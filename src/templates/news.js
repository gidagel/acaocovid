import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import Layout from '../components/layouts'
import { ImageCaption, Quote, Text } from '../components/slices'

// Query for the News single-type content in Prismic
export const newsquery = graphql`
  query NewsPostQuery($uid: String) {
    prismicNews(uid: { eq: $uid }) {
      id
      uid
      lang
      type
      url
      data {
        date
        title {
          raw
        }
        external_link {
          url
        }
        body {
          ... on PrismicNewsBodyText {
            slice_label
            slice_type
            primary {
              text {
                raw
              }
            }
          }
          ... on PrismicNewsBodyQuote {
            slice_label
            slice_type
            primary {
              quote {
                raw
              }
            }
          }
          ... on PrismicNewsBodyImageWithCaption {
            id
            slice_label
            slice_type
            primary {
              image {
                alt
                url
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
`

// Sort and display the different slice options
const PostSlices = ({ slices }) =>
  slices.map((slice, index) => {
    const res = (() => {
      switch (slice.slice_type) {
        case 'text':
          return (
            <div key={index} className="homepage-slice-wrapper">
              <Text slice={slice} />
            </div>
          )

        case 'quote':
          return (
            <div key={index} className="homepage-slice-wrapper">
              <Quote slice={slice} />
            </div>
          )

        case 'image_with_caption':
          return (
            <div key={index} className="homepage-slice-wrapper">
              <ImageCaption slice={slice} />
            </div>
          )

        default:
      }
    })()
    return res
  })

// Display the title, date, and content of the Post
const PostBody = ({ newsPost }) => {
  return (
    <div>
      <div className="container post-header">
        <div className="back">
          <Link to="/">back to list</Link>
        </div>
        <h1>
          {RichText.asText(newsPost.title.raw).length !== 0
            ? RichText.asText(newsPost.title.raw)
            : 'Untitled'}
        </h1>
      </div>
      {/* Go through the slices of the post and render the appropiate one */}
      <PostSlices slices={newsPost.body} />
    </div>
  )
}

export const News = ({ data }) => {
  if (!data) return null
  // Define the Post content returned from Prismic
  const news = data.prismicNews.data

  return (
    <Layout>
      <PostBody newsPost={news} />
    </Layout>
  )
}

export default withPreview(News)
