import React from 'react';
import { NavLink } from 'react-router-dom';
import useCategories from 'src/react-query/useCategories';

const Navigation = ({ isAdmin = false }: { isAdmin?: boolean }) => {
  const { data: categories } = useCategories();

  return (
    <div
      className={`w-full flex ${
        isAdmin ? 'justify-start' : 'justify-center'
      } items-center h-[40px] text-white bg-secondary1 sticky-header`}
    >
      <div className="w-3/4 flex flex-row">
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            `${
              isActive ? 'bg-red-500' : 'transparent'
            } text-white text-[14px] font-bold px-[12px] cursor-pointer hover:bg-red-500 items-center justify-center flex overflow-hidden text-ellipsis whitespace-nowrap leading-[40px]`
          }
        >
          Trang chủ
        </NavLink>
        {categories?.map((category, index) => (
          <NavLink
            key={index}
            to={`/${category.label}?categoryCode=${category.code}&page=0`}
            className={({ isActive }) =>
              `${
                isActive ? 'bg-red-500' : 'transparent'
              } text-white text-[14px] font-bold px-[12px] cursor-pointer hover:bg-red-500 items-center justify-center flex overflow-hidden text-ellipsis whitespace-nowrap leading-[40px]`
            }
          >
            {category?.value}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
