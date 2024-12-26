import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/LogoBaru.png';

export default function NavbarMenu() {
  
  const handleClick = (e) => {};

  return (
    <div className="bg-white w-full h-16 flex justify-between items-center px-5 md:px-14 md:h-24 ">
      {/* Logo di kiri */}
      <div className="flex">
        <img src={Logo} alt="Logo" className="relative h-12 md:h-32" />
      </div>

      {/* Navigasi di tengah */}
      <ul className="flex font-normal gap-x-2 md:gap-x-10">
        <Link to={'/'} onClick={handleClick} className="text-xs md:text-xl font-sans text-slate-700 hover:text-black">
          Home
        </Link>

        <Link to={'/menu'} onClick={handleClick} className="text-xs md:text-xl font-sans text-slate-700 hover:text-black">
          Menu
        </Link>

        <Link to={'/rate'} onClick={handleClick} className="text-xs md:text-xl font-sans text-slate-700 hover:text-black">
          Rate
        </Link>

        <Link to={'/about'} onClick={handleClick} className="text-xs md:text-xl font-sans text-slate-700 hover:text-black">
          About Us
        </Link>
      </ul>

      <Link to={'/login'} className='bg-orange-500 text-white text-xs md:text-lg font-semibold rounded-lg px-3 py-1 hover:bg-orange-700 md:px-5 md:py-1'>
        Login
      </Link>
    </div>
  )
}