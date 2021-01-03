import React from "react"

const Card = ({ heading, paragraph, image, imageAlt, style, className }) => (
  <div className={className ? className : "card_wrapper"} style={style}>
    <h3 className="card_heading">{heading}</h3>
    <p>{paragraph}</p>
    {image ? <img src={image} alt={imageAlt} /> : null}
  </div>
)

export default Card
