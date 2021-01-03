import React, { useState } from "react"
import Card from "../atoms/Card"
import wordpress from "../../images/wordpress.png"
import leftArrow from "../../images/arrowLeft.png"
import rightArrow from "../../images/arrowRight.png"

const CardsContent = [
  {
    id: 1,
    heading: "Heading",
    paragraph: "Lorem ipsum dolor sit amet.",
    image: wordpress,
    imageAlt: "Wordpress logo",
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

//prepare array with cards to toggle
const cards = []
CardsContent.map(item => cards.push(item))
cards.push(...CardsContent.slice(0, CardsContent.length - 1))

const MySlider = () => {
  const [counter, setCounter] = useState(1)

  const handleRightClick = () => {
    const movingWrapper = document.querySelector(".moving_wrapper")

    const cardWidth = document.querySelector(".card_wrapper").clientWidth + 18
    if (counter < 2) {
      movingWrapper.style.transform = `translate(-${cardWidth * counter}px, 0)`
      setCounter(counter + 1)
    } else if (counter === 2) {
      movingWrapper.style.transform = `translate(-${cardWidth * counter}px, 0)`
    }
  }

  const handleLeftClick = () => {
    const movingWrapper = document.querySelector(".moving_wrapper")

    const cardWidth = document.querySelector(".card_wrapper").clientWidth + 18
    if (counter <= 2 && counter >= 1) {
      movingWrapper.style.transform = `translate(-${
        cardWidth * (counter - 1)
      }px, 0)`
      if (counter === 0) {
        setCounter(1)
      } else {
        setCounter(counter - 1)
      }
    }
  }

  return (
    <div className="slider_show_wrapper">
      <button onClick={handleLeftClick}>
        <img src={leftArrow} alt="" />
      </button>
      <div className="cards_wrapper">
        <div className="moving_wrapper">
          {cards.map(card => (
            <Card
              key={Math.random() + card.id + card.heading}
              heading={card.heading}
              paragraph={card.paragraph}
              image={card.image}
              imageAlt={card.imageAlt}
            />
          ))}
        </div>
      </div>

      <button onClick={handleRightClick}>
        <img src={rightArrow} alt="" />
      </button>
    </div>
  )
}

export default MySlider
