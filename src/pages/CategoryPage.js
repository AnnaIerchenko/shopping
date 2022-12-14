import React from 'react'
import Announce from "../components/Announce"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import NewsLetter from "../components/NewsLetter"
import Footer from "../components/Footer"

const CategoryPage = () => {
  return (
    <div>
      <Announce />
      <Navbar />

      <div className='flex flex-col p-5'>
        <h1 className='text-[30px]'>Men's Clothes</h1>
        <div className='flex items-center justify-between my-3'>
          <div className='flex'>
          <p>Filter by</p>
          <select className='ml-3 border-2 border-silver'>
            <option selected disabled>Size</option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
          <select className='ml-3 border-2 border-silver'>
            <option selected disabled>Color</option>
            <option>Yellow</option>
            <option>Blue</option>
            <option>Red</option>
          </select>
          </div>
          <div className='flex'>
            <p>Sort by</p>
            <select className='ml-3 border-2 border-silver'>
              <option>Newset (first)</option>
              <option>Oldest (first)</option>
              <option>Price (Asc)</option>
              <option>Price (Dsc)</option>
            </select>
          </div>
        </div>
      </div>

      <Products />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default CategoryPage