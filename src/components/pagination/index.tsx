import { Link } from 'react-router-dom';
import './styles.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setCurrentPage } from '../../store/slices/metaInfoSlice';

export default function Pagination() {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.metaInfo.currentPage);
  const elementsPerPage = useAppSelector(
    (state) => state.metaInfo.elementsPerPage
  );
  const pokemonsCount = useAppSelector((state) => state.metaInfo.pokemonsCount);
  const maxPage =
    Math.floor(pokemonsCount / Number(elementsPerPage)) > 0
      ? Math.floor(pokemonsCount / Number(elementsPerPage))
      : 1;

  function handleNext() {
    let currentPage = page;
    currentPage++;
    currentPage = currentPage > maxPage ? maxPage : currentPage;
    dispatch(setCurrentPage({ currentPage }));
  }

  function handlePrev() {
    let currentPage = page;
    currentPage--;
    currentPage = currentPage < 1 ? 1 : currentPage;
    dispatch(setCurrentPage({ currentPage }));
  }

  return (
    <div className="paginationContainer">
      <div className="currentPage">{page}</div>
      <div className="crossPiece">
        <Link to={`/catalog/${page < 2 ? 1 : page - 1}`}>
          <button className="paginationBtn prevBtn" onClick={handlePrev}>
            ◂
          </button>
        </Link>
        <div className="verticalAxis">
          <div className="verticalBlock"> ▴ </div>
          <div className="verticalBlock"> ● </div>
          <div className="verticalBlock"> ▾ </div>
        </div>
        <Link to={`/catalog/${page > maxPage - 1 ? maxPage : page + 1}`}>
          <button className="paginationBtn nextBtn" onClick={handleNext}>
            ▸
          </button>
        </Link>
      </div>
    </div>
  );
}
