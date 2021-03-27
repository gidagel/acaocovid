import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import Layout from '../components/layouts'
import { ImageCaption, Quote, Text } from '../components/slices'

// Query for the Blog Post content in Prismic
export const publicationquery = graphql`
  query PublicationPostQuery($uid: String) {
    prismicPublication(uid: { eq: $uid }) {
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
        article_files {
          url
        }
        body {
          ... on PrismicPublicationBodyText {
            slice_label
            slice_type
            primary {
              text {
                raw
              }
            }
          }
          ... on PrismicPublicationBodyQuote {
            slice_label
            slice_type
            primary {
              quote {
                raw
              }
            }
          }
          ... on PrismicPublicationBodyImageWithCaption {
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
const PostBody = ({ publicationPost }) => {
  return (
    <div>
      <div className="container post-header">
        <div className="back">
          <Link to="/publicacoes">Voltar</Link>
        </div>
        <h1>
          {RichText.asText(publicationPost.title.raw).length !== 0
            ? RichText.asText(publicationPost.title.raw)
            : 'Untitled'}
        </h1>
        <a href={publicationPost.article_files.url} target="_blank">Ver PDF completo</a> 
      </div>
      <br/>
      {/* Go through the slices of the post and render the appropiate one */}
      <PostSlices slices={publicationPost.body} />
    </div>
  )
}

export const Publication = ({ data }) => {
  if (!data) return null
  // Define the Post content returned from Prismic
  const publication = data.prismicPublication.data

  return (
    <Layout>
      <PostBody publicationPost={publication} />
    </Layout>
  )
}

export default withPreview(Publication)
