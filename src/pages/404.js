import * as React from 'react'
import { withUnpublishedPreview } from 'gatsby-source-prismic'
import { Post } from '../templates/post'
import { Study } from '../templates/study'
import { Homepage } from './index'
import Layout from '../components/layouts'
import { BlogHomePage } from './blog/index'
import { StudiesPage } from './studies/index'
import { PublicationsPage } from './publications/index'
import { PressPage } from './press/index'

const NotFoundPage = () => (
  <Layout>
    <h1>Page not found!</h1>
  </Layout>
)


export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    home: Homepage,
    post: Post,
    study: Study,
    bloghome: BlogHomePage,
    studies: StudiesPage,
    publications: PublicationsPage,
    press: PressPage
  },
})