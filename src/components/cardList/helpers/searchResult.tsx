import { useAppSelector } from '../../../store/hooks';

export default function GetSearchResult() {
  const searchValue = useAppSelector((state) => state.searchValue.searchValue)
  return searchValue.length > 0
    ? `Searching results for the query "${searchValue}"`
    : '';
}
