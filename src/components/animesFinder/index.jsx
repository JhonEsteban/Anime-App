import useForm from '../../hooks/useForm';

import { FormSearch, InputSearch, ButtonSearch } from './styles';

const AnimesFinder = () => {
  const { formValues, handleInputChange, resetForm } = useForm({ search: '' });
  const { search } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();

    const isInvalidString = search.trim().length > 0;

    if (!isInvalidString) {
      return;
    }

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
