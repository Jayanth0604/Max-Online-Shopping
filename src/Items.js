import React from 'react'
import {useSelector} from 'react-redux'
import Item from './Item'

function Items() {
    
    const itemsobj = useSelector(store => store.itemReducer)
    const itemslist = itemsobj.items
   
    const itemsdata = itemslist.map((item)=>{
        return <div className="Dress-123">
           
            <Item item={item}/>

        </div>


    })



    return (
        <div className="container">
            <div className="row">
           <marquee className='mac-tag'> welcome to max fashion india online shopping {itemsobj.items.length} new items with special offers (10% discount on your first online purchase + extra 5% off with gift card )</marquee> 
                


            </div>
            {itemsdata}
            
        </div>
    )
}

export default Items
