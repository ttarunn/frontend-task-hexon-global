import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  return (
    <div className='text-center h-[86.5vh] bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 w-full py-[15%]'>
    <div>
      <input className="shadow appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center my-2" id="username" type="text" placeholder="type github username" 
      onChange={(e)=> setUsername(e.target.value)}
      value={username}
      required
      />
    </div>
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={()=> username ? navigate(`/repo/${username}`):alert('Please type username')}>
        Search
      </button>
    </div>
    <Outlet/>
    </div>
  )
}

export default LandingPage