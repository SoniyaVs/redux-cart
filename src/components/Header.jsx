import { faCartShopping, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav, Container, Navbar, Badge, NavItem } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../slices/productSlice'




function Header({ insideHome }) {
  const useWishlist = useSelector(state => state.wishlistReducer)
  const useCart = useSelector(state => state.cartReducer)
  const dispatch=useDispatch()
  return (
    <Navbar expand="lg" className='bg-primary position-fixed w-100 z-1'>
      <Container>
        <Navbar.Brand><Link to={'/'} className='text-decoration-none text-light fw-bold'> <FontAwesomeIcon icon={faTruckFast} className='text-light  me-1' />Daily Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-md-flex  align-items-md-center">
            {
              insideHome &&
              <Nav.Item className='me-lg-2'>
                <input onChange={e=>dispatch(searchProduct(e.target.value))} type="text" className="form-control me-lg-5" placeholder='Search By Product Name' />
                </Nav.Item>

            }
          
            <Link className='text-decoration-none text-light fw-bold d-flex align-items-center' to={'/wishlist'}><FontAwesomeIcon icon={faHeart} className='text-danger me-1' /> WISHLIST <Badge pill bg='dark' className='ms-1'>{useWishlist?.length}</Badge></Link>
            <Link className='text-decoration-none text-light fw-bold ms-md-5 d-flex align-items-center' to={'/cart'}><FontAwesomeIcon className='text-success me-1' icon={faCartShopping} /> Cart <Badge pill bg='dark' className='ms-1'>{useCart?.length}</Badge></Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header