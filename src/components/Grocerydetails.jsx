import React from "react"

import data from '../data.json'
import GroceryItem from "./GroceryItem"


const GroceryDetails = ()=>{
// console.log(data)
 
    return(
        <>
        <div id="a1">
        <h1 id="h1">Groceries</h1>
        </div>
   
        <div className="container">
            {/* map through the data and display the cards */}
           {data.map((item)=>{

               return <GroceryItem key={item.id} {...item} />
           })}
        </div>
        </>
    )
}
export default GroceryDetails;