import React from "react"
import MySlider from "../molecules/Slider"

const FirstSection = ({ heading, paragraph }) => (
  <div className="section_wrapper">
    <h1>{heading}</h1>
    <p>{paragraph}</p>
    <MySlider />
  </div>
)

export default FirstSection
