import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layouts'
import { Features } from '../components/home/features'
import { About } from '../components/home/about'
import { BlogPosts } from '../components/home/blogPosts'
import { NewsPosts } from '../components/home/newsPosts'
import { withPreview } from 'gatsby-source-prismic'
import { HomeHeader } from '../components/home/homeHeader';

export const query = graphql`
  query {
    allPrismicStudy(
      sort: { fields: data___date, order: DESC }
      filter: {data: {categories: {elemMatch: {category: {tags: {eq: "estudos"}}}}}}
      ) {
      edges {
        node {
          url
          id
          uid
          type
          data {
            title {
              raw
            }
            date
            body {
              ... on PrismicStudyBodyText {
                id
                slice_label
                slice_type
                primary {
                  text {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
    allPrismicPost(
      limit: 3
      sort: { fields: data___date, order: DESC }
      filter: {data: {categories: {elemMatch: {category: {tags: {eq: "blog"}}}}}}
      ) {
      edges {
        node {
          url
          id
          uid
          type
          data {
            title {
              raw
            }
            date
            main_image {
              url
              alt
              fluid {
                src
              }
            }
            body {
              ... on PrismicPostBodyText {
                id
                slice_label
                slice_type
                primary {
                  text {
                    raw
                  }
                }
              }
              ... on PrismicPostBodyImageWithCaption {
                id
                slice_label
                slice_type
                primary {
                  image {
                    alt
                    url
                    fluid {
                      base64 
                      aspectRatio 
                      src 
                      srcSet 
                      sizes 
                    }
                  }
                  caption {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
    allPrismicNews(
      limit: 3
      sort: { fields: data___date, order: DESC }
      filter: {data: {categories: {elemMatch: {category: {tags: {eq: "imprensa"}}}}}}
      ) {
      edges {
        node {
          url
          id
          uid
          type
          data {
            title {
              raw
            }
            date
            external_link {
              url
            }
            body {
              ... on PrismicNewsBodyText {
                id
                slice_label
                slice_type
                primary {
                  text {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const Homepage = ({data}) => {
  const studies = data.allPrismicStudy.edges
  const posts = data.allPrismicPost.edges
  const press = data.allPrismicNews.edges
  return (
    <Layout>
      <div className="homePage">
        <HomeHeader/>
        <Features studies={studies}/>
        <About/>
        <div className="homeGrid">
          <BlogPosts posts={posts} />
          <NewsPosts press={press} />
        </div>
      </div>
    </Layout>
  )
}

export default withPreview(Homepage)