import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('Zainkeep')
  const [password, setPassword] = useState('')

  const handleUsername = () => {
    setUsername()
  }
  const handlePass = () => {
    setPassword()
  }
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col absolute top-[30%] shadow-lg border-[2px] p-5 w-[60%]'>
        <text className='text-2xl'>Login</text>
        <div className='flex mt-3'>
          <input 
            className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
            placeholder='username'
            value={username}
            onChange={handleUsername}
            />
        </div>
        <div className='flex mt-3'>
          <input 
            placeholder='password'
            className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
            value={password}
            onChange={handlePass}
          />
        </div>
          <input type='button' value='Login' className='btn mt-7 hover:scale-[1.02]' />
        
      </div>
    </div>
  )
}

export default Login