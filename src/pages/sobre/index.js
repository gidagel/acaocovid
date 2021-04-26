import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../../components/layouts'
import Partners from '../../components/Partners'
import { withPreview } from 'gatsby-source-prismic'

export const AboutPage = () => {
  

  return (
    <Layout>
      <Partners />
    </Layout>
  )
}

export default withPreview(AboutPage)
