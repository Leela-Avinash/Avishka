import React from 'react'
import expoBanner from '../assets/expo-banner.png';

const Header = () => {
  return (
    <div id='home' className='w-screen'>
        <img src={expoBanner} alt="Banner" className='w-full'/>
    </div>
  )
}

export default Header