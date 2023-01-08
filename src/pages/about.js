// Step 1: Import React
import * as React from 'react'
import Layout from '../pages/layout'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <p>Hello I'm Troy :). If you've somehow found this page you're a creep</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage
