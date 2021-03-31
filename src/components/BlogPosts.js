import React from 'react'
import Img from 'gatsby-image'

const firstImage = (post) => {
  const imgFluid = post.main_image.fluid
  const altImg = post.main_image.alt
  return (
    <Img
      fluid={imgFluid}
      alt={altImg}
      key={altImg}
      className="img-preview"
      style={{
        zIndex: '0',
      }}
      imgStyle={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
      }}
    />
  )
}

// A summary of the Blog Post
const PostSummary = ({ post, id }) => {
  return (
    <div className="post-summary" key={id}>
      <a href={post.node.url}>{firstImage(post.node.data)}</a>
    </div>
  )
}

export default ({ posts }) => {
  if (!posts) return null
  return (
    <div className="blog-posts container">
      {posts.map((post) => (
        <PostSummary post={post} key={post.node.id} />
      ))}
    </div>
  )
}
