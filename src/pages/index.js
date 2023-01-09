// Step 1: Import React
import * as React from 'react'
import Layout from '../pages/layout'
import { Seo } from "../components/seo"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
// export const Head = () => <title>Home Page</title>

export const Head = () => (
  <Seo title="Home Page" />
)

// Step 3: Export your component
export default IndexPage
