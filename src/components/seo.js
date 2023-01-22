import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

  return (
    <>
      <title>{data.site.siteMetadata.title} | {title}</title>
      <meta name="siteUrl" content={data.site.siteMetadata.siteUrl} />
    </>
  )
}

export default Seo
