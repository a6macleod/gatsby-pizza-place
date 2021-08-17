/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';

import styled from 'styled-components';
import Header from './header';

const LayoutStyles = styled.div`
  .backgroundImage {
    width: 100%;
    background-size: cover;
    background-position: center;
  }
  .blackOverlay {
    height: 100%;
    background-color: hsl(0, 0%, 10%, 0.3);
  }
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding-bottom: 20px;
    a {
      color: #fff;
      margin-left: 5px;
    }
    a:hover {
      text-decoration: underline;
    }
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      indexImage: file(relativePath: { eq: "foad-roshan-Y6OgisiGBjM-unsplash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      locationImage: file(relativePath: { eq: "assim-el-qochairi-ZSIb-lseiqA-unsplash (1).jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <Header />
      <LayoutStyles>
        <BackgroundImage className="backgroundImage" fluid={data.indexImage.childImageSharp.fluid}>
          <div className="blackOverlay">
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built by
              {` `}
              <a href="https://www.andrewkmacleod.com">Andrew MacLeod</a>
            </footer>
          </div>
        </BackgroundImage>
      </LayoutStyles>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
