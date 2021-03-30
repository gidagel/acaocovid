import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import Layout from '../components/layouts'
import { ImageCaption, Quote, Text } from '../components/slices'
import { Doc } from '../components/Icons'
import SEO from '../components/SEO'

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
        type
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
const PostBody = ({ publicationPost, props }) => {
  
  const firstParagraph = (publicationPost) => { 
  const imgSlice = publicationPost.body.find((slice) => slice.slice_type === 'image_with_caption')
  if (imgSlice != null) {
    const description = RichText.asText(imgSlice.primary.caption.raw)
  
      return description
    }
  }

  const firstImg = (publicationPost) => { 
    const imgSlice = publicationPost.body.find((slice) => slice.slice_type === 'image_with_caption')
    if (imgSlice != null) {
      const imgUrl = imgSlice.primary.image.url
    
        return imgUrl
      }
    }
  return (
    <article {...props}>
      <SEO
        post={{
          image: firstImg(publicationPost.data) || false,
          title: publicationPost.data.title.raw,
          url: publicationPost.url,
          description: firstParagraph(publicationPost.data)
        }}
      />
      <div className="container">
        <div className="post-header">
          <div className="back">
            <Link to="/">
              <p>Home</p>
            </Link>
            <p>/</p>
            <Link to="/publicacoes">
              <p>Publicações</p>
            </Link>
            <p>/</p>
            <p>Você está aqui</p>
          </div>
          <h1>
            {RichText.asText(publicationPost.data.title.raw).length !== 0
              ? RichText.asText(publicationPost.data.title.raw)
              : 'Untitled'}
          </h1>
          {publicationPost.data.article_files.url &&
          <div className='pdf-view'>
            <Doc />
            <a href={publicationPost.data.article_files.url} target="_blank">Ver PDF completo</a> 
          </div>
          } 
        </div>
        {/* Go through the slices of the post and render the appropiate one */}
        <div className='post-body'>
          <PostSlices slices={publicationPost.data.body} />
        </div>
      </div>
    </article>
  )
}

export const Publication = ({ data }) => {
  if (!data) return null
  // Define the Post content returned from Prismic
  const publication = data.prismicPublication

  return (
    <Layout>
      <PostBody publicationPost={publication} />
    </Layout>
  )
}

export default withPreview(Publication)
