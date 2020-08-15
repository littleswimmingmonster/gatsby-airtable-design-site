import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from "../components"
import SEO from "../components/seo"
const HomePage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

export default HomePage
