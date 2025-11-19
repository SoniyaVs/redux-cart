import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { allGetProducts } from '../slices/productSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
  const dispatch = useDispatch()

  const { loading, allProducts, error } = useSelector(state => state.productReducer)
  console.log(allProducts);

  useEffect(() => {
    dispatch(allGetProducts())
  }, [])

  return (
    <>
      <Header />
      <div className='container py-5'>
        {
          loading ?
            <div className='text-center my-5 fs-5 fw-bolder'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="loading" /></div>
            :
            <div className="row my-5">
              {
                allProducts?.length > 0 ?
                  allProducts?.map(product => (
                  <div key={product?.id} className="col-md-3 mb-2">
                    <Card style={{ width: '18rem' }}>
                      <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
                      <Card.Body className='text-center'>
                        <Card.Title>{product?.title}</Card.Title>
                        <Link to={`/products/${product}/view`} className='btn btn-secondary'>View more..</Link>
                      </Card.Body>
                    </Card>
                  </div>))

                  :
                  <p className='fs-5 fw-bold my-5'>Product not Available</p>
              }

            </div>
        }
      </div>
    </>
  )
}

export default Home