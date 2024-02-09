import React from 'react';
import { Navigation } from '../Public';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full flex flex-none h-[40px]">
      <Link
        to={'/'}
        className="flex justify-center items-center font-bold bg-secondary1 text-white w-[256px] flex-none"
      >
        Phongtro123
      </Link>
      <div className="flex-auto">
        <Navigation isAdmin />
      </div>
    </div>
  );
};

export default Header;
