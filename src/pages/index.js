import React from "react"

import SEO from "../components/seo"
import "../sass/index.scss"
import logo from "../images/logo.png"
import FirstSection from "../components/organisms/FirstSection"
import SecondSection from "../components/organisms/SecondSection"

const PageContent = {
  firstSection: {
    heading: "Heading",
    paragraph: "Lorem ipsum dolor sit amet consect etur adipsicing eilt.",
  },
  secondSection: {
    heading: "Heading",
    paragraph: "Lorem ipsum dolor sit amet consect etur adipsicing eilt.",
    secondHeading: "Heading",
  },
}

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <header>
      <img className="psd_logo" src={logo} alt="psd2css website logo" />
    </header>
    <FirstSection
      heading={PageContent.firstSection.heading}
      paragraph={PageContent.firstSection.paragraph}
    />
    <SecondSection
      heading={PageContent.secondSection.heading}
      secondHeading={PageContent.secondSection.secondHeading}
      paragraph={PageContent.secondSection.paragraph}
    />
  </>
)

export default IndexPage
