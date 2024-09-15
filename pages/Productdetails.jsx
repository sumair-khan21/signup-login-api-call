import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./style.css"


const Productdetails = () => {
    const {id} = useParams()
    // console.log("id",id);
    useEffect(()=>{
        singleData()
    },[])
    const [products, setProducts] = useState([])
    const singleData = async ()=>{
     try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProducts(response.data)
     } catch (error) {
        console.log("error",error);
     }
    }
    console.log("product",products);
    
  return (
    <>
    <div className='detailsCard'>
    <Card sx={{ maxWidth: 390  }}>
      <CardMedia
        // sx={{ height: 140 }}
        // image="/static/images/cards/contemplative-reptile.jpg"
        // title="green iguana"
      />
      <img src={products?.image} className='card1' />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1 className='title'>{products?.title}</h1>
        </Typography>
         <p className='price'>{products?.price}</p>
         <p className='category'>{products?.category}</p>
        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          </Typography> */}
      </CardContent>
      <CardActions className='cardbutton'>
      <Button variant="outlined">Share</Button>
      <Button variant="outlined">Buy Now</Button>
        {/* <Button size="small"></Button> */}
        {/* <Button size="small"></Button> */}
      </CardActions>
    </Card>
          </div>

    </>
  )
}

export default Productdetails