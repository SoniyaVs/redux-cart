import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeWishlist } from '../slices/wishlistSlice'
import { addToWishList } from '../slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../slices/cartSlice'

function WishList() {
  const dispatch = useDispatch()
  const useWishlist = useSelector(state => state.wishlistReducer)
  const useCart = useSelector(state => state.cartReducer)

  const handleCart = (product) => {
    const existingProduct = useCart?.find(item => item.id == product.id)
    dispatch(addToCart(product))
    dispatch(removeWishlist(product.id))
    if (existingProduct) {
      Swal.fire({
        title: 'Completed!',
        text: existingProduct ? `Quantity of ${product.title} is updated successfully` : `Product add to your cart..!!`,
        icon: 'success',
        confirmButtonText: 'OK'
      })
    }

  }
  return (
    <>
      <Header />
      <div className='container py-5'>

        {
          useWishlist?.length > 0 ?
            <div className="row my-5">
              {
                useWishlist?.map(product => (
                  <div key={product?.id} className="col-md-3 mb-2">
                    <Card style={{ width: '18rem' }}>
                      <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
                      <Card.Body className='text-center'>
                        <Card.Title>{product?.title}</Card.Title>
                        <div className="d-flex justify-content-evenly my-1">
                          <button onClick={() => dispatch(removeWishlist(product?.id))} className='btn text-danger fs-4'>
                            <FontAwesomeIcon icon={faHeartCircleXmark} />
                          </button>
                          <button onClick={() => handleCart(product)} className='btn text-success fs-4'><FontAwesomeIcon icon={faCartPlus} /></button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))
              }
            </div>
            :
            <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center flex-column'>
              <h3>Wishlist Empty!!</h3>
              <img className='w-25' src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" />
              <Link className='btn btn-primary' to={'/'}>Add more</Link>
            </div>


        }
      </div>
    </>
  )
}

export default WishList