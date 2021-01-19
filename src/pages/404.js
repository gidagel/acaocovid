import * as React from 'react'
import { withUnpublishedPreview } from 'gatsby-source-prismic'
import { Post } from '../templates/post'
import { Homepage } from './index'
import Layout from '../components/layouts'
import { BlogHomePage } from './blog/index'

const NotFoundPage = () => (
  <Layout>
    <h1>Page not found!</h1>
  </Layout>
)


export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    index: Homepage,
    blog_post: Post,
    blog_home: BlogHomePage
  },
})