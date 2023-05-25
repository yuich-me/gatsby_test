import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the pround creator of this test site using Gatsby.</p>
        </Layout>
    )
}

export const Head = () => {
    <>
        <title>About Me</title>
        <meta name='description' content='test description' />
    </>
}

export default AboutPage