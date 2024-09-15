import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
    <div className='hero'>
   <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <div className='header'>
    
      <h1 className="">WELCOME TO DREAM BAZAAR</h1>
      

    </div>
      <p className="leading">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.

</p>
      <div className="flex justify-center">
      <Button variant=""> <a ><Link to={"/"} className='button inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none rounded text-lg'> GO BACK </Link></a></Button>
     

        {/* <button className="button inline-flex text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Learn More</button> */}
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
        <h1 className='header'>View Products
        </h1>
    </div>
  </div>
</section>
</div>
    </>
  )
}

export default Hero