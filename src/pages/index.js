import React, { useEffect } from 'react'
import { withPreview } from 'gatsby-source-prismic'
import Layout from '../components/layouts'


export const Homepage = () => {

  return (
    <Layout>
      <a href='/blog'>Blog</a>
    </Layout>
  )
}

export default withPreview(Homepage)
