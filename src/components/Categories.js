import Category from './Category'
import React from 'react'
import {ApiCategories} from '../apifolder/CategoryApi'

const Categories = () => {
  return (
    <div className='flex justify-between items-center p-5'>
      {
        ApiCategories.map((category, index) => {
          return <Category item={category} key={index} />        
      })
      }
    </div>
  )
}

export default Categories