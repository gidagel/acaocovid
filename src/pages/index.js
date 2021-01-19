import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import Layout from '../components/layouts'
import { ImageCaption, Quote, Text } from '../components/slices'


export const Homepage = () => {
  return (
    <Layout>
      <a href='/blog'>Blog</a>
    </Layout>
  )
}

export default withPreview(Homepage)
