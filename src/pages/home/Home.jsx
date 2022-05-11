import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAnimes } from '../../redux/animes/middlewares';
import { getMangas } from '../../redux/mangas/middlewares';

import {
  HomePage,
  HomeSection,
  HomeSectionTitle,
  HomeSectionContent,
} from './styles';

import Loading from '../../components/loading/Loading';
import AnimeCard from '../../components/animeCard/AnimeCard';
import MangaCard from '../../components/mangaCard/MangaCard';
import CharacterCard from '../../components/characterCard/CharacterCard';
import { getCharacters } from '../../redux/characters/middlewares';

const Home = () => {
  const dispatch = useDispatch();

  const { animes } = useSelector((state) => state.animes);
  const { mangas } = useSelector((state) => state.mangas);
  const { characters } = useSelector((state) => state.characters);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAnimes());
    dispatch(getMangas());
    dispatch(getCharacters());
    setLoading(false);
  }, []);

  return (
    <HomePage>
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
