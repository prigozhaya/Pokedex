import ElementsPerPageDropDown from "../components/elementsPerPageDropDown";
import { fireEvent, render, screen } from "@testing-library/react";

it('should set elements per page to the selected value and current page to 1 when an option is selected', () => {
  render(<ElementsPerPageDropDown />);
  fireEvent.change(screen.getByRole('combobox'), { target: { value: '60' } });

  const pokemonImg = screen.getByDisplayValue("60");
  expect(pokemonImg).toBeTruthy();
});