import * as React from "react"
import Layout from "../components/Layout"
import ContactForm from "../components/ContactForm"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <section className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-2xl font-bold">Contact Me</h1>
      <ContactForm />
    </section>
  </Layout>
)

export const Head = () => <Seo title="Contact" />

export default ContactPage
