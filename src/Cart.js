import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
function Cart() {
  const dispatch = useDispatch()
  const cartobj = useSelector(store => store.cartReducer)
  const tablebody = cartobj.cartitems.map((item) => {
    return <div className='cart-cartitems'>
      <div className='ccart-11'>
      <img className='qwe' src={item.itemImage}></img>
      </div>
      <div className='cartt-22'>
      {item.itemPrice}
      </div>
      <div className='carrrt-44'>
    {item.itemName}
    </div>
    <div className='cart-33'>
      <button className='removebttn' onClick={() => { dispatch({ type: 'DELETE_ITEM_TO_CART', payload: item }) }}>Remove From Basket</button>
      </div>
      </div>
  })
  return (
    <div className='cart-department'>
      <div className="cartt">
        <h3>In Your Basket : {cartobj.cartitems.length}</h3>
       
          
            {tablebody}
       
        
      </div>
    </div>
  )
}

export default Cart