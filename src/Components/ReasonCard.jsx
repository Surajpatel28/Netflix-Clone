import React from 'react'
import "./ReasonCard.css"

const ReasonCard = () => {
  return (
    <div className='reasons'>
      <div className="individual-cards">
        <p>
        Stories tailored to your taste
        </p>
        <img src="/icon1.png" alt="" />
        </div>
      <div className="individual-cards">
        <p>
        Cancel or switch plans anytime
        </p>
        <img src="/icon2.png" alt="" />

        </div>
      <div className="individual-cards">
        <p>
        A place just for kids
        </p>
        <img id='heart' src="/icon3.png" alt="" />

        </div>
      <div className="individual-cards">
        <p>
        For your phone, tablet, laptop and TV
        </p>
        <img src="/icon4.png" alt="" />

        </div>
    </div>
  )
}

export default ReasonCard