import { useDispatch } from 'react-redux';

import { FormSearch, InputSearch, ButtonSearch } from './styles';

import { getAnimesByQueryString } from '../../actions/animesActions';

const AnimesFinder = ({ search, handleInputChange, resetForm }) => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();

    const isInvalidString = search.trim().length === 0;

    if (isInvalidString) {
      return;
    }

    dispatch(getAnimesByQueryString(search.trim()));
    resetForm();
  };

  return (
    <FormSearch onSubmit={handleSearch}>
      <InputSearch
        onChange={handleInputChange}
        value={search}
        name='search'
        type='search'
        placeholder='Buscar anime'
      />

      <ButtonSearch type='submit'>Buscar</ButtonSearch>
    </FormSearch>
  );
};
export default AnimesFinder;
