"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import './Nav.css'
import SearchBar from '../SearchBar/SearchBar'
import LanguageMenu from '../LanguageMenu/LanguageMenu'

const Nav = () => {
  const [toggleNavMenu, setToggleNavMenu] = useState(false)
 
  return (
    <div className="z-10 absolute w-full shadow-lg py-2 px-6 nav_bar flex flex-col items-center justify-between lg:flex-row">
      <div className="flex items-center justify-between w-full lg:w-fit">
        <a href="/">
          <Image
            className="ml-5"
            alt="egypt-flag"
            src="/assets/images/egyptFlag.png"
            width={35}
            height={35}
          />
        </a>
        <div
          className="flex flex-col gap-1 cursor-pointer lg:hidden"
          onClick={() => setToggleNavMenu(!toggleNavMenu)}
        >
          <span
            className={`inline-block w-0 bg-white rounded-lg px-5 py-[0.2rem] ${
              toggleNavMenu ? "rotate-45" : ""
            } transition-all duration-500`}
          ></span>
          <span
            className={`inline-block w-0 bg-white rounded-lg px-5 py-[0.2rem] ${
              toggleNavMenu ? "rotate-[135deg] absolute" : ""
            } transition-all duration-500`}
          ></span>
          <span
            className={`inline-block w-0 bg-white rounded-lg px-5 py-[0.2rem] ${
              toggleNavMenu ? "opacity-0" : ""
            } transition-all duration-500`}
          ></span>
        </div>
      </div>
      <div
        className={`nav_menu  flex flex-col w-full ${
          toggleNavMenu ? "h-[9rem]" : "h-0"
        } lg:flex-row lg:h-full lg:opacity-100  lg:justify-between lg:items-center`}
      >
        <div className='self-center overflow-hidden lg:flex lg:justify-center lg:grow'>
          <ul className="flex flex-col gap-y-1 text-white font-bold py-2 lg:flex-row lg:gap-x-24">
            <li className="cursor-pointer drop-shadow">
              <a href="/">Home</a>
            </li>
            <li className="cursor-pointer drop-shadow">
              <a href="/explore">Explore</a>
            </li>
            <li className="cursor-pointer drop-shadow">
              <a href="/aboutus">About us</a>
            </li>
            <li className="cursor-pointer drop-shadow">
              <a href="/">Contact us</a>
            </li>
          </ul>
        </div>
        <div className={`flex gap-10 justify-between ${toggleNavMenu ? '' : 'overflow-hidden'}`}>
          <SearchBar setToggleNavMenu={setToggleNavMenu}/>
          <LanguageMenu />
        </div>
      </div>
    </div>
  );
}

export default Nav