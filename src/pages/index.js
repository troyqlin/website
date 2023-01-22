// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>That's right, I made this website heh. It's still in the works, so be patient.</p>
      <p>Here's a wallpaper that I drew for a loser.</p>

      {/* This ruins the width of the page and offsets it slightly */}
      <StaticImage
        alt="I drew this wallpaper for a friend of mine. It doesn't look the best but I'm proud of it."
        src="../images/space.png"
      />
    </Layout>
  )
}

export const Head = () => (
  <>
    <Seo title="Home" />
    <meta name="description" content="Hi, I'm Troy Lin. I'm currently a second year Student at UNSW, a university from Sydney, Australia, studying a Bachelor of Science and Computer Science. Welcome to my passion project, my website!" />
  </>
)

// Step 3: Export your component
export default IndexPage
