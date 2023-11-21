import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='w-full h-[100vh] bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-center text-4xl py-[16%] text-blue-600 space-y-5'>
        <h1 className='my-2'>Page Not Found</h1>
        <Link to={'/'}>Click here to Go Home</Link>
    </div>
  )
}

export default Error