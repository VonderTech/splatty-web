'use client';

import { ThemeContext } from '../../context/ThemeContext';
import React, { useContext, useState } from 'react';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import Image from 'next/image';

const Navbar = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  // update state on toggle
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      changeTheme('dark');
    } else {
      changeTheme('light');
    }
  };
  return (
    <div className="container mx-auto px-4">
      <nav className="navbar flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          {/* <img className="h-8 w-8" src="/logo.svg" alt="Logo" /> */}
        </div>
        {/* Navigation */}
        <div className="flex items-center">
          <button className="btn btn-square btn-ghost">
            <label className="swap swap-rotate w-12 h-12">
              <input
                type="checkbox"
                onChange={handleToggle}
                // show toggle image based on localstorage theme
                checked={theme === 'light' ? false : true}
              />
              {/* light theme sun image */}
              <Image src={sun} alt="light" className="w-8 h-8 swap-on" />
              {/* dark theme moon image */}
              <Image src={moon} alt="dark" className="w-8 h-8 swap-off" />
            </label>
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
