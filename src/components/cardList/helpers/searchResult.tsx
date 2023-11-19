export default function getSearchResult(searchValue: string) {
  return searchValue.length > 0
    ? `Searching results for the query "${searchValue}"`
    : '';
}
