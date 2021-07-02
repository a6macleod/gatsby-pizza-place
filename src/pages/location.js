import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import GlobalStyles from '../styles/GlobalStyles'

import Layout from '../components/layout'
import Seo from '../components/seo'

export default function Location() {
  // this is temporary for the background picture. FIGURE IT OUT!
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "seamless-bg-desktop.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <GlobalStyles />
      <Seo title="Location" />
      <div className="location">
        <h2>Location</h2>
        <h4>529 N. Division St. Ann Arbor, MI</h4>
        <a href="tel:222-333-4444">222-333-4444</a>
        <div className="hours">
          <h4>Hours</h4>
          <p>Sunday-Thursday: 11am - 11pm</p>
          <p>Friday-Saturday: 11am - 1am</p>
          <p>Sunday: Closed</p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.6620551436!2d-83.74606968454604!3d42.285736779191986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cae1458920fe7%3A0xe94b861011cbab2b!2s529%20N%20Division%20St%2C%20Ann%20Arbor%2C%20MI%2048104!5e0!3m2!1sen!2sus!4v1624997702199!5m2!1sen!2sus"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="529 N. Division Ann Arbor, MI"
        />
      </div>
    </Layout>
  )
}
