import React from 'react'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  return (
    <>
      <h1>Hello, world</h1>
      <p>This page was built on {data.site.buildTime}</p>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      buildTime
    }
  }
`
