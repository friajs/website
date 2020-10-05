import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewHero from "../components/new-hero"
import Services from "../components/services"
import AboutPanel from "../components/about-panel"
import Articles from "../components/articles"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import theme from "../theme"
import AppsPanel from "../components/apps-panel"
import Footer from "../components/new-footer";
import GenderEqualityPanel from '../components/gender-equality-panel';
import EconomicGrowth from '../components/economic-growth-panel';

const IndexPage = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Home" />
        <NewHero />
        <Services />
        <GenderEqualityPanel />
        <EconomicGrowth />
        <AppsPanel />
        <AboutPanel />
        <AppsPanel />
        <Services />
        <Footer />
      </Layout>
    </ThemeProvider>
  </React.Fragment>
)

export default IndexPage
