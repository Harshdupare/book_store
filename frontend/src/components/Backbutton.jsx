import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const Backbutton = ({destination = '/'}) => {
  return (
    <div>
        <Link to={destination} className='btn btn-dark my-3' >
            <BsArrowLeft className='text-2xl'/>
        </Link>
      
    </div>
  )
}

export default Backbutton
