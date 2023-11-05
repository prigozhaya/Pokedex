import { ChangeEvent } from 'react';
import { PokemonSelectProps } from '../types/types';
import './styles.css';

export default function ElementsPerPageDropDown(
  SelectProps: PokemonSelectProps
) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    SelectProps.onElementsPerPage(e.target.value);
    SelectProps.setCurrentPage(1);
  }

  return (
    <div className="dropDownContainer">
      <p>Cards per page: </p>
      <select
        name="elementsPerPage"
        className="dropDown"
        onChange={() => handleChange}
      >
        <option value="30">30</option>
        <option value="60">60</option>
        <option value="90">90</option>
      </select>
    </div>
  );
}
