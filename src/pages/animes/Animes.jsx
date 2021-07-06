import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AnimesSection, AnimesContainer } from './styles';

import { loadAnimes } from '../../actions/animesActions';

import HeroImage from '../../components/heroImage/heroImage';
import AnimeCard from '../../components/animeCard/AnimeCard';

const Animes = () => {
  const dispatch = useDispatch();

  const { animes } = useSelector((state) => state.animes);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(loadAnimes());
    setLoading(false);
  }, []);

  return (
    <AnimesSection>
      <HeroImage />

      <AnimesContainer>
        {loading ? (
          <h1>Cargando animes...</h1>
        ) : (
          animes.map((anime) => <AnimeCard key={anime.mal_id} {...anime} />)
        )}
      </AnimesContainer>
    </AnimesSection>
  );
};

export default Animes;
