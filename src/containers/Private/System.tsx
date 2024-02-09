import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { paths } from 'src/utils/constants';
import { SlideBar, Header } from '.';

const System = () => {
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  if (!isLoggedIn) return <Navigate to={`${paths.LOGIN}`} replace />;

  return (
    <div className="w-full h-full flex gap-1 flex-col items-center">
      <Header />
      <div className="flex w-full flex-auto">
        <SlideBar />
        <div className="flex-auto bg-white shadow-md rounded-md h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default System;
