import { useDispatch } from 'react-redux';

import useForm from '../../hooks/useForm';

import { FormSearch, InputSearch, ButtonSearch } from './styles';

import { getAnimesByQueryString } from '../../actions/animesActions';

const AnimesFinder = () => {
  const dispatch = useDispatch();

  const { formValues, handleInputChange, resetForm } = useForm({ search: '' });
  const { search } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();

    const isInvalidString = search.trim().length > 0;

    if (!isInvalidString) {
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
        placeholder='Busca tus animes favoritos'
        autoComplete='off'
      />

      <ButtonSearch onClick={handleSearch} type='submit'>
        Buscar
      </ButtonSearch>
    </FormSearch>
  );
};
export default AnimesFinder;
