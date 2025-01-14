import React from 'react'
import TrendingCard from './TrendingCard'

const OnlyOnNetflix = () => {

    const style = {
        marginTop: '80px',
    }

  return (
    <div
    style={style}
    className='trending'>
      <TrendingCard imagePath="\onlyimg1.webp"/>  
      <TrendingCard imagePath="\onlyimg2.webp"/>  
      <TrendingCard imagePath="\onlyimg3.webp"/>  
      <TrendingCard imagePath="\onlyimg4.webp"/>  
      <TrendingCard imagePath="\onlyimg5.webp"/>  
    </div>
  )
}

export default OnlyOnNetflix