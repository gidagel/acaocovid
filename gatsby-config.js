const {
  prismicRepo,
  accessToken,
} = require('./prismic-configuration')
const linkResolver = require('./src/utils/linkResolver')

const reponame = process.env.PRISMIC_REPO_NAME || prismicRepo
const apiKey = process.env.PRISMIC_API_KEY || accessToken

const homeblogSchema = require('./custom_types/homeblog.json')
const postSchema = require('./custom_types/post.json')
const categorySchema = require('./custom_types/category.json')
const pressSchema = require('./custom_types/press.json')
const newsSchema = require('./custom_types/news.json')
const publicationsSchema = require('./custom_types/publications.json')
const publicationSchema = require('./custom_types/publication.json')
const studiesSchema = require('./custom_types/studies.json')
const studySchema = require('./custom_types/study.json')
const simulatorSchema = require('./custom_types/simulator.json')
const methodologySchema = require('./custom_types/methodology.json')
const simulatorterritoriesSchema = require('./custom_types/simulatorterritories.json')
const simulatorschoolsSchema = require('./custom_types/simulatorschools.json')
const aboutSchema = require('./custom_types/about.json')
const homeSchema = require('./custom_types/home.json')

const gastbySourcePrismicConfig = {
  resolve: 'gatsby-source-prismic',
  options: {
    repositoryName: reponame,
    accessToken: apiKey,
    prismicToolbar: true,
    linkResolver: () => (doc) => linkResolver(doc),
    schemas: {
      homeblog: homeblogSchema,
      post: postSchema,
      category: categorySchema,
      press: pressSchema,
      publications: publicationsSchema,
      studies: studiesSchema,
      study: studySchema,
      publication: publicationSchema,
      news: newsSchema,
      simulator: simulatorSchema,
      methodology: methodologySchema,
      simulatorterritories: simulatorterritoriesSchema,
      simulatorschools: simulatorschoolsSchema,
      about: aboutSchema,
      home: homeSchema
    }
  },
}

module.exports = {
  siteMetadata: {
    title: 'Ação Covid-19',
    titleTemplate: "Ação Covid-19: Modelo de Dispersão do Coronavírus",
    description: 'Ação Covid-19: grupo de pesquisadores que estudam a pandemia e a desigualdade no Brasil',
    baseUrl: "www.acaocovid.org",
    image: "/images/main_logo.jpg",
    author: '@gidagel',
    twitterUsername: '@AcaoCovid',
    siteUrl: `https://www.acaocovid.org`,
  },
  plugins: [
    gastbySourcePrismicConfig,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-client-side-redirect',
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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
