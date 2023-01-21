import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          pageTitle
        }
      }
    }
  `)

  return (
    <title>{data.site.siteMetadata.pageTitle}</title>
  )
}

export default Seo
