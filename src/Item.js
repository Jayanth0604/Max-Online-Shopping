import React from 'react'
import { useDispatch } from 'react-redux'
function Item({item}) {
  const dispatch =useDispatch()
  return (
    <div className='dress'>
      <img src={item.itemImage}  className='dressimg'></img>
      <h3>{item.itemPrice}</h3>
      <h2>{item.itemName}</h2>
      <button className='dressbtnn' onClick={()=>{dispatch({type:'ADD_ITEM_TO_CART',payload:item})}}>Add To Basket</button>
    </div>
  )
}

export default Item