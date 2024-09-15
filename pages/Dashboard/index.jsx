import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Home from "../../pages/Home";
import { Routes, Route } from "react-router-dom";
import Productdetails from '../Productdetails';

const Dashboard = () => {
  const navigate = useNavigate()
  return (
   <>
   <Navbar />
   <Hero />
   <Routes>
       <Route index element={<Home />} />
       <Route path='/dashboard/*' element={<Dashboard />} />
      <Route path='productDetails/:id' element={<Productdetails />} />
      </Routes>
   
   </>
  )
}

export default Dashboard