import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function Cardcmp({image , title , id , price , category}) {
  const navigate = useNavigate()
  return (
    <>
    <div className="card">
  <div className="card-img"><img src={image} alt=""  style={{height:"100px"}}/></div>
  <div className="card-info">
    <p className="text-title">{title?.slice(0,5)} </p>
  </div>
  <div className="card-footer">
	<span className="text-title">${price}</span>
  </div>
  <div className="card-footer">
	<span className="category">{category}</span>
  </div>
  
{/* <button className="card-button" onClick={()=>  {
  navigate(`productDetails/${id}`); 
}}>Add To Cart</button> */}
<div className="button">
<Button variant="contained" onClick={()=>  {
  navigate(`productDetails/${id}`); 
}}>Add To Cart</Button>
  </div>
</div>
    </>
  );
}
export default Cardcmp;