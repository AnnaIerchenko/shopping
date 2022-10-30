import React from 'react'
import Announce from './Announce'
import Counter from './Counter'
import Footer from './Footer'
import Navbar from './Navbar'
import NewsLetter from './NewsLetter'

const ProductPage = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className='flex sm:flex-col justify-center md:flex-col '>
        <div className='flex flex-1 items-center justify-center '>
          <img src='https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinBlack06_360x.jpg?v=1642719812'
          alt='product_img' 
          className='w-[70%] h-[70%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300'/>
        </div>
        <div className='flex-[1.3] flex items-start flex-col m-10'>
          <h1 className='title text-[40px]'>Black Hoody Original</h1>
          <p className='pr-[4rem] text-justify mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum libero! Corporis alias fuga tempore. Error itaque, quis similique nesciunt magni rerum explicabo accusamus laboriosam, temporibus fugiat qui repellat alias.
          </p>
          <p className='mt-7 text-3xl'>Price: <b>$70</b></p>
        {/* color variants */}
        <div className='flex text-2xl mt-7'>
          Colors
          <div className='bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
          <div className='bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
          <div className='bg-yellow-400 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
        </div>
        <div className='mt-7 text-2xl'>
          Size
          <select className='ml-5 border-2'>
            <option selected disabled>Select</option>  
            <option>Small</option>  
            <option>Medium</option>  
            <option>Large</option>  
          </select>  
         </div> 
         <div className='mt-5'>
          <Counter />
         </div>
         <button className='btn mt-5'>Add to cart</button>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default ProductPage