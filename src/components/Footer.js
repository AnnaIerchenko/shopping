import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'

const Footer = () => {

  const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white'
  return (
    <div className='flex items-center justify-around p-2'>
      <div className='flex flex-1 flex-col flex-wrap p-2'>
        {/* store information */}
        <h1 className='text-[25px]'>Summer Kings</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eligendi, labore minima mollitia, incidunt quisquam recusandae sed nesciunt vero fugit dolores nisi expedita, alias voluptas illo. Minima ad placeat alias.
        Doloribus, temporibus? Aspernatur temporibus possimus commodi exercitationem, id, amet perspiciatis  repudiandae?
       </p>
       <div className='flex items-center justify-center mt-3 self-start'>
        <div className={socialStyle + 'bg-blue-700'}>
          <Facebook />
        </div>
        <div className={socialStyle + 'bg-orange-500'}>
          <Instagram />
        </div>
        <div className={socialStyle + 'bg-sky-400'}>
          <Twitter />
        </div>
        <div>
          <Pinterest className={socialStyle + 'bg-red-600'}/>
        </div> 
       </div>
      </div>

      <div className='flex flex-1 flex-col p-2'>
        {/* contact information */}
        <div className='flex m-3'>
          <LocationOnOutlined />
          <p className='pl-3'>State of California</p>
        </div>
        <div className='flex m-3'>
          <LocalPhoneOutlined />
          <p className='pl-3'>+123456789</p>
        </div>
        <div className='flex m-3'>
          <EmailOutlined />
          <p className='pl-3'>SummerKing@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Footer