import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'


function WishList() {
  return (
    <>
      <Header />
      <div className='container py-5'>
        <div className="row my-5">
          <div className="col-md-3 mb-2">
            <Card style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" />
              <Card.Body className='text-center'>
                <Card.Title>Title</Card.Title>
                <div className="d-flex justify-content-evenly my-1">
                  <buttonc className='btn text-danger fs-4'><FontAwesomeIcon icon={faHeartCircleXmark} /></buttonc>
                  <buttonc className='btn text-success fs-4'><FontAwesomeIcon icon={faCartPlus} /></buttonc>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
        </div>
    </>
  )
}

export default WishList