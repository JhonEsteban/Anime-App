import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  HomePage,
  HomeSection,
  HomeSectionTitle,
  HomeSectionContent,
} from './styles';

import { loadResources } from '../../actions/animesActions';

import HeroImage from '../../components/heroImage/heroImage';
import AnimeCard from '../../components/animeCard/AnimeCard';
import MangaCard from '../../components/mangaCard/MangaCard';
import CharacterCard from '../../components/characterCard/CharacterCard';
import Loading from '../../components/loading/Loading';

const Home = () => {
  const dispatch = useDispatch();

  const { animes, mangas, characters } = useSelector((state) => state.animes);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(loadResources());
    setLoading(false);
  }, []);

  return (
    <HomePage>
      <HeroImage />

      <HomeSection>
        <HomeSectionTitle>Animes Top</HomeSectionTitle>

        <HomeSectionContent>
          {loading ? (
            <Loading name='animes' />
          ) : (
            animes.map((anime) => <AnimeCard key={anime.mal_id} {...anime} />)
          )}
        </HomeSectionContent>
      </HomeSection>

      <HomeSection>
        <HomeSectionTitle>Mangas Top</HomeSectionTitle>

        <HomeSectionContent>
          {loading ? (
            <Loading name='mangas' />
          ) : (
            mangas.map((manga) => <MangaCard key={manga.mal_id} {...manga} />)
          )}
        </HomeSectionContent>
      </HomeSection>

      <HomeSection>
        <HomeSectionTitle>Personajes Top</HomeSectionTitle>

        <HomeSectionContent>
          {loading ? (
            <Loading name='personajes' />
          ) : (
            characters.map((character) => (
              <CharacterCard key={character.mal_id} {...character} />
            ))
          )}
        </HomeSectionContent>
      </HomeSection>
    </HomePage>
  );
};

export default Home;
