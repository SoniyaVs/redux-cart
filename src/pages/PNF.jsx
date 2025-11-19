import React from 'react'
import { Link } from 'react-router-dom'


function PNF() {
  return (
    <div style={{ height: '80vh' }} className='d-flex  justify-content-center align-items-center flex-column'>
      <h1 className='fw-bolder'>404</h1>
      <img height={'55%'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGHEiXbe8v1aYoovvj4-JtHoYt6wUny8e-oI3B21wOahNmgpUyi3vOXx9icEYf1jGJbA&usqp=CAU" alt="" />
      <h4>Look Like You're Lost</h4>
      <p>the page you are looking is not available</p>
      <Link to={'/'} className='btn btn-success'>Back to Home</Link>
    </div>
  )
}

export default PNF