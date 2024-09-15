import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cardcmp from '../components/Cardcmp'
import "./style.css"
const Home = () => {
    const [productsData, setProductsData] = useState([])
    const getData  = async ()=>{
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
        // console.log("response",response.data);
        setProductsData(response.data)
        } catch (error) {
            console.log("error",error);       
        }
    }
    useEffect(()=>{
     getData()
    },[])
  return (
    <>
    <div>
        <ol>
            
            {
                productsData?.map((product,index)=> {
                    return <Cardcmp 
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    category={product.category}
                    id={product.id}
                    />
                } )
            }
            
        </ol>
    </div>
    
    </>
  )
}

export default Home