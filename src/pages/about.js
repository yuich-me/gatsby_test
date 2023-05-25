import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the pround creator of this test site using Gatsby.</p>
        </Layout>
    )
}

export const Head = () => <Seo title="About me"></Seo>

export default AboutPage