import React from 'react'
import { Link } from 'gatsby'
import { RichText, Date } from 'prismic-reactjs'


// Function to retrieve a small preview of the post's text
const firstParagraph = (post) => {
  // // Find the first text slice of post's body
  const firstTextSlice = post.body.find((slice) => slice.slice_type === 'text')
  if (firstTextSlice != null) {
    // Set the character limit for the text we'll show in the homepage
    const textLimit = 370
    const text = RichText.asText(firstTextSlice.primary.text.raw)
    const limitedText = text.substring(0, textLimit)

    if (text.length > textLimit) {
      // Cut only up to the last word and attach '...' for readability
      return (
        <p>{`${limitedText.substring(0, limitedText.lastIndexOf(' '))}...`}</p>
      )
    }
    // If it's shorter than the limit, just show it normally
    return <p>{text}</p>
  }
  // If there are no slices of type 'text', return nothing
  return null
}

// A summary of the Blog Post
const PostSummary = ({ post, id }) => {
  // Store and format the blog post's publication date
  let postDate = Date(post.node.data.date)
  postDate = postDate
    ? new Intl.DateTimeFormat('pt', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    }).format(postDate)
    : ''

  // // Default title when post has no title set
  const defaultTitle = 'Untitled'
  return (
    <>
    <div className="post-summary" key={id}>
      <div className="post-content">
        <h2>
          {/* We render a link to a particular post
          * using the linkResolver for the url and its title */}
          <Link to={post.node.url}>
            {RichText.asText(post.node.data.title.raw).length !== 0
              ? RichText.asText(post.node.data.title.raw)
              : defaultTitle}
          </Link>
        </h2>
        <div className="publication-info">
          {post.node.data.type && (post.node.data.type === "Artigo" ? 
            <div className="publication-type green">
              {post.node.data.type}
            </div> :
           <div className="publication-type yellow">
            {post.node.data.type}
           </div> 
          )}
          <p className="blog-post-meta">
            <time>{postDate}</time>
          </p>
        </div>
        {/* Renders a small preview of the post's text */}
        {firstParagraph(post.node.data)}
        <button><Link to={post.node.url}>Ver mais</Link></button>
      </div>
    </div>
  </>
  )
}

export default ({ posts }) => {
  if (!posts) return null

  return (
    <div className="studies-posts container">
      {posts.map((post) => (
        <PostSummary post={post} key={post.node.id} />
      ))}
    </div>
  )
}
