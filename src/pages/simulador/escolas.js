import React, { useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layouts'
import { withPreview } from 'gatsby-source-prismic'

export const query = graphql`
  query {
    prismicSimulatorschools {
      data {
        body {
          ... on PrismicSimulatorschoolsBodyFullWidthImage {
            id
            primary {
              image {
                url
              }
            }
          }
          ... on PrismicSimulatorschoolsBodyInfoWithImage {
            id
            primary {
              featured_image {
                url
              }
            }
          }
        }
        display_title {
          text
        }
      }
    }
  }
`

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}

export const SimulatorSchoolsPage = ({ data }) => {
  const simulatorSchools = data.prismicSimulatorschools.data
  const size = useWindowSize()

  const imgHeader = (simulatorSchools) => {
    const imgSlice = simulatorSchools.body.find(
      (slice) => slice.id === 'c908b0fe-4d18-5fb9-bd2c-319a0c628f90'
    )
    if (imgSlice != null) {
      const mainImg = imgSlice.primary.image.url
      return mainImg
    }
  }

  const imgMobile = (simulatorSchools) => {
    const imgSlice = simulatorSchools.body.find(
      (slice) => slice.id === '18888528-6e37-52f4-a9e2-f96d49d40ebb'
    )
    if (imgSlice != null) {
      const mainImg = imgSlice.primary.featured_image.url
      return mainImg
    }
  }
  return (
    <Layout>
      <div className="simulator">
        {size.width > 728 && (
          <iframe
            src="https://gidagel.github.io/simuladorescolas/"
            scrolling="yes"
            frameBorder="0"
            width="960px"
            height="550px"
          />
        )}
        {size.width < 728 && (
          <iframe
            src="https://gidagel.github.io/simuladorescolasmobile/"
            scrolling="yes"
            frameBorder="0"
            width="100%"
            height="1550px"
          />
        )}
      </div>
      <figure>
        {size.width > 728 && (
          <img
            src={imgHeader(simulatorSchools)}
            width="100%"
            alt="Escola dispersa ou comprimida"
          />
        )}
        {size.width < 728 && (
          <img
            src={imgMobile(simulatorSchools)}
            width="100%"
            alt="Escola dispersa ou comprimida"
          />
        )}
      </figure>
      <div className="homePage container">
        <div className="simulator-text simulator-title">
          <h2>Como usar o simulador das escolas?</h2>
        </div>
        <div className="how-to-use">
          <iframe
            src="https://www.youtube.com/embed/szg0YXV6t68"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/5-2vK3XqjUg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/mpXoVLCQssY"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default withPreview(SimulatorSchoolsPage)
