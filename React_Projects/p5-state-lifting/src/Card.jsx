import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type='text' onChange={(e) =>  props.setName(e.target.value)}/>
      {/* jo bhi input field mae dalenge wo setName mai jata jaega  */}
      <p>Value Inside Text box is: {props.name}</p>
    </div>
  )
}

export default Card
