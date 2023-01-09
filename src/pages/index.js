// Step 1: Import React
import * as React from 'react'
import Layout from '../pages/layout'
import { Seo } from '../components/seo'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>That's right. I MADE THIS WEBSITE HEHHEHEHEHEH.</p>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
// export const Head = () => <title>Home Page</title>

export const Head = () => (
  <Seo title="Home Page" description="Troy's home page for his personal site, home to future projects and stuff yaknow"/>
)

// Step 3: Export your component
export default IndexPage
