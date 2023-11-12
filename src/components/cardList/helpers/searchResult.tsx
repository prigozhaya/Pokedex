import { useContext } from "react";
import { AppPokemonContext } from "../../../pages/mainPage";

export default function GetSearchResult(){
  const {searchValue } = useContext(AppPokemonContext);
return searchValue.length > 0 ? `Searching results for the query "${searchValue}"` : '';
}
