import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layouts'
import Simulator from '../../components/Simulator'
import Methodology from '../../components/Methodology'
import { withPreview } from 'gatsby-source-prismic'

export const query = graphql`
  query {
    prismicSimulator {
      data {
        body {
          ... on PrismicSimulatorBodyHeadlineWithButton {
            id
            slice_type
            primary {
              button {
                url
              }
              description {
                text
              }
              headline {
                text
              }
            }
          }
          ... on PrismicSimulatorBodyFullWidthImage {
            id
            primary {
              background_image_position
              image {
                url
              }
            }
            slice_type
          }
          ... on PrismicSimulatorBodyInfoWithImage {
            id
            primary {
              featured_image {
                url
              }
              section_title {
                text
              }
              text {
                text
              }
            }
            slice_type
          }
          ... on PrismicSimulatorBodyTextInfo {
            id
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
            slice_type
          }
        }
        display_title {
          text
        }
      }
    }
  }
`

const SimulatorTerritoriesSummary = ({ simulator }) => {
  const simulatorSectionTitle = (simulator) => {
    const textSlice = simulator.body.find(
      (slice) => slice.id === '44fa1483-19cb-5a5d-8df9-e74766bfb3fb'
    )
    if (textSlice != null) {
      const sectionTitle = textSlice.primary.section_title.text
      return sectionTitle
    }
  }
  const simulatorSectionDescription = (simulator) => {
    const textSlice = simulator.body.find(
      (slice) => slice.id === '44fa1483-19cb-5a5d-8df9-e74766bfb3fb'
    )
    if (textSlice != null) {
      const sectionTitle = textSlice.primary.left_column_text.text
      return sectionTitle
    }
  }
  return (
    <>
      <div className="post-summary">
        <div className="post-content">
          <h2>
            <Link to="/simulador/territorios">
              {simulatorSectionTitle(simulator)}
            </Link>
          </h2>
          <p>{simulatorSectionDescription(simulator)}</p>
          <button>
            <Link to="/simulador/territorios">Ver mais</Link>
          </button>
        </div>
      </div>
    </>
  )
}

const SimulatorSchoolsSummary = ({ simulator }) => {
  const simulatorSectionTitle = (simulator) => {
    const textSlice = simulator.body.find(
      (slice) => slice.id === 'c53ec4a8-a88f-50a0-958c-2f265aaac658'
    )
    if (textSlice != null) {
      const sectionTitle = textSlice.primary.section_title.text
      return sectionTitle
    }
  }
  const simulatorSectionDescription = (simulator) => {
    const textSlice = simulator.body.find(
      (slice) => slice.id === 'c53ec4a8-a88f-50a0-958c-2f265aaac658'
    )
    if (textSlice != null) {
      const sectionTitle = textSlice.primary.left_column_text.text
      return sectionTitle
    }
  }
  return (
    <>
      <div className="post-summary">
        <div className="post-content">
          <h2>
            <Link to="/simulador/escolas">
              {simulatorSectionTitle(simulator)}
            </Link>
          </h2>
          <p>{simulatorSectionDescription(simulator)}</p>
          <button>
            <Link to="/simulador/escolas">Ver mais</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export const SimulatorPage = ({ data }) => {
  const simulator = data.prismicSimulator.data

  return (
    <Layout>
      <div className="homePage">
        <Simulator simulator={simulator} />
      </div>
      <div className="studies-posts container simulator">
        <SimulatorTerritoriesSummary simulator={simulator} />
        <SimulatorSchoolsSummary simulator={simulator} />
      </div>
      <div className="homePage">
        <Methodology simulator={simulator} />
      </div>
    </Layout>
  )
}

export default withPreview(SimulatorPage)
