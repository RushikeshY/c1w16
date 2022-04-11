
// keep the add to cart component here

import React,{useState} from 'react'
const CartButton = () => {

  const [count,setCount] = useState(0)

  const Increment=(value)=>{
  // if(count>-1)
 
    setCount(count+value)
  // }

  }
    //manage state of the count 
  return <>
  {/* add to cart button */}

  <h2 className="count-item">{count}</h2>
  {/* count with - and  + button */}


  <div>
      {/* <button>-</button> */}
      <button  className='btn' onClick={()=>{Increment(1)}} >+</button>
      <button id="q" onClick={()=>{Increment(1)}} >Add to Cart</button>
      <button  className='btn' onClick={()=>{Increment(-1)}} >-</button>
      {/* <button>+</button> */}
  </div>
  </>;
};
export default CartButton
