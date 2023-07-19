import { useState } from 'react';
import { MdDarkMode } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';

import logo from '../../assets/image/BRAIN.png'

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const [hidden, sethidden] = useState(true);

  const handleNav = () => {
    setNav(!nav);
    sethidden(!hidden);
  };

  const handelClick = () => {
    sethidden(true)
    setNav(!nav)
  };

  const elementClassName = hidden ? "hidden" : "";

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        size={30}
        className='absolute top-4 right-4 z-[99] md:hidden'
      />
      {nav ? (
        <div className={`fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 ${elementClassName} md:hidden`}>
          <ul className="flex flex-col items-center justify-between min-h-[250px]">
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/login">Connexion</a>
            </li>
            <li className="border-b border-gray-400 my-8 uppercase">
              <a href="/quizz">Inscription</a>
            </li>
            <li>
              <button onClick={handelClick}><MdDarkMode size={25} /></button>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}

      <div className='md:navbar  bg-[#A16EE7] fixed hidden z-50 text-white'>
        <div className="flex-1">
          <a className=' absolute' href="/" alt="logo">
            <img className=' w-52' src={logo} alt="" />
          </a>

        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal  px-1">
            <li>
              <button  > <MdDarkMode size={25} /></button>
            </li>
            <li>
              <a href='/contact'>
                Nous contacter
              </a>
            </li>
            <li><a href='/login'>Se connecter</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
