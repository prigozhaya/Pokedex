import getSearchResult from '../components/cardList/helpers/searchResult';

it('should return a string with the search query when the searchValue parameter is not empty', () => {
  const searchValue = 'test';
  const expectedResult = 'Searching results for the query "test"';

  const result = getSearchResult(searchValue);

  expect(result).toBe(expectedResult);
});
