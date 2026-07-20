import React from 'react'
import man from '../src/assets/man.jpg'
// class name is being used instead of class
import "./user_card.css"
const UserCard = (props) => {
  return (
    <div className='user-Container'>
      <img src={man} alt="User Image" id='User-img'/>
      <h2 className="username">{props.name}</h2>
      <p className="title" id="user-title">App & Web developer</p>
      <p id="user-desc">One of the best person for Development</p>
    </div>
  )
}

export default UserCard
