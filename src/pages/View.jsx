import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Header from '../components/Header'



function View() {
  return (
    < >
    <Header/>
      <div className="container py-5">
        <div className="row my-5">
          <div className="col-md-6 text-center">
            <img className='img-fluid' src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <div className="d-flex py-2 justify-content-evenly mt-5">
              <button className='btn btn-primary'>ADD TO WISHLIST</button>
              <button className='btn btn-success'>ADD TO CART</button>
            </div>
          </div>
          <div className="col-md-6">
            <h1 className='fw-bold'>Title</h1>
            <h3 className='text-danger fw-bolder'>$ Price</h3>
            <h4>Brand:</h4>
            <h4>Category:</h4>
            <h4>Description:</h4>

            <h3 className='my-3'>Client Reviews</h3>
            <div className="border rounded p-3 shadow">
              <p><span className='fw-bolder'>username : </span>message</p>
              <p>Rating : number <FontAwesomeIcon className='text-warning' icon={faStar} /></p>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default View