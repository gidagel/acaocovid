import * as React from 'react'
import { withUnpublishedPreview } from 'gatsby-source-prismic'
import { Post } from '../templates/post'
import { Study } from '../templates/study'
import { Publication } from '../templates/publication'
import { News } from '../templates/news'
import Layout from '../components/layouts'
import { BlogHomePage } from './blog/index'
import { StudiesPage } from './estudos/index'
import { PublicationsPage } from './publicacoes/index'
import { PressPage } from './imprensa/index'
import { AboutPage } from './sobre/index'
import { HomePage } from './index'

const NotFoundPage = () => (
  <Layout>
    <h1>Não foi possível encontrar essa página. Volte para a <a href="/">home</a>.</h1>
  </Layout>
)


export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    post: Post,
    study: Study,
    publication: Publication,
    news: News,
    homeblog: BlogHomePage,
    studies: StudiesPage,
    publications: PublicationsPage,
    press: PressPage,
    about: AboutPage, 
    home: HomePage
  },
})