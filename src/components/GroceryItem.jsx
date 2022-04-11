// reusable card component
import CartButton from "./CartButton";

const GroceryItem = (props) => {
  console.log(props)

  return <>
  <div className="Divitem">
    
     <img src={props.imgURL} alt="" />
     <h4>{props.title}</h4>
     <h4 style={{color:"green"}}>Discount : {props.discount}</h4>
  <div id="cart11">
      <p className="one1">mrp : {props.mrp}</p>
     <p className="one1"> Price : {props.sellingPrice}</p>

  </div>  
  <div id="btn">
  <CartButton/>
  </div>

  </div>
   

  </>;
};
export default GroceryItem;

