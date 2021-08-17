import * as React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';

import Layout from '../components/layout';
import Seo from '../components/seo';

const StyledLocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    margin: 50px 0 100px 0;
    padding: 50px;
    border-radius: var(--border-radius);
    h2 {
      color: var(--red);
    }
    a {
      color: var(--black);
    }
    a:hover {
      text-decoration: underline;
    }
    .hours {
      margin-top: 20px;
      text-align: center;
    }
    iframe {
      border: solid 1px hsl(10, 0%, 20%);
    }
  }
`;

export default function Location() {
  return (
    <Layout>
      <GlobalStyles />
      <Seo title="Location" />
      <StyledLocation className="location">
        <div className="content">
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
      </StyledLocation>
    </Layout>
  );
}
