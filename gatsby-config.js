const {
  prismicRepo,
  accessToken,
} = require('./prismic-configuration')
const linkResolver = require('./src/utils/linkResolver')

const reponame = process.env.PRISMIC_REPO_NAME || prismicRepo
const apiKey = process.env.PRISMIC_API_KEY || accessToken

const blogHomeSchema = require('./custom_types/bloghome.json')
const postSchema = require('./custom_types/post.json')
const categorySchema = require('./custom_types/category.json')
const pressSchema = require('./custom_types/press.json')
const newsSchema = require('./custom_types/news.json')
const publicationsSchema = require('./custom_types/publications.json')
const publicationSchema = require('./custom_types/publication.json')
const studiesSchema = require('./custom_types/studies.json')
const studySchema = require('./custom_types/study.json')

const gastbySourcePrismicConfig = {
  resolve: 'gatsby-source-prismic',
  options: {
    repositoryName: reponame,
    accessToken: apiKey,
    prismicToolbar: true,
    linkResolver: () => (doc) => linkResolver(doc),
    schemas: {
      blogHome: blogHomeSchema,
      post: postSchema,
      category: categorySchema,
      press: pressSchema,
      publications: publicationsSchema,
      studies: studiesSchema,
      study: studySchema,
      publication: publicationSchema,
      news: newsSchema
    },
  },
}

module.exports = {
  siteMetadata: {
    title: 'Ação Covid-19',
    description: 'Ação Covid-19 Website',
    author: '@gidagel',
  },
  plugins: [
    gastbySourcePrismicConfig,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'MyNodes',
        imagePath: 'path.to.image',
      },
    },
  ],
}
