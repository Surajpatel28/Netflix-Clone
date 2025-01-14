import React from 'react'
import "./TrendingCard.css"
const TrendingCard = (props) => {

console.log(props.imagePath)

  return (
    <img className='trendingimg' src={props.imagePath} alt="" />
  )
}

export default TrendingCard