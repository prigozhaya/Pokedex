import './styles.css';
import { useAppDispatch } from '../../store/hooks';
import {
  setCurrentPage,
  setElementsPerPage,
} from '../../store/slices/metaInfoSlice';
import { useNavigate } from 'react-router-dom';
import { setSearchValue } from '../../store/slices/searchSlice';

export default function ElementsPerPageDropDown() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setCurrentPage({ currentPage: 1 }));
    dispatch(setElementsPerPage({ elementsPerPage: e.target.value }));
    dispatch(setSearchValue({ searchInputValue: '' }));
    navigate('..');
  }

  return (
    <div className="dropDownContainer">
      <p>Cards per page: </p>
      <select
        name="elementsPerPage"
        className="dropDown"
        onChange={handleChange}
      >
        <option value="30">30</option>
        <option value="60">60</option>
        <option value="90">90</option>
      </select>
    </div>
  );
}
