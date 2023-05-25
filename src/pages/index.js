// Import React
import * as React from 'react'
// Import layout prop component
import Layout from '../components/layout'

// Define the component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Testing out the Layout component from Gatsby</p>
    </Layout>
  )
}


export const Head = () => <title>Home Page</title>

// export the component
export default IndexPage