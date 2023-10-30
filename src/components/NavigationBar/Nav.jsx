import Image from 'next/image'
import React from 'react'
import './Nav.css'
import SearchBar from '../SearchBar/SearchBar'
import LanguageMenu from '../LanguageMenu/LanguageMenu'

const Nav = () => {
  return (
    <div className='z-10 absolute w-full shadow-lg py-2 px-6 nav_bar flex items-center justify-between'>
        <Image
            className='ml-5'
            alt='egypt-flag'
            src='/assets/images/egyptFlag.png'
            width={35}
            height={35}
        />
        <ul className='flex gap-x-24 text-white font-bold'>
            <li className='cursor-pointer drop-shadow'><a href="/">Home</a></li>
            <li className='cursor-pointer drop-shadow'><a href="/explore">Explore</a></li>
            <li className='cursor-pointer drop-shadow'><a href="/aboutus">About us</a></li>
            <li className='cursor-pointer drop-shadow'><a href="/">Contact us</a></li>
        </ul>
        <div className='flex gap-10'>
          {/* Search box */}
          <SearchBar />
          {/* Language */}
          <LanguageMenu />
        </div>
    </div>
  )
}

export default Nav