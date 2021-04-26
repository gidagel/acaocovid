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
    prismicHome {
      data {
        display_title {
          text
        }
        body {
          ... on PrismicHomeBodyHeadlineWithButton {
            id
            primary {
              description {
                text
              }
              headline {
                text
              }
              button {
                url
              }
            }
            slice_type
          }
          ... on PrismicHomeBodyFullWidthImage {
            id
            primary {
              image {
                url
              }
            }
            slice_type
          }
          ... on PrismicHomeBodyInfoWithImage {
            id
            primary {
              text {
                text
              }
              featured_image {
                url
              }
              section_title {
                text
              }
            }
            slice_type
          }
          ... on PrismicHomeBodyTextInfo {
            id
            slice_type
            primary {
              left_column_text {
                text
              }
              right_column_text {
                text
              }
              section_title {
                text
              }
            }
          }
        }
      }
    }
  }
`

export const HomePage = ({data}) => {
  const studies = data.allPrismicStudy.edges
  const posts = data.allPrismicPost.edges
  const press = data.allPrismicNews.edges
  const homeHeader = data.prismicHome.data
  return (
    <Layout>
      <div className="homePage">
        <HomeHeader homeHeader={homeHeader} />
        <div className="homeStudies container">
        <Features studies={studies}/>
        </div>
        <About/>
        <div className="homeGrid container">
          <BlogPosts posts={posts} />
          <NewsPosts press={press} />
        </div>
      </div>
    </Layout>
  )
}

export default withPreview(HomePage)