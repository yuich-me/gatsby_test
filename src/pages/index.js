// Import React
import * as React from 'react'
// Import layout prop component
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Define the component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Testing out the Layout component from Gatsby</p>
      <StaticImage
        alt="A magestic duck flapping it's wings."
        src="../images/duck.jpg"
      />
    </Layout>
  )
}


export const Head = () => <title>Home Page</title>

// export the component
export default IndexPage