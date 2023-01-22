// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <p>Hello I'm Troy :)</p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <Seo title="About" />
    <meta name="description" content="Hi, I'm Troy Lin. I'm currently a second year Student at UNSW, a university from Sydney, Australia, studying a Bachelor of Science and Computer Science. Welcome to my passion project, my website!" />
  </>
)

// Step 3: Export your component
export default AboutPage
