import React from 'react'
import { graphql, Link } from 'gatsby'
import { withPreview } from 'gatsby-source-prismic'
import Img from 'gatsby-image'
import { RichText, Date } from 'prismic-reactjs'
import Layout from '../components/layouts'
import { ImageCaption, Quote, Text } from '../components/slices'
import SEO from '../components/SEO'

// Query for the Blog Post content in Prismic
export const postquery = graphql`
  query BlogPostQuery($uid: String) {
    prismicPost(uid: { eq: $uid }) {
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
        main_image {
          url
          alt
          fluid {
            src
          }
        }
        description {
          raw
        }
        body {
          ... on PrismicPostBodyText {
            slice_label
            slice_type
            primary {
              text {
                raw
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_label
            slice_type
            primary {
              quote {
                raw
              }
            }
          }
          ... on PrismicPostBodyImageWithCaption {
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
const PostBody = ({ blogPost, ...props }) => {

  const firstImg = (blogPost) => {
      const imgUrl = blogPost.data.main_image.url
      return (imgUrl)
  }

  let postDate = Date(blogPost.data.date)
  postDate = postDate
    ? new Intl.DateTimeFormat('pt-BR', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    }).format(postDate)
    : ''

  return (
    <article {...props}>
      <SEO
        post={{
          image: firstImg(blogPost) || false,
          title: blogPost.data.title.raw,
          url: blogPost.url,
          description: blogPost.data.description.raw,
        }}
      />
      <div className="container">
        <div className="post-header">
          <div className="back">
            <Link to="/">
              <p>Home</p>
            </Link>
            <p>/</p>
            <Link to="/blog">
              <p>Blog</p>
            </Link>
            <p>/</p>
            <p>Você está aqui</p>
          </div>
          <h1>
            {RichText.asText(blogPost.data.title.raw).length !== 0
              ? RichText.asText(blogPost.data.title.raw)
              : 'Untitled'}
          </h1>
          <h3>
            {RichText.asText(blogPost.data.description.raw).length !== 0
              ? RichText.asText(blogPost.data.description.raw)
              : 'Untitled'}
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
    </article>
  )
}

export const Post = ({ data }) => {
  if (!data) return null
  // Define the Post content returned from Prismic
  const post = data.prismicPost

  return (
    <>
      <Layout>
        <PostBody blogPost={post} />
      </Layout>
    </>
  )
}

export default withPreview(Post)
