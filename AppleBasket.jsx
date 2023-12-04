import React from 'react'

const AppleBasket = (props) => {
  return (
    <div className='basket'>
        <div className='basket-content'>
      <h1>{props.count} Apples</h1>
      <p>Totel Apples :  {props.count} <b>{props.status}</b></p>
      </div>
    </div>
  )
}

export default AppleBasket
