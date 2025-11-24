import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { decreament, emptyCart, increament, removeCart } from '../slices/cartSlice'
import Swal from 'sweetalert2'


Header
function Cart() {
  const userCart=useSelector(state=>state.cartReducer)
  const [sum,setSum]=useState(0)
  const navigate=useNavigate()
  useEffect(()=>{
    console.log(userCart?.reduce((acc,curr)=>acc+curr.totalPrice,0));
    
   setSum(userCart?.reduce((acc,curr)=>acc+curr.totalPrice,0))
  },[userCart])
   
  const dispatch=useDispatch()

  const handleDecreament=(product)=>{
     if(product.quantity>0){
         dispatch(decreament(product))
     }else{
      dispatch(removeCart(product?.id))
     }
  }

  const checkOut=()=>{
    dispatch(emptyCart())
    navigate('/')
    Swal.fire({
       title: 'Order Placed Successfully!',
        text: 'Thank you for Purchasing with us !!!',
        icon: 'success',
        confirmButtonText: 'OK'
    })
  }
  return (
    <>
      <Header />
      <div className='container py-5'>
        {
          userCart?.length?
          <div className="my-5">
          <h1 className='text-danger fw-bold'>Cart Summary</h1>
          <div className="row mt-3">
            <div className="col-md-8 border rounded p-5">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>
                <tbody>
                 {
                  userCart?.map((product,index)=>(
                     <tr  key={product.id}>
                    <td>{index+1}</td>
                    <td>{product.title}</td>
                    <td><img width={'50px'} height={'50px'} src={product?.thumbnail} alt="" /></td>
                    <td>
                      <div className="d-flex">
                        <button onClick={()=>handleDecreament()} className='btn fs-3 fw-bold'>-</button>
                        <input style={{width:'50px'}} value={product?.quantity} className='form-control' type="text" readOnly/>
                        <button onClick={()=>dispatch(increament(product))} className='btn fs-4 fw-bold'>+</button>
                      </div>
                    </td>
                    <td>$ {product?.totalPrice}</td>
                    <td><button onClick={()=>dispatch(removeCart(product?.id))} className='btn text-danger'> <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></td>
                  </tr>
                  ))
                 }
                </tbody>
              </table>
              <div className="float-end my-3">
                <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-2'>EMPTY CART</button>
                <Link to={'/'} className='btn btn-success'>SHOP MORE</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="border rounded p-3">
                <h3 className='fw-bold'>Total Amount :<span className='text-danger'>${sum}</span></h3>
                <hr />
                <div className='d-grid mt-2'>
                  <button onClick={checkOut} className='btn btn-success mt-2'>CHECK OUT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        :
         <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center flex-column'>
              <h3>Cart Is Empty!!</h3>
              <img className='w-25' src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" />
              <Link className='btn btn-primary' to={'/'}>Add more</Link>
            </div>
        }
      </div>
    </>
  )
}

export default Cart