import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { addToWishList } from '../slices/wishlistSlice'
import { useDispatch, useSelector } from 'react-redux'



function View() {
  // get product id from url
  const { id } = useParams()
  console.log(id);
  const dispatch = useDispatch()

  const userWishlist = useSelector(state => state.wishlistReducer)
  // state for storing product to be view
  const [product, setProduct] = useState({})
  console.log(product);

  useEffect(() => {
    if (sessionStorage.getItem('products')) {
      const allProducts = JSON.parse(sessionStorage.getItem('products'))
      setProduct(allProducts.find(item => item.id == id))
    }
  }, [])

  const handleWishlist = () => {
    const existingProduct = userWishlist?.find(item=>item.id == id)
    if (existingProduct) {
      alert('Product already in Wishlist..!!')
    } else {
      dispatch(addToWishList(product))
    }

  }

  return (
    < >
      <Header />
      <div className="container py-5">
        <div className="row my-5">
          <div className="col-md-6 text-center">
            <img className='img-fluid' src={product?.thumbnail} alt="" />
            <div className="d-flex py-2 justify-content-evenly mt-5">
              <button onClick={handleWishlist} className='btn btn-primary'>ADD TO WISHLIST</button>
              <button className='btn btn-success'>ADD TO CART</button>
            </div>
          </div>
          <div className="col-md-6">
            <h1 className='fw-bold'>{product?.title}</h1>
            <h3 className='text-danger fw-bolder'>$ {product?.price}</h3>
            <h4>Brand:{product?.brand}</h4>
            <h4>Category:{product?.category}</h4>
            <h4>Description:{product?.description}</h4>

            <h3 className='my-3'>Client Reviews</h3>
            {product?.reviews?.length > 0 ?
              product?.reviews?.map((item, index) => (
                <div key={index} className="border rounded p-3 shadow">
                  <p><span className='fw-bolder'>{item?.reviewerName} </span>{item?.comment}</p>
                  <p>Rating : {item?.rating} <FontAwesomeIcon className='text-warning' icon={faStar} /></p>
                </div>
              ))

              :
              <div>No Client Reviews are Available</div>
            }
          </div>
        </div>
      </div></>
  )
}

export default View