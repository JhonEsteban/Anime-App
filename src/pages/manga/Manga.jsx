import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Details,
  Image,
  MangaData,
  MangaPage,
  SingleAnimeHeading,
  SingleManga,
} from './styles';

import { getMangaById, deleteSingleManga } from '../../actions/animesActions';

const Manga = ({ history }) => {
  const dispatch = useDispatch();
  const { mangaId } = useParams();

  const { manga } = useSelector((state) => state.animes);

  const {
    title,
    image_url: image,
    volumes,
    score,
    authors,
    synopsis,
    genres,
  } = manga;

  useEffect(() => {
    dispatch(getMangaById(mangaId));
  }, [mangaId]);

  const handleReturn = () => {
    dispatch(deleteSingleManga());
    history.goBack();
  };

  return (
    <MangaPage>
      <SingleManga>
        <SingleAnimeHeading>
          <Button onClick={handleReturn} type='button'>
            Regresar
          </Button>
          <Image src={image} alt={title} />
        </SingleAnimeHeading>

        <Details>
          <h1>{title}</h1>

          {volumes && (
            <p>
              <strong>Volumenes: </strong>
              <span>{volumes}</span>
            </p>
          )}

          <p>
            <strong>Puntaje: </strong>
            <span>{score}</span>
          </p>

          <p>
            <strong>Generos: </strong>
            {genres?.map((genre) => (
              <span key={genre.mal_id}>{genre.name}, </span>
            ))}
          </p>

          <p>
            <strong>Autor: </strong>
            {authors?.map((author) => (
              <span key={author.mal_id}>{author.name}</span>
            ))}
          </p>
        </Details>

        <MangaData>
          <h3>Sinopsis:</h3>
          <p>{synopsis}</p>
        </MangaData>
      </SingleManga>
    </MangaPage>
  );
};

export default Manga;
