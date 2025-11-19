
import { faArrowRight, faEnvelope, faPhone, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  return (
    <>
      <div style={{ height: '300px' }} className="bg-primary d-flex flex-column text-light ">
        <div className="d-flex justify-content-evenly w-100 mt-5">
          <div style={{ width: '400px' }} className="intro">
            <h3><FontAwesomeIcon icon={faTruckFast} />Daily Cart</h3>
            <p>Designed and built with all the love in the world by the Luminar team with

              the help of our contributors.</p>

            <p>Code licensed Luminar, docs CC BY 3.0.</p>

            <p>Currently v5.3.2.</p>
          </div>
          <div className='links d-flex flex-column'>
            <h3>Links</h3>
            <Link to={'/'} className='text-decoration-none text-light'>Home</Link>
            <Link to={'/wishlist'} className='text-decoration-none text-light'>WishList</Link>
            <Link to={'/cart'} className='text-decoration-none text-light'>Cart</Link>
          </div>

          <div className='links d-flex flex-column'>
            <h3>Guides</h3>
            <a href='https://react-bootstrap.github.io/' className='text-decoration-none text-light'>React</a>
            <a href='https://react-bootstrap.github.io/' className='text-decoration-none text-light'>React BootStrap</a>
            <a href='https://react-bootstrap.github.io/' className='text-decoration-none text-light'>React Redux</a>
            <a href='https://react-bootstrap.github.io/' className='text-decoration-none text-light'>React Router Dom</a>

          </div>

          <div className='links d-flex flex-column'>
            <h3>Contact Us</h3>
            <div className="d-flex">
              <input type="text" placeholder='Email-here' className='form-control text-light bg-light' />
              <button className='btn'><FontAwesomeIcon className='text-light' icon={faArrowRight} /></button>
            </div>
            <div className="d-flex mt-5 justify-content-between">
              <FontAwesomeIcon icon={faWhatsapp} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faEnvelope} />
               <FontAwesomeIcon icon={faPhone} />
            </div>
          </div>
        </div>

        <p className="fw-bolder text-center mt-3">Copy right © July 2025 Batch,Daily cart,Built withReact redux.</p>
      </div>
    </>
  )
}

export default Footer