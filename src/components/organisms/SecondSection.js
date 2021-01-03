import React from "react"
import Card from "../atoms/Card"
import shape from "../../images/shape.png"

const CardsContent = [
  {
    id: 1,
    heading: "Heading",
    paragraph: "Lorem ipsum dolor sit amet.",
    image: shape,
    imageAlt: "Shape logo",
  },
  {
    id: 2,
    heading: "Heading",
    paragraph:
      "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenea uismod bibendum laoreet. Proin gravida dolor sit amet lacus.",
  },
  {
    id: 3,
    heading: "Ultra Mega Super Long Heading",
    paragraph:
      "Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenea uismod bibendum laoreet. Lorem ipsum dolor sit amet",
  },
]

const SecondSection = ({ heading, paragraph, secondHeading }) => (
  <div className="second_section_wrapper">
    <h1>{heading}</h1>
    <p>{paragraph}</p>
    <h2>{secondHeading}</h2>
    <div className="sec_cards_wrapper">
      {CardsContent.map(card => (
        <Card
          className="sec_section_card"
          key={Math.random() + card.id + card.heading}
          heading={card.heading}
          paragraph={card.paragraph}
          image={card.image}
          imageAlt={card.imageAlt}
        />
      ))}
    </div>
  </div>
)

export default SecondSection
