import { Link } from 'react-router-dom';
import './styles.css';
import { useContext } from 'react';
import { AppPokemonContext } from '../../pages/mainPage';
import { CatalogPokemonContext } from '../catalog';

export default function Pagination() {
  const { elementsPerPage, currentPage, setCurrentPage } =
    useContext(AppPokemonContext);
  const { pokemonsCount } = useContext(CatalogPokemonContext);

  const maxPage = Math.floor(pokemonsCount / Number(elementsPerPage));

  function handleNext() {
    let page = currentPage;
    page++;
    page = page > maxPage ? maxPage : page;
    setCurrentPage(page);
  }

  function handlePrev() {
    let page = currentPage;
    page--;
    page = page < 1 ? 1 : page;
    setCurrentPage(page);
  }

  return (
    <div className="paginationContainer">
      <div className="currentPage">{currentPage}</div>
      <div className="crossPiece">
        <Link to={`/catalog/${currentPage < 2 ? 1 : currentPage - 1}`}>
          <button className="paginationBtn prevBtn" onClick={handlePrev}>
            ◂
          </button>
        </Link>
        <div className="verticalAxis">
          <div className="verticalBlock"> ▴ </div>
          <div className="verticalBlock"> ● </div>
          <div className="verticalBlock"> ▾ </div>
        </div>
        <Link
          to={`/catalog/${
            currentPage > maxPage - 1 ? maxPage : currentPage + 1
          }`}
        >
          <button className="paginationBtn nextBtn" onClick={handleNext}>
            ▸
          </button>
        </Link>
      </div>
    </div>
  );
}
