import React, { useState } from 'react';
import AddToCartIcon from "../../../assets/icons/add_cart.svg"
const ListItem=({data})=>{
    const [counter,setCounter]=useState(0)
    const increaseCounterByOne=()=>{
        setCounter(counter+1)
    }

    const decreaseCounterByOne=()=>{
        if(counter===0){
            return;
        }
        setCounter(counter-1)
    }
    return(
        <div className={'item-card'}>
            <img className={'img-fluid'} src='assets/pr1.jfif' alt='some title'/>
            <div className={'item-card__information'}> 
                <div className={'pricing'}>
                    <span>₹{data.price}</span>
                    <small>
                        <strike>₹{data.discountedPrice}</strike>
                    </small>
                </div>
                <div>
                <h3>{data.title}</h3>
                </div>
                </div>
                {
                 counter<1?
                 <button className={'cart-add'} onClick={increaseCounterByOne}>
                    <span>Add To Cart</span>
                    <img src={AddToCartIcon} alt='some icon' ></img>
                    </button>
                    :
                    <div className='cart-addon'>
                    <button onClick={decreaseCounterByOne}><span>-</span></button>
                    <span>{counter}</span>
                    <button onClick={increaseCounterByOne}><span>+</span></button>
                </div>
                }
            </div>
    )
}
export default ListItem;