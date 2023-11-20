import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {        
    // const navigate = useNavigate();
    const navItems = [
      {
        name: 'Home',
        slug: "/",
        
      }, 
      {
        name: "About",
        slug: "/about",
        
    },
    {
        name: "Contact",
        slug: "/contact",
        
    },
    {
        name: "Privacy Policy",
        slug: "/privacy-policy",
        
    },
    {
        name: "Blog",
        slug: "/blog",
        
    },
    
    ]
  
    return (
      <header className='py-3 shadow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-full'>
          <nav className='flex'>
            <Link to={'/'} className='mr-4 mt-2 px-6 py-2 cursor-pointer'>
              GitClone
            </Link>
            <ul className='flex ml-auto'>
            {navItems.map((item) => {
                return <li key={item.slug}>
                <button 
                
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full font-medium hover:text-black'
                >
                  {item.name}
                </button>
            </li>
            })}
              
            </ul>
          </nav>
        
      </header>
    )
  }

export default Header