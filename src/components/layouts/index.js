import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import Header from './Header'
import HeaderSmall from './HeaderSmall'
import '../../stylesheets/main.scss'

export default (props) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    // eslint-disable-next-line react/jsx-props-no-spreading
    render={(data) => <Layout data={data} {...props} />}
  />
)

const Layout = ({ data, children }) => {
  // Define the meta title and description
  const { title, description } = data.site.siteMetadata

  return (
    <>
      <Helmet htmlAttributes={{lang: "pt-br"}}>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-166351755-1"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'UA-166351755-1');
        `}</script>
        <meta name="description" content={description} />
        <link 
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" 
          rel="stylesheet"
          media="print"
          onload="this.media='all'" 
        />
      </Helmet>
      <Header />
      <HeaderSmall />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
