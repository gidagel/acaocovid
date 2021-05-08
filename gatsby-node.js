const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({ fromPath: '/dash', toPath: '/simulador/territorios', isPermanent: true });
  createRedirect({ fromPath: '/escolas', toPath: '/simulador/escolas', isPermanent: true });
  
  const pages = await graphql(`
    {
      allPrismicPost {
        nodes {
          id
          uid
          lang
          type
          url
        }
      }
      allPrismicStudy {
        nodes {
          id
          uid
          lang
          type
          url
        }
      }
      allPrismicPublication {
        nodes {
          id
          uid
          lang
          type
          url
        }
      }
      allPrismicNews {
        nodes {
          id
          uid
          lang
          type
          url
        }
      }
    }
  `)

  pages.data.allPrismicPost.nodes.forEach((page) => {
    createPage({
        path: page.url,
        component: path.resolve(__dirname, 'src/templates/post.js'),
        context: { ...page },
      })
  })

  pages.data.allPrismicStudy.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/study.js'),
      context: { ...page},
    })
  })

  pages.data.allPrismicPublication.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/publication.js'),
      context: { ...page},
    })
  })

  pages.data.allPrismicNews.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/news.js'),
      context: { ...page},
    })
  })
}