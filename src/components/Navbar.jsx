import React from 'react'
import './index.css'
const Navbar = () => {



  return (
    <div className='nav flex justify-between items-center text-white p-4 border-b border-gray-500'>
        <h1 className='text-2xl'>📽️ Movie Explorer</h1>
        <div className='flex gap-6 text-gray-100'>
            <h3>Popular Movies</h3>
            <h3>Genres</h3>
            <h3>About</h3>
            <h3>🌗</h3>
        </div>
    </div>
  )


}

export default Navbar