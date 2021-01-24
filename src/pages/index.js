import React, { useEffect } from 'react'
import { withPreview } from 'gatsby-source-prismic'
import Layout from '../components/layouts'


export const Homepage = () => {

  return (
    <Layout>
      <p>Content</p>
    </Layout>
  )
}

export default withPreview(Homepage)
