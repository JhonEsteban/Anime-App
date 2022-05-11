import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  Container,
  SearchAnimeP,
  SearchAnimeHeading,
  AnimesContainer,
  ButtonReturn,
} from './styles';

// import { clearAllFoundAnimes } from '../../actions/animesActions';

import useForm from '../../hooks/useForm';

import AnimesFinder from '../../components/animesFinder/AnimesFinder';
import AnimeCard from '../../components/animeCard/AnimeCard';

const initialValues = {
  search: '',
};

const SearchAnime = ({ history }) => {
  // const dispatch = useDispatch();

  const { formValues, handleInputChange, resetForm } = useForm(initialValues);
  const { search } = formValues;

  const { foundAnimes } = useSelector((state) => state.animes);

  const handleReturn = () => {
    // dispatch(clearAllFoundAnimes());
    history.goBack();
  };

  useEffect(() => {
    // dispatch(clearAllFoundAnimes());
  }, []);

  return (
    <SearchAnimeP>
      <Container>
        <SearchAnimeHeading>
          <ButtonReturn onClick={handleReturn} type='button'>
            Regresar
          </ButtonReturn>

          <AnimesFinder
            search={search}
            handleInputChange={handleInputChange}
            resetForm={resetForm}
          />
        </SearchAnimeHeading>

        <AnimesContainer>
          {foundAnimes.map((anime) => (
            <AnimeCard key={anime.mal_id} {...anime} />
          ))}
        </AnimesContainer>
      </Container>
    </SearchAnimeP>
  );
};

export default SearchAnime;
