import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>Oh No!!! This page doesn't exist!</p>
  </Layout>
)

export default NotFoundPage
