import React from 'react';
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export const BlogPosts = ({ posts }) => {
  if (!posts) return null

  return (
    <div className='home-blog-featured'>
        <div className='section-title'>
          <h2>Nosso Blog</h2>
          <p>
            Confira as novidades e os destaques sobre o projeto Ação Covid-19. Onde a ação de verdade acontece: medidas de prevenção, tipos de máscara, lives sobre a vacina e muito mais!
          </p>
        </div>
        <div className='home-blogposts'>
          {posts.map((post) => (
          <div className='featured-posts' key={post.node.id}>
            <Link to={post.node.url}>
                <Img fluid={post.node.data.main_image.fluid} imgStyle={{height: 'auto', objectFit: 'contain', width: '100%', position: 'relative'}} />
            </Link>
          </div>
          ))}
        </div>
    </div>
  )
}
