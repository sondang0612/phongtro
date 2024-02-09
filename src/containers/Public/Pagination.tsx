import React from 'react';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { PageNumber } from 'src/components';
import icons from 'src/utils/icons';
type Props = {
  length: number;
  currentPage: number;
  searchParams?: object;
};

const { GrLinkNext, GrLinkPrevious } = icons;
const Pagination = (props: Props) => {
  const { length, currentPage, searchParams } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const handleChangePage = (pageNumber: number) => {
    navigate({
      pathname: location.pathname,
      search: createSearchParams({
        page: `${pageNumber}`,
        ...searchParams,
      }).toString(),
    });
  };

  const handleChangePageByType = (
    pageNumber: number,
    type: 'prev' | 'next'
  ) => {
    if (pageNumber === 0 && type === 'prev') return undefined;
    if (pageNumber === length - 1 && type === 'next') return undefined;
    navigate({
      pathname: location.pathname,
      search: createSearchParams({
        page: `${type === 'next' ? pageNumber + 1 : pageNumber - 1}`,
        ...searchParams,
      }).toString(),
    });
  };

  const handlePageValues = () => {
    if (length === 1 || length === 0) return [0];
    if (length === 2) return [0, 1];
    if (length === 3) return [0, 1, 2];
    if (length === 4) return [0, 1, 2, 3];
    if (currentPage === 0) {
      return [
        currentPage,
        currentPage + 1,
        currentPage + 2,
        currentPage + 3,
        currentPage + 4,
      ];
    }
    if (currentPage === length - 1) {
      return [
        currentPage - 4,
        currentPage - 3,
        currentPage - 2,
        currentPage - 1,
        currentPage,
      ];
    }
    if (currentPage === length - 2) {
      return [
        currentPage - 3,
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
      ];
    }

    if (currentPage === length - 3) {
      return [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      ];
    }
    return [
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
      currentPage + 3,
    ];
  };

  return (
    <div className="flex flex-row gap-[5px] mb-[50px] mt-[20px] items-center justify-center">
      <PageNumber
        value={<GrLinkPrevious size={20} />}
        onClick={() => handleChangePageByType(currentPage, 'prev')}
      />
      {currentPage > 2 && (
        <PageNumber
          selected={false}
          value={'...'}
          onClick={() => handleChangePage(0)}
        />
      )}
      {handlePageValues().map((value) => (
        <PageNumber
          key={value}
          selected={value === currentPage}
          value={value}
          onClick={() => handleChangePage(value)}
        />
      ))}
      {currentPage < length - 4 && (
        <PageNumber
          selected={false}
          value={'...'}
          onClick={() => handleChangePage(length - 1)}
        />
      )}
      <PageNumber
        value={<GrLinkNext size={20} />}
        onClick={() => handleChangePageByType(currentPage, 'next')}
      />
    </div>
  );
};

export default Pagination;
