import * as React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'

import styled from 'styled-components'
import GlobalStyles from '../styles/GlobalStyles'
import 'normalize.css'

import Layout from '../components/layout'
import Seo from '../components/seo'

const StyledIndex = styled.div`
  .backgroundImage {
    width: 100%;
    background-size: cover;
    background-position: center;
    margin-bottom: 10px;
  }
  .blackOverlay {
    height: 100%;
    background-color: hsl(0, 0%, 10%, 0.3);
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    .about {
      background-color: var(--white);
      margin-top: 140px;
      padding: 30px;
      border-radius: var(--border-radius);
      p {
        max-width: 30em;
        line-height: 1.5;
      }
    }
    .menu {
      background-color: var(--white);
      margin-top: 100px;
      margin-bottom: 50px;
      max-width: 1000px;
      border-radius: var(--border-radius);
      padding: 30px;
      h3 {
        display: block;
        text-align: center;
        font-size: 1.3em;
        color: var(--red);
      }
      .options {
        margin: 40px 0 40px 0;
      }
      .options > div {
        margin-bottom: 30px;
      }
      .toppings {
        display: flex;
        padding: 30px;
        background-color: var(--red);
        border-radius: var(--border-radius);
      }
      .toppings > div {
        background-color: var(--white);
        border-radius: var(--border-radius);
        margin: 20px;
        padding: 40px;
      }
      .toppings > div > ul {
        list-style-type: none;
        padding: 0;
      }
      .toppings li {
        margin-top: 10px;
      }
    }
  }
`

export default function IndexPage({ data }) {
  const [toppingsList, setToppingsList] = useState([
    {
      title: 'Meat',
      items: ['Bacon', 'Ham', 'Sausage', 'Pepperoni', 'Prosciutto', 'Ground beef', 'Anchovies'],
    },
    {
      title: 'Veggies',
      items: [
        'Arugula',
        'Spinach',
        'Pineapple',
        'White Onion',
        'Red Onion',
        'Green Peppers',
        'Green Olives',
        'Fresh Garlic',
        'Roasted Garlic',
        'Black Olives',
        'Brussel Sprouts',
        'Banana Peppers',
        'Artichokes',
        'Mushrooms',
      ],
    },
    {
      title: 'Cheese',
      items: ['Blue Cheese', 'Fresh Mozzorella', 'Swiss', 'Cheddar', 'Pepper Jack'],
    },
    {
      title: 'Sauce',
      items: ['Pizza Sauce', 'Olive Oil', 'BBQ', 'Sriracha', 'Pesto', 'Ranch'],
    },
  ])

  return (
    <Layout>
      <GlobalStyles />
      <Seo title="Home" />
      <StyledIndex>
        <BackgroundImage className="backgroundImage" fluid={data.indexImage.childImageSharp.fluid}>
          <div className="blackOverlay">
            <div className="content">
              <div className="about">
                <h3>lorem Ipsum</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero corporis assumenda laboriosam
                  necessitatibus quasi mollitia quaerat distinctio ex sunt recusandae quas dolore voluptate error,
                  quisquam nisi obcaecati totam quibusdam. Distinctio?
                </p>
              </div>
              <div className="menu">
                <h3>Menu</h3>
                <div className="options">
                  <div className="size-options">
                    <p>
                      <strong>Pizza Sizes:</strong> Small 10” / Medium 12” / Large 16” / Super 18”
                    </p>
                  </div>
                  <div className="toppings-cost">
                    <p>
                      <strong>Additional Toppings:</strong> Small $0.75 / Medium $1.00 / Large $1.50 / Super $1.75
                    </p>
                  </div>
                </div>
                <div className="toppings">
                  {toppingsList.map(category => (
                    <div className={category.title} key={category.title}>
                      <h4>{category.title}</h4>
                      <ul>
                        {category.items.map(topping => (
                          <li key={topping}>{topping}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </BackgroundImage>
      </StyledIndex>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "foad-roshan-Y6OgisiGBjM-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.node.isRequired,
}
