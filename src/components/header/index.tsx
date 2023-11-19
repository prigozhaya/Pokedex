import './styles.css';
import PokemonSearch from '../search';
import { useNavigate } from 'react-router-dom';
import { setSearchValue } from '../../store/slices/searchSlice';
import { useAppDispatch } from '../../store/hooks';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleOutsideClick = () => {
    navigate('/');
    dispatch(setSearchValue({ searchInputValue: '' }));
  };

  return (
    <header>
      <div className="styledFirstHeaderRow">
        <img
          src="/src/assets/pokedex.png"
          alt="pokedex-logo"
          className="pokedexLogo"
          onClick={handleOutsideClick}
        />
      </div>
      <div className="headerContainer">
        <PokemonSearch />
      </div>
    </header>
  );
}
