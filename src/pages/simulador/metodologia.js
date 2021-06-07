import React from 'react'
import { graphql, Link } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import Img from 'gatsby-image'
import { Date } from 'prismic-reactjs'
import Layout from '../../components/layouts'
import { ImageCaption, Quote, Text } from '../../components/slices'

// Query for the Blog Post content in Prismic
export const postquery = graphql`
  query {
    prismicMethodology {
      data {
        title {
          text
          raw
        }
        main_image {
          url
          fluid {
            src
          }
        }
        description {
          text
        }
        body {
          ... on PrismicMethodologyBodyText {
            id
            primary {
              text {
                raw
              }
            }
            slice_type
          }
          ... on PrismicMethodologyBodyQuote {
            id
            slice_type
            primary {
              quote {
                raw
              }
            }
          }
          ... on PrismicMethodologyBodyImageWithCaption {
            id
            primary {
              image {
                url
              }
              caption {
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
const PostBody = ({ blogPost, ...props }) => {

  const firstImg = (blogPost) => {
      const imgUrl = blogPost.data.main_image.url
      return (imgUrl)
  }

  let postDate = Date(blogPost.data.date)
  postDate = postDate
    ? new Intl.DateTimeFormat('pt', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    }).format(postDate)
    : ''

  return (
    <article {...props}>
      <div className="container">
        <div className="post-header">
          <div className="back">
            <Link to="/">
              <p>Home</p>
            </Link>
            <p>/</p>
            <Link to="/simulador">
              <p>Simulador</p>
            </Link>
            <p>/</p>
            <p>Você está aqui</p>
          </div>
          <h1>
            {blogPost.data.title.text}
          </h1>
          <h3>
            {blogPost.data.description.text}
          </h3>
          <p className="blog-post-meta">
            <time>{postDate}</time>
          </p>
          <Img
            fluid={blogPost.data.main_image.fluid}
            className="main-image"
            imgStyle={{
              objectFit: 'contain',
              width: '100%',
              height: 'auto',
              objectPosition: 'center',
              position: 'relative'
            }}
            alt={blogPost.data.main_image.alt}
          />
          <figcaption className="image-label">
            <small>{blogPost.data.main_image.alt}</small>
          </figcaption>
        </div>
        <div className="post-body">
          <PostSlices slices={blogPost.data.body} />
        </div>
      </div>
      <br />
    </article>
  )
}

export const MethodologyPage = ({ data }) => {
  if (!data) return null
  // Define the Post content returned from Prismic
  const post = data.prismicMethodology

  return (
    <>
      <Layout>
        <PostBody blogPost={post} />
      </Layout>
    </>
  )
}

export default withPreview(MethodologyPage)
