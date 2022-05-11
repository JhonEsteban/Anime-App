import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  AnimeData,
  AnimePage,
  SingleAnime,
  SingleAnimeHeading,
  Image,
  Trailer,
  Button,
  Details,
} from './styles';

import { getAnimeById } from '../../redux/animes/middlewares';
import { removeSingleAnimeAction } from '../../redux/animes/actions';
import { addToFavorite } from '../../redux/shared/favorites/middlewares';

const Anime = ({ history }) => {
  const dispatch = useDispatch();
  const { animeId } = useParams();

  const { anime } = useSelector((state) => state.animes);

  const {
    mal_id: id,
    title,
    image_url: image,
    synopsis,
    trailer_url: trailer,
    episodes,
    score,
    duration,
  } = anime;

  useEffect(() => {
    dispatch(getAnimeById(animeId));
  }, [animeId]);

  const handleReturn = () => {
    dispatch(removeSingleAnimeAction());
    history.goBack();
  };

  const handleAddToFavorites = () => {
    dispatch(addToFavorite({ id, title, image }));
  };

  return (
    <AnimePage>
      <SingleAnime>
        <SingleAnimeHeading>
          <Button onClick={handleReturn} type='button'>
            Regresar
          </Button>
          <Image src={image} alt={title} />
        </SingleAnimeHeading>

        <Details>
          <h1>{title}</h1>

          <p>
            <strong>Episodios: </strong>
            <span>{episodes}</span>
          </p>

          <p>
            <strong>Puntaje: </strong>
            <span>{score}</span>
          </p>

          <p>
            <strong>Duración: </strong>
            <span>{duration}</span>
          </p>

          <button onClick={handleAddToFavorites} type='button'>
            Añadir a favorito
          </button>
        </Details>

        <AnimeData>
          <h3>Sinopsis:</h3>
          <p>{synopsis}</p>
        </AnimeData>

        <Trailer>
          <iframe
            width='560'
            height='315'
            src={trailer}
            title='YouTube video player'
            allow='accelerometer; autoplay=0; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            frameBorder='0'
          ></iframe>
        </Trailer>
      </SingleAnime>
    </AnimePage>
  );
};
export default Anime;
