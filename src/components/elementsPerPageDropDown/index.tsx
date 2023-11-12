import { useContext } from 'react';
import { AppPokemonContext } from '../../pages/mainPage';
import './styles.css';

export default function ElementsPerPageDropDown() {
  const { setCurrentPage, setElementsPerPage } = useContext(AppPokemonContext);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setElementsPerPage(e.target.value);
    setCurrentPage(1);
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
