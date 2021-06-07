import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText, Date } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import Layout from '../components/layouts'
import { ImageCaption, Quote, Text } from '../components/slices'
import { Doc } from '../components/Icons'
import SEO from '../components/SEO'

// Query for the Blog Post content in Prismic
export const studyquery = graphql`
  query StudyPostQuery($uid: String) {
    prismicStudy(uid: { eq: $uid }) {
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
          ... on PrismicStudyBodyText {
            slice_label
            slice_type
            primary {
              text {
                raw
              }
            }
          }
          ... on PrismicStudyBodyQuote {
            slice_label
            slice_type
            primary {
              quote {
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
const PostBody = ({ studyPost, ...props }) => {
  const firstParagraph = (studyPost) => {
    const imgSlice = studyPost.body.find(
      (slice) => slice.slice_type === 'image_with_caption',
    )
    if (imgSlice != null) {
      const description = RichText.asText(imgSlice.primary.caption.raw)
      return description
    }
  }
  const firstImg = (studyPost) => {
    const imgSlice = studyPost.body.find(
      (slice) => slice.slice_type === 'image_with_caption'
    )
    if (imgSlice != null) {
      const imgUrl = imgSlice.primary.image.url
      return imgUrl
    }
  }

  let postDate = Date(studyPost.data.date)
  postDate = postDate
    ? new Intl.DateTimeFormat('pt', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    }).format(postDate)
    : ''

  return (
    <article {...props}>
      <SEO
        post={{
          image: firstImg(studyPost.data) || false,
          title: studyPost.data.title.raw,
          url: studyPost.url,
          description: firstParagraph(studyPost.data),
        }}
      />
      <div className="container">
        <div className="post-header">
          <div className="back">
            <Link to="/">
              <p>Home</p>
            </Link>
            <p>/</p>
            <Link to="/estudos">
              <p>Estudos</p>
            </Link>
            <p>/</p>
            <p>Você está aqui</p>
          </div>
          <h1>
            {RichText.asText(studyPost.data.title.raw).length !== 0
              ? RichText.asText(studyPost.data.title.raw)
              : 'Untitled'}
          </h1>
          {studyPost.data.article_files.url && (
            <div className="pdf-view">
              <Doc />
              <a href={studyPost.data.article_files.url} target="_blank">
                Ver PDF completo
              </a>
            </div>
          )}
          <p className="blog-post-meta">
            <time>{postDate}</time>
          </p>
        </div>
        {/* Go through the slices of the post and render the appropiate one */}
        <div className="post-body">
          <PostSlices slices={studyPost.data.body} />
        </div>
      </div>
    </article>
  )
}

export const Study = ({ data }) => {
  if (!data) return null
  // Define the Post content returned from Prismic
  const study = data.prismicStudy

  return (
    <Layout>
      <PostBody studyPost={study} />
    </Layout>
  )
}

export default withPreview(Study)
