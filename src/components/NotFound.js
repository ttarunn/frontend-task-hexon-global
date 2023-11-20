import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='w-full box-border h-[28.8rem] text-center py-[17.5%]'>
        <h1 className=''>No Repo Found For this User</h1>
        <div><Link to={'/'}>Click Here</Link> To Go Home</div>
    </div>
  )
}

export default NotFound