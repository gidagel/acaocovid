import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import Layout from '../components/layouts'

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
      }
    }
  }
`

const PostBody = ({ newsPost }) => {
  return (
    <div className="container">
      <div className="post-header">
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
