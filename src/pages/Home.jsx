import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { allGetProducts } from '../slices/productSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
function Home() {
  const dispatch = useDispatch()
  const [currPage, setCurrPage] = useState(1)



  const { loading, allProducts, error } = useSelector(state => state.productReducer)
  // console.log(allProducts);
  const productPerPage = 8
  const totalPages = Math.ceil(allProducts.length / productPerPage)
  const pageItemLastIndex = currPage * productPerPage
  const pageItemStartIndex = pageItemLastIndex - productPerPage

  const navigateNextPage = () => {
    if (currPage != totalPages) {
      setCurrPage(currPage + 1)
    }
  }
  const navigatePreviousPage = () => {
    if (currPage != 1) {
      setCurrPage(currPage - 1)
    }
  }

  const visibleProductArray = allProducts?.slice(pageItemStartIndex, pageItemLastIndex)
  useEffect(() => {
    dispatch(allGetProducts())
  }, [])

  return (
    <>
      <Header insideHome={true} />
      <div className='container py-5'>
        {
          loading ?
            <div className='text-center my-5 fs-5 fw-bolder'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading" /></div>
            :
            <div className="row my-5">
              {
                allProducts?.length > 0 ?
                  visibleProductArray?.map(product => (
                    <div key={product?.id} className="col-md-3 mb-2">
                      <Card style={{ width: '18rem' }}>
                        <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
                        <Card.Body className='text-center'>
                          <Card.Title>{product?.title}</Card.Title>
                          <Link to={`/products/${product?.id}/view`} className='btn btn-secondary'>View more..</Link>
                        </Card.Body>
                      </Card>
                    </div>))

                  :
                  <p className='fs-5 fw-bold my-5'>Product not Available</p>
              }
              <div className="my-3 text-center">
                <button onClick={navigatePreviousPage} className='btn'>
                  <FontAwesomeIcon icon={faBackward} />
                </button>
                <span className="fw-bolder me-2"> {currPage} of {totalPages}</span>
                <button onClick={navigateNextPage} className='btn'>
                  <FontAwesomeIcon icon={faForward} />
                </button>
              </div>
            </div>
        }
      </div>
    </>
  )
}

export default Home