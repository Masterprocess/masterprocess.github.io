import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const ResumePage = () => (
  <Layout>
    <section className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-2xl font-bold">Resume</h1>
      <p>
        <a href="/resume.pdf" className="text-bauhausBlue underline">Download my resume</a>
      </p>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Resume" />

export default ResumePage
