import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Dog from '../images/dog.jpg'
// import { graphql } from 'gatsby'

const IndexPage = () => {
  return (
    <>
      <Layout pageTitle='Home' pageHeading='Site'>
        Welcome to my cool website page
        <StaticImage
          src='../images/dog.jpg'
          loading='eager'
          placeholder='blurred'
          alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
        />
        <StaticImage
          alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
          src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large'
          placeholder='tracedSVG'
        />
        {/* <img
          src={Dog}
          alt='Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera'
        /> */}
      </Layout>
    </>
  )
}

export default IndexPage
