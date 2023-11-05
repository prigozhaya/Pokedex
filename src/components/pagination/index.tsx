import { PaginationProps } from '../types/types';
import './styles.css';

export default function Pagination(paginationProps: PaginationProps) {
  const maxPage = Math.floor(
    paginationProps.pokemosCount / Number(paginationProps.pokemosPerPage)
  );

  function handleNext() {
    let page = paginationProps.currentPage;
    page++;
    page = page > maxPage ? maxPage : page;
    paginationProps.setCurrentPage(page);
  }

  function handlePrev() {
    let page = paginationProps.currentPage;
    page--;
    page = page < 1 ? 1 : page;
    paginationProps.setCurrentPage(page);
  }

  return (
    <div className="paginationContainer">
      <div className="currentPage">{paginationProps.currentPage}</div>
      <div className="crossPiece">
        <button className="paginationBtn prevBtn" onClick={handlePrev}>
          {' '}
          ◂{' '}
        </button>
        <div className="verticalAxis">
          <div className="verticalBlock"> ▴ </div>
          <div className="verticalBlock"> ● </div>
          <div className="verticalBlock"> ▾ </div>
        </div>
        <button className="paginationBtn nextBtn" onClick={handleNext}>
          {' '}
          ▸{' '}
        </button>
      </div>
    </div>
  );
}
